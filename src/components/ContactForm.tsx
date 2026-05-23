import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) return false
    // simple email regex
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return false
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) {
      setStatus('error')
      return
    }
    setStatus('sending')
    setServerMessage(null)
    // prefer server SendGrid; if not configured, fallback to Formspree client submission
    try {
      const res = await axios.post('/api/contact', { name, email, message })
      if (res.data?.ok) {
        setStatus('success')
        setServerMessage(res.data?.message || 'Message sent')
        setName('')
        setEmail('')
        setMessage('')
        return
      }
      // surface server-provided message when available
      if (res.data?.message) setServerMessage(String(res.data.message))
    } catch (err) {
      const serverMsg = (err as any)?.response?.data?.message
      if (serverMsg) setServerMessage(String(serverMsg))
      // continue to fallback
    }

    // Fallback to Formspree if NEXT_PUBLIC_FORMSPREE_ENDPOINT is set
    const formspree = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
    if (formspree) {
      try {
        const r = await axios.post(formspree, { name, email, message })
        if (r.status === 200 || r.status === 201) {
          setStatus('success')
          setServerMessage('Message sent via Formspree')
          setName('')
          setEmail('')
          setMessage('')
          return
        }
      } catch (err) {
        setServerMessage((err as any)?.response?.data?.message || 'Formspree submission failed')
        setStatus('error')
        return
      }
    }

    setStatus('error')
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 glass p-6 rounded-lg">
      <div>
        <label className="text-sm text-white/80">Name</label>
        <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full bg-transparent border border-white/8 rounded-md px-3 py-2" />
      </div>
      <div>
        <label className="text-sm text-white/80">Email</label>
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full bg-transparent border border-white/8 rounded-md px-3 py-2" />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm text-white/80">Message</label>
        <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="mt-2 w-full bg-transparent border border-white/8 rounded-md px-3 py-2" />
      </div>
      <div className="md:col-span-2 flex items-center justify-between">
        <div className="text-sm text-white/80">
          {status === 'success' ? serverMessage || 'Thanks — we will reply soon.' : status === 'error' ? serverMessage || 'Please check your inputs or try again.' : ''}
        </div>
        <button type="submit" disabled={status === 'sending'} className="px-5 py-2 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
      </div>
    </form>
  )
}
