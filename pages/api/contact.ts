import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  ok: boolean
  message?: string
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'ashik9001@gmail.com'
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'noreply@qentra.cloud'

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields' })
  }

  // Basic server-side email validation
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
  if (!emailRegex.test(String(email))) {
    return res.status(400).json({ ok: false, message: 'Invalid email address' })
  }

  // If SendGrid key is present, send email. Otherwise log to server console.
  if (SENDGRID_API_KEY) {
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
            value: `<p><strong>Name:</strong> ${escapeHtml(String(name))}</p><p><strong>Email:</strong> ${escapeHtml(
              String(email)
            )}</p><p>${escapeHtml(String(message)).replace(/\n/g, '<br/>')}</p>`
          }
        ]
      }

      await axios.post('https://api.sendgrid.com/v3/mail/send', payload, {
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        }
      })

      return res.status(200).json({ ok: true, message: 'Message sent' })
    } catch (error: any) {
      // Log detailed SendGrid error for debugging
      if (error?.response?.data) {
        console.error('SendGrid response error:', JSON.stringify(error.response.data))
      } else {
        console.error('SendGrid error', error?.message || error)
      }

      // In non-production environments, return SendGrid error message to client for easier debugging
      if (process.env.NODE_ENV !== 'production' && error?.response?.data) {
        return res.status(500).json({ ok: false, message: JSON.stringify(error.response.data) })
      }

      return res.status(500).json({ ok: false, message: 'Failed to send message' })
    }
  }

  // Fallback — log the message for development
  console.log('Contact request (logged):', { name, email, message })
  return res.status(200).json({ ok: true, message: 'Message received (logged)' })
}
