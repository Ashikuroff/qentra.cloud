import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) return false
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return false
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    if (!validate()) {
      setStatus('error')
      setServerMessage('Please fill in all fields with a valid email.')
      return
    }
    setStatus('sending')
    setServerMessage(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (data?.ok) {
        setStatus('success')
        setServerMessage(data.message || 'Thanks — we will reply soon.')
        setName('')
        setEmail('')
        setMessage('')
        return
      }
      setStatus('error')
      setServerMessage(data?.message || 'Something went wrong. Please try again.')
    } catch {
      setStatus('error')
      setServerMessage('Network error. Please check your connection and try again.')
    }
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
