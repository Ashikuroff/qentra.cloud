import { motion } from 'framer-motion'

export default function Solutions() {
  const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }

  return (
    <section id="solutions" className="pt-12">
      <h2 className="text-2xl font-semibold mb-6">Solutions for AI, Platform, and Security Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold text-white">AI Agent Automation for Operations</h3>
          <p className="mt-2 text-white/80 text-sm">Deploy AI agents that support internal operations, customer workflows, and service teams with governed multi-step automation.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold text-white">Kubernetes and GPU Platform Delivery</h3>
          <p className="mt-2 text-white/80 text-sm">Build scalable inference and application platforms with Kubernetes, autoscaling GPU capacity, cost visibility, and reliable release pipelines.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold text-white">Secure Enterprise AI and Cloud</h3>
          <p className="mt-2 text-white/80 text-sm">Roll out RAG systems and cloud services with stronger guardrails, data protection controls, and security automation built into delivery workflows.</p>
        </motion.div>
      </div>
    </section>
  )
}
