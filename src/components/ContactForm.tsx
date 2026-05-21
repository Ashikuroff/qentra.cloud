import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await axios.post('/api/contact', { name, email, message })
      if (res.data?.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
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
        <div className="text-sm text-white/80">{status === 'success' ? 'Thanks — we will reply soon.' : status === 'error' ? 'An error occurred.' : ''}</div>
        <button type="submit" disabled={status === 'sending'} className="px-5 py-2 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
      </div>
    </form>
  )
}
