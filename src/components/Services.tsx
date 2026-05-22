import { motion } from 'framer-motion'

const SERVICES = [
  { name: 'Agentic Workflows', desc: 'Autonomous multi-agent systems designed to execute complex business loops and reason through multi-step tasks.' },
  { name: 'RAG & Semantic Search', desc: 'Context-aware search systems and knowledge retrieval pipelines using state-of-the-art vector databases.' },
  { name: 'Model Optimization', desc: 'Fine-tuning, model quantization, and optimization for low-latency, cost-effective production inference.' },
  { name: 'GPU Orchestration', desc: 'High-performance cloud configurations for training, hosting, and scaling heavy AI and LLM workloads.' },
  { name: 'GitOps & IaC Platforms', desc: 'Declarative Kubernetes cluster setups and infrastructure management via robust GitOps pipelines.' },
  { name: 'DevSecOps & Model Safety', desc: 'Automated code-to-cloud security, secret rotation, and protection against prompt injection.' },
  { name: 'Cognitive Data Pipelines', desc: 'Real-time ingestion, processing, and vector embedding of structured and unstructured data feeds.' },
  { name: 'AI Model Guardrails', desc: 'Implementation of safety boundaries, compliance logging, and runtime output moderation.' }
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
