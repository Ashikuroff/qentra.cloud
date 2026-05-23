import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  ok: boolean
  message?: string
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'ashik9001@gmail.com'
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'noreply@qentra.cloud'
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

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

  if (!SENDGRID_API_KEY) {
    const missingKeyMsg = 'SendGrid API key is not configured. Set SENDGRID_API_KEY in environment variables to enable email delivery.'
    console.warn(missingKeyMsg, { CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, FORMSPREE_ENDPOINT: Boolean(FORMSPREE_ENDPOINT) })

    if (FORMSPREE_ENDPOINT) {
      try {
        const formspreePayload = {
          name,
          email,
          message
        }

        const response = await axios.post(FORMSPREE_ENDPOINT, formspreePayload, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (response.status === 200 || response.status === 201) {
          return res.status(200).json({ ok: true, message: 'Message sent via Formspree' })
        }

        console.error('Formspree response status:', response.status, response.data)
        return res.status(500).json({ ok: false, message: 'Formspree submission failed' })
      } catch (error: any) {
        console.error('Formspree error', error?.response?.data || error?.message || error)
        const errorMessage = error?.response?.data?.error || error?.response?.data || 'Failed to send message via Formspree'
        return res.status(500).json({ ok: false, message: String(errorMessage) })
      }
    }

    return res.status(500).json({ ok: false, message: missingKeyMsg })
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

    const errorMessage = error?.response?.data?.errors
      ? JSON.stringify(error.response.data.errors)
      : 'Failed to send message'

    return res.status(500).json({ ok: false, message: errorMessage })
  }
}
