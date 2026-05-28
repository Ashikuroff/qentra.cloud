import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: 'Qentra.cloud modernized our CI/CD and Kubernetes platform, which made releases faster and gave our engineering team a more reliable cloud foundation.',
    author: 'VP Engineering, FinTech'
  },
  {
    quote: 'Their AI automation work reduced manual operations across our support and internal process teams, without adding unnecessary platform complexity.',
    author: 'CTO, HealthTech'
  },
  {
    quote: 'Professional, security-first cloud engineering that helped us scale infrastructure while tightening delivery controls and platform visibility.',
    author: 'Head of Platform, SaaS'
  }
]

export default function Testimonials() {
  const [i, setI] = useState(0)

  function next() {
    setI((p) => (p + 1) % TESTIMONIALS.length)
  }
  function prev() {
    setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section className="pt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-extrabold">Client Feedback</h2>
        <div className="flex items-center gap-2">
          <button onClick={prev} aria-label="Previous testimonial" className="bg-white/6 p-2 rounded-md">‹</button>
          <button onClick={next} aria-label="Next testimonial" className="bg-white/6 p-2 rounded-md">›</button>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }} className="glass p-6 rounded-lg">
            <p className="text-white/90 text-lg">“{TESTIMONIALS[i].quote}”</p>
            <div className="mt-4 text-sm text-white/70">— {TESTIMONIALS[i].author}</div>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  )
}
