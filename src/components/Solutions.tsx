import { motion } from 'framer-motion'

export default function Solutions() {
  const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }

  return (
    <section id="solutions" className="pt-12">
      <h2 className="text-2xl font-semibold mb-6">Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold text-white">Autonomous Agent Orchestration</h3>
          <p className="mt-2 text-white/80 text-sm">Deploy AI agent teams that coordinate to manage sales pipelines, customer support, and system audits without human intervention.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold text-white">GPU & LLM Infrastructure</h3>
          <p className="mt-2 text-white/80 text-sm">Deploy scalable, multi-region inference infrastructure with autoscaling GPU nodes, cost attribution, and sub-100ms response latency.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold text-white">Secure Enterprise GenAI</h3>
          <p className="mt-2 text-white/80 text-sm">Enable RAG and agent systems with strict enterprise-grade security parameters, zero data retention, and custom input guardrails.</p>
        </motion.div>
      </div>
    </section>
  )
}
