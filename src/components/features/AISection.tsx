import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AISection() {
  return (
    <section id="ai-automation" className="pt-12 relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_10%_20%,rgba(14,231,255,0.03),transparent_12%),radial-gradient(circle_at_90%_80%,rgba(102,16,242,0.02),transparent_18%)] blur-3xl pointer-events-none" />
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-1">
          <h2 className="text-3xl font-heading font-extrabold">AI Automation Services for Agentic Workflows</h2>
          <p className="mt-4 text-white/80 max-w-xl">We build AI automation systems that reason, collaborate, and execute complex business functions. From retrieval-augmented generation to prompt engineering and agent orchestration, we help teams turn AI into reliable workflow software.</p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• Autonomous AI agents and multi-agent systems</li>
            <li>• Prompt engineering and model workflow design</li>
            <li>• Retrieval-augmented generation and vector databases</li>
            <li>• Intent classification and business process automation</li>
          </ul>
          <div className="mt-6">
            <a href="#services" className="inline-block px-5 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Explore AI Solutions</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-1">
          <div className="glass p-6 rounded-xl shadow-glow-md">
            <Image src="/hero-ai.png" alt="Cognitive AI Automation and Agentic Workflows illustration" width={600} height={400} className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
