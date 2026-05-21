import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-3 py-1 rounded-full bg-white/3 text-sm text-electric font-medium">Enterprise • AI • Cloud</div>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              AI Automation & Cloud Engineering for Modern Businesses
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Qentra.cloud helps organizations design, automate, and scale intelligent cloud-native systems using AI, Kubernetes, and DevOps best practices.
            </p>
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
        <div className="md:col-span-5">
          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="glass p-6 rounded-xl">
            <div className="text-sm text-white/70 uppercase tracking-wide">Enterprise-ready</div>
            <h3 className="mt-3 font-semibold text-xl">End-to-end AI + Cloud platforms</h3>
            <p className="mt-2 text-white/80 text-sm">From AI agents to CI/CD and Kubernetes platform engineering — we modernize systems to be scalable, observable, and secure.</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>AI Automation • Cloud-Native Architecture</li>
              <li>Kubernetes Platforms • DevOps & GitOps</li>
              <li>Intelligent Workflow Systems • CI/CD</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
