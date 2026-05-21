import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center" aria-label="Hero">
      <div className="hero-bg" />
      <img src="/logo-full.svg" alt="" aria-hidden="true" className="hero-logo-large" />
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-3 py-1 rounded-full bg-white/3 text-sm text-electric font-medium">Enterprise • AI • Cloud</div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">AI Automation & Cloud Engineering for Modern Businesses</h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">Qentra.cloud helps organizations design, automate, and scale intelligent cloud-native systems using AI, Kubernetes, and DevOps best practices.</p>
            <div className="mt-6 flex gap-4">
              <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Request a Consultation</a>
              <a href="#services" className="inline-block px-6 py-3 rounded-md border border-white/10 text-white/90">Our Services</a>
            </div>
            <div className="mt-8 flex gap-6 items-center text-sm text-white/70">
              <div>Trusted by</div>
              <div className="flex gap-4">
                <div className="w-20 h-8 glass rounded flex items-center justify-center text-xs">FinTech</div>
                <div className="w-20 h-8 glass rounded flex items-center justify-center text-xs">HealthTech</div>
                <div className="w-20 h-8 glass rounded flex items-center justify-center text-xs">SaaS</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="glass p-6 rounded-xl w-full max-w-lg">
            <img src="/hero-graphic.svg" alt="Cloud and AI illustration" className="hero-visual w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
