import { motion } from 'framer-motion'

const SERVICES = [
  'AI Automation',
  'Cloud Consultancy',
  'Kubernetes & Platform Engineering',
  'DevOps & GitOps',
  'AI Workflow Integration',
  'Infrastructure Modernization',
  'CI/CD Automation',
  'AI Agents & Intelligent Systems'
]

export default function Services() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="services" className="pt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-extrabold">Services</h2>
        <p className="text-sm text-white/70 max-w-xl">Enterprise-grade AI, Cloud, and Security engineering services tailored to high-scale production systems.</p>
      </div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s) => (
          <motion.div key={s} variants={item} className="glass p-6 rounded-lg hover:scale-[1.01] transition-transform">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#061028] to-[#0b1222] flex items-center justify-center text-electric font-semibold shadow-glow-md">{s.split(' ')[0].slice(0,2).toUpperCase()}</div>
              <div>
                <div className="text-sm font-semibold text-white">{s}</div>
                <p className="mt-2 text-white/80 text-sm">Expert design and delivery for {s.toLowerCase()} to modernize engineering workflows.</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8">
        <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Talk to our Engineers</a>
      </div>
    </section>
  )
}
