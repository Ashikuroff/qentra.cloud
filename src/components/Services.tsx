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
      <h2 className="text-2xl font-semibold mb-6">Services</h2>
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s) => (
          <motion.div key={s} variants={item} className="glass p-5 rounded-lg">
            <div className="text-sm font-semibold text-electric">{s}</div>
            <p className="mt-2 text-white/80 text-sm">Expert design and delivery for {s.toLowerCase()} to modernize engineering workflows.</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
