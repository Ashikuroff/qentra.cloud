import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 'ai',
    title: 'AI Automation for Intelligent Operations',
    subtitle: 'Design intelligent agents, workflows, and copilots to automate business processes and surface insights.',
    cta: 'Explore AI Solutions',
    img: '/hero-ai.svg',
    bg: 'bg-[radial-gradient(600px_400px_at_10%_20%,rgba(14,231,255,0.04),transparent_12%),radial-gradient(400px_300px_at_90%_80%,rgba(102,16,242,0.03),transparent_18%)]'
  },
  {
    id: 'cloud',
    title: 'Cloud Automation & Platform Engineering',
    subtitle: 'Modernize platforms with Kubernetes, GitOps, IaC, and scalable CI/CD for multi-cloud environments.',
    cta: 'Modernize Your Infrastructure',
    img: '/hero-cloud.svg',
    bg: 'bg-[linear-gradient(90deg,rgba(2,6,23,0.35),rgba(7,16,35,0.1))]'
  },
  {
    id: 'security',
    title: 'Security Automation & Intelligent Protection',
    subtitle: 'Automate threat detection, compliance, and remediation with AI-assisted security operations.',
    cta: 'Secure Your Platform',
    img: '/hero-security.svg',
    bg: 'bg-[linear-gradient(90deg,rgba(6,7,15,0.45),rgba(2,8,20,0.08))]'
  }
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  function next() {
    setIndex((i) => (i + 1) % slides.length)
  }
  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  // autoplay every 5s
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative min-h-screen flex items-center hero-slide" aria-label="Hero">
      <div className={`absolute inset-0 z-0 ${slides[index].bg}`} />
      <img src="/logo-wordmark.svg" alt="" aria-hidden="true" className="hero-logo-large" />
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="inline-block px-3 py-1 rounded-full bg-white/3 text-sm text-electric font-medium">Enterprise • AI • Cloud</div>

          {/* tabs */}
          <div className="mt-4 flex gap-3">
            {slides.map((s, i) => (
              <button key={s.id} onClick={() => setIndex(i)} className={`px-3 py-1 rounded-md ${i === index ? 'bg-gradient-to-r from-electric to-cyan text-black' : 'bg-white/3 text-white/80'}`}>
                {s.id.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div key={slides[index].id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.6 }}>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold leading-tight">{slides[index].title}</h2>
                <p className="mt-4 text-lg text-white/80 max-w-2xl">{slides[index].subtitle}</p>
                <div className="mt-6 flex gap-4">
                  <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">{slides[index].cta}</a>
                  <a href="#services" className="inline-block px-6 py-3 rounded-md border border-white/10 text-white/90">Our Services</a>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3 slider-controls">
              <button onClick={prev} aria-label="Previous" className="mr-2">‹</button>
              <div className="flex gap-2">
                {slides.map((s, i) => (
                  <button key={s.id} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-electric' : 'bg-white/20'}`} aria-label={`Go to ${s.id}`} />
                ))}
              </div>
              <button onClick={next} aria-label="Next" className="ml-4">›</button>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div key={slides[index].id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.6 }} className="glass p-6 rounded-xl w-full max-w-lg shadow-glow-md">
              <img src={slides[index].img} alt="Illustration" className="hero-visual w-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
