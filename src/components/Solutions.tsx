import { motion } from 'framer-motion'

export default function Solutions() {
  const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }

  return (
    <section id="solutions" className="pt-12">
      <h2 className="text-2xl font-semibold mb-6">Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold">Cloud-Native Platform Builds</h3>
          <p className="mt-2 text-white/80 text-sm">Kubernetes cluster design, platform automation, managed runtime, and observability.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold">AI-Driven Process Automation</h3>
          <p className="mt-2 text-white/80 text-sm">Automate repetitive tasks and workflows with bespoke AI agents and connectors.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="glass p-6 rounded-lg">
          <h3 className="font-semibold">DevOps, CI/CD & GitOps</h3>
          <p className="mt-2 text-white/80 text-sm">Secure, reproducible pipelines with Git-centric automation and progressive delivery.</p>
        </motion.div>
      </div>
    </section>
  )
}
