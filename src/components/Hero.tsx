import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 'ai',
    label: 'AI Automation',
    title: 'AI automation for agentic workflows and secure RAG systems.',
    subtitle: 'Design autonomous agents, retrieval pipelines, and workflow automation that reduce manual work and bring production-ready intelligence into daily operations.',
    cta: 'Explore AI Automation',
    img: '/hero-ai.png',
    bg: 'bg-[radial-gradient(600px_400px_at_10%_20%,rgba(14,231,255,0.04),transparent_12%),radial-gradient(400px_300px_at_90%_80%,rgba(102,16,242,0.03),transparent_18%)]'
  },
  {
    id: 'cloud',
    label: 'Platform Engineering',
    title: 'Platform engineering for Kubernetes and production delivery.',
    subtitle: 'Modernize delivery platforms with Kubernetes, GPU-ready infrastructure, Infrastructure as Code, and GitOps pipelines built for reliability at scale.',
    cta: 'Modernize Your Platform',
    img: '/hero-cloud.png',
    bg: 'bg-[linear-gradient(90deg,rgba(2,6,23,0.35),rgba(7,16,35,0.1))]'
  },
  {
    id: 'security',
    label: 'Cloud Security',
    title: 'Cloud security, DevSecOps, and AI guardrails.',
    subtitle: 'Secure AI applications and cloud infrastructure with DevSecOps automation, data protection guardrails, and continuous compliance controls.',
    cta: 'Secure Your Infrastructure',
    img: '/hero-security.png',
    bg: 'bg-[linear-gradient(90deg,rgba(6,7,15,0.45),rgba(2,8,20,0.08))]'
  }
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  function next() { setIndex((i) => (i + 1) % slides.length) }
  function prev() { setIndex((i) => (i - 1 + slides.length) % slides.length) }

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-slide"
      aria-label="Hero"
      aria-roledescription="carousel"
    >
      <div className={`absolute inset-0 z-0 ${slides[index].bg}`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-wordmark.svg" alt="" aria-hidden="true" className="hero-logo-large" />
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center hero-shell">
        <div className="lg:col-span-7 hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            AI Automation • Platform Engineering • Cloud Security
          </div>

          <div className="mt-5 hero-tab-row">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Show ${s.id} slide`}
                aria-pressed={i === index}
                className={`hero-tab ${i === index ? 'hero-tab-active' : 'hero-tab-idle'}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="mt-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${slides[index].id}-headline`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55 }}
              >
                <h1 className="hero-title">{slides[index].title}</h1>
                <p className="mt-5 text-lg text-white/80 max-w-3xl hero-lede">{slides[index].subtitle}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="hero-stat">Production delivery</span>
              <span className="hero-stat">Platform modernization</span>
              <span className="hero-stat">Security by design</span>
            </div>

            <div className="mt-8 hero-actions">
              <a
                href={
                  slides[index].id === 'ai'
                    ? '/ai-automation'
                    : slides[index].id === 'cloud'
                      ? '/platform-engineering'
                      : '/cloud-security'
                }
                className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold"
              >
                {slides[index].cta}
              </a>
              <a
                href={
                  slides[index].id === 'ai'
                    ? '/agentic-ai-workflows'
                    : slides[index].id === 'cloud'
                      ? '/gpu-kubernetes'
                      : '/ai-security-guardrails'
                }
                className="inline-block px-6 py-3 rounded-md border border-white/10 text-white/90"
              >
                Learn More
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 slider-controls flex-wrap">
              <button onClick={prev} aria-label="Previous slide" className="mr-2">‹</button>
              <div className="flex gap-2" role="tablist" aria-label="Slide indicators">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={i === index}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full ${i === index ? 'bg-electric' : 'bg-white/20'}`}
                    aria-label={`Go to ${s.id} slide`}
                  />
                ))}
              </div>
              <button onClick={next} aria-label="Next slide" className="ml-4">›</button>
              <button
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? 'Resume auto-play' : 'Pause auto-play'}
                aria-pressed={paused}
                className="ml-2 text-white/50 hover:text-white/80 transition text-xs"
              >
                {paused ? '▶' : '⏸'}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 hero-visual-column">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="hero-visual-stage"
            >
              <Image
                src={slides[index].img}
                alt={slides[index].title}
                width={600}
                height={400}
                className="hero-visual w-full"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
