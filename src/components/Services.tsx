import { motion } from 'framer-motion'

const SERVICES = [
  { name: 'AI Automation Services', desc: 'Design AI agents and workflow automations that handle repetitive operations, service delivery tasks, and multi-step business processes.' },
  { name: 'RAG and Semantic Search', desc: 'Build retrieval-augmented generation systems and knowledge search pipelines backed by vector databases and secure data access.' },
  { name: 'Model Optimization', desc: 'Improve inference speed, cost, and deployment quality with model tuning, quantization, and production performance optimization.' },
  { name: 'GPU and LLM Infrastructure', desc: 'Deploy GPU-ready cloud environments for training, hosting, and scaling large language model and AI workloads.' },
  { name: 'Kubernetes Consulting', desc: 'Architect Kubernetes platforms, GitOps delivery flows, and Infrastructure as Code for reliable platform operations.' },
  { name: 'DevSecOps Automation', desc: 'Embed security scanning, secret management, policy controls, and safer release workflows across the software delivery lifecycle.' },
  { name: 'Data Engineering for AI', desc: 'Create real-time data pipelines for ingestion, transformation, embedding, and retrieval across structured and unstructured sources.' },
  { name: 'AI Guardrails and Compliance', desc: 'Implement runtime guardrails, monitoring, logging, and governance controls for enterprise AI systems.' }
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
        <h2 className="text-2xl font-heading font-extrabold">AI Automation, Cloud Engineering, and Security Services</h2>
        <p className="text-sm text-white/70 max-w-xl">Qentra.cloud delivers consulting and implementation across AI automation, Kubernetes, DevOps, cloud infrastructure, and production security.</p>
      </div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s) => (
          <motion.div key={s.name} variants={item} className="glass p-6 rounded-lg hover:scale-[1.01] transition-transform">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#061028] to-[#0b1222] flex items-center justify-center text-electric font-semibold shadow-glow-md">{s.name.split(' ')[0].slice(0,2).toUpperCase()}</div>
              <div>
                <div className="text-sm font-semibold text-white">{s.name}</div>
                <p className="mt-2 text-white/80 text-sm">{s.desc}</p>
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
