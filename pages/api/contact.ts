import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  ok: boolean
  message?: string
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'ashik9001@gmail.com'
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'noreply@qentra.cloud'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields' })
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
        content: [
          {
            type: 'text/plain',
            value: `Name: ${name}\nEmail: ${email}\n\n${message}`
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
    } catch (error) {
      console.error('SendGrid error', error)
      return res.status(500).json({ ok: false, message: 'Failed to send message' })
    }
  }

  // Fallback — log the message for development
  console.log('Contact request (logged):', { name, email, message })
  return res.status(200).json({ ok: true, message: 'Message received (logged)' })
}
