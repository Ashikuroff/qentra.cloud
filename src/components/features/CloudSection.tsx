import { motion } from 'framer-motion'

export default function CloudSection() {
  return (
    <section id="cloud-automation" className="pt-12 relative">
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#071023]/30 to-[#0b1222]/20 pointer-events-none -z-10" />
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-1 order-2 md:order-1">
          <div className="glass p-6 rounded-xl">
            <img src="/hero-cloud.png" alt="Cloud automation visual" className="w-full" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-1 order-1 md:order-2">
          <h3 className="text-3xl font-heading font-extrabold">Cloud Automation & Platform Engineering</h3>
          <p className="mt-4 text-white/80 max-w-xl">Modernize infrastructure with Kubernetes, GitOps, Infrastructure as Code, and production-ready CI/CD to scale reliably across clouds.</p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• Kubernetes & platform engineering</li>
            <li>• IaC, Terraform & GitOps</li>
            <li>• CI/CD pipelines & progressive delivery</li>
            <li>• Multi-cloud automation & observability</li>
          </ul>
          <div className="mt-6">
            <a href="#services" className="inline-block px-5 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Modernize Your Infrastructure</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
