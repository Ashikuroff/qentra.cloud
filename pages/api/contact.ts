import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok: boolean
  message?: string
}

// Simple in-memory rate limiter: max 5 requests per IP per 60s window
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60_000

function checkRateLimit(ip: string) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    const nextEntry = { count: 1, resetAt: now + RATE_WINDOW_MS }
    rateLimitMap.set(ip, nextEntry)
    return { limited: false, remaining: RATE_LIMIT - 1, resetAt: nextEntry.resetAt }
  }

  if (entry.count >= RATE_LIMIT) {
    return { limited: true, remaining: 0, resetAt: entry.resetAt }
  }

  entry.count++
  return { limited: false, remaining: Math.max(0, RATE_LIMIT - entry.count), resetAt: entry.resetAt }
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function getBaseUrl(req: NextApiRequest) {
  const configured = process.env.SITE_URL
  if (configured) return configured

  const host = req.headers.host
  if (!host) return null

  const protoHeader = req.headers['x-forwarded-proto']
  const proto = Array.isArray(protoHeader) ? protoHeader[0] : protoHeader || 'https'
  return `${proto}://${host}`
}

function isAllowedOrigin(req: NextApiRequest) {
  const baseUrl = getBaseUrl(req)
  if (!baseUrl) return false

  let allowedOrigin: string
  try {
    allowedOrigin = new URL(baseUrl).origin
  } catch {
    return false
  }

  const originHeader = req.headers.origin
  if (originHeader) {
    return originHeader === allowedOrigin
  }

  const refererHeader = req.headers.referer
  if (!refererHeader) return false

  try {
    return new URL(refererHeader).origin === allowedOrigin
  } catch {
    return false
  }
}

function getClientIp(req: NextApiRequest) {
  const xRealIp = req.headers['x-real-ip']
  if (typeof xRealIp === 'string' && xRealIp.trim()) {
    return xRealIp.trim()
  }

  const forwardedFor = req.headers['x-forwarded-for']
  if (typeof forwardedFor === 'string') {
    const firstIp = forwardedFor.split(',')[0]?.trim()
    if (firstIp) return firstIp
  }

  return req.socket.remoteAddress || 'unknown'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ ok: false, message: 'Forbidden origin' })
  }

  const contentType = req.headers['content-type'] || ''
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return res.status(415).json({ ok: false, message: 'Unsupported media type' })
  }

  const ip = getClientIp(req)
  const rateLimit = checkRateLimit(ip)
  res.setHeader('X-RateLimit-Limit', String(RATE_LIMIT))
  res.setHeader('X-RateLimit-Remaining', String(rateLimit.remaining))
  res.setHeader('X-RateLimit-Reset', String(Math.ceil(rateLimit.resetAt / 1000)))

  if (rateLimit.limited) {
    res.setHeader('Retry-After', String(Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000))))
    return res.status(429).json({ ok: false, message: 'Too many requests. Please wait a moment and try again.' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields' })
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
  if (!emailRegex.test(String(email))) {
    return res.status(400).json({ ok: false, message: 'Invalid email address' })
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL
  const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL
  const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

  if (!SENDGRID_API_KEY) {
    if (!FORMSPREE_ENDPOINT) {
      console.error('Contact form: neither SENDGRID_API_KEY nor FORMSPREE_ENDPOINT is configured.')
      return res.status(500).json({ ok: false, message: 'Contact form is not configured. Please reach out directly.' })
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })

      if (response.ok) {
        return res.status(200).json({ ok: true, message: 'Message sent' })
      }

      const data = await response.json().catch(() => ({}))
      console.error('Formspree error:', response.status, data)
      return res.status(500).json({ ok: false, message: 'Failed to send message. Please try again.' })
    } catch (error) {
      console.error('Formspree fetch error:', error)
      return res.status(500).json({ ok: false, message: 'Failed to send message. Please try again.' })
    }
  }

  if (!CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('Contact form: CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not configured.')
    return res.status(500).json({ ok: false, message: 'Contact form is not configured. Please reach out directly.' })
  }

  try {
    const payload = {
      personalizations: [
        {
          to: [{ email: CONTACT_TO_EMAIL }],
          subject: `Qentra.cloud contact from ${name}`
        }
      ],
      from: { email: CONTACT_FROM_EMAIL, name: 'Qentra.cloud Website' },
      reply_to: { email: String(email), name: String(name) },
      content: [
        {
          type: 'text/plain',
          value: `Name: ${name}\nEmail: ${email}\n\n${message}`
        },
        {
          type: 'text/html',
          value: `<p><strong>Name:</strong> ${escapeHtml(String(name))}</p><p><strong>Email:</strong> ${escapeHtml(String(email))}</p><p>${escapeHtml(String(message)).replace(/\n/g, '<br/>')}</p>`
        }
      ]
    }

    const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (sgRes.ok) {
      return res.status(200).json({ ok: true, message: 'Message sent' })
    }

    const errData = await sgRes.json().catch(() => ({}))
    console.error('SendGrid error:', sgRes.status, JSON.stringify(errData))
    return res.status(500).json({ ok: false, message: 'Failed to send message. Please try again.' })
  } catch (error) {
    console.error('SendGrid fetch error:', error)
    return res.status(500).json({ ok: false, message: 'Failed to send message. Please try again.' })
  }
}
