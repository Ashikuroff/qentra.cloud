import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 'ai',
    title: 'AI Automation for Intelligent Operations',
    subtitle: 'Design intelligent agents, workflows, and copilots to automate business processes and surface insights.',
    cta: 'Explore AI Solutions',
    img: '/hero-graphic.svg'
  },
  {
    id: 'cloud',
    title: 'Cloud Automation & Platform Engineering',
    subtitle: 'Modernize platforms with Kubernetes, GitOps, IaC, and scalable CI/CD for multi-cloud environments.',
    cta: 'Modernize Your Infrastructure',
    img: '/hero-graphic.svg'
  },
  {
    id: 'security',
    title: 'Security Automation & Intelligent Protection',
    subtitle: 'Automate threat detection, compliance, and remediation with AI-assisted security operations.',
    cta: 'Secure Your Platform',
    img: '/hero-graphic.svg'
  }
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  function next() {
    setIndex((i) => (i + 1) % slides.length)
  }
  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center hero-slide" aria-label="Hero">
      <div className="hero-bg" />
      <img src="/logo-full.svg" alt="" aria-hidden="true" className="hero-logo-large" />
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="inline-block px-3 py-1 rounded-full bg-white/3 text-sm text-electric font-medium">Enterprise • AI • Cloud</div>

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
