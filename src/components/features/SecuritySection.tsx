import { motion } from 'framer-motion'

export default function SecuritySection() {
  return (
    <section id="security-automation" className="pt-12 relative">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(10,10,30,0.18),transparent_40%)] pointer-events-none" />
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-1">
          <h3 className="text-3xl font-heading font-extrabold">Security Automation & Intelligent Protection</h3>
          <p className="mt-4 text-white/80 max-w-xl">Protect your cloud with automated threat detection, compliance enforcement, and AI-assisted response workflows that reduce risk and mean-time-to-remediate.</p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• Cloud security automation & policy-as-code</li>
            <li>• DevSecOps & continuous compliance</li>
            <li>• Threat detection & AI-assisted response</li>
            <li>• Security monitoring & incident automation</li>
          </ul>
          <div className="mt-6">
            <a href="#services" className="inline-block px-5 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Secure Your Platform</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-1">
          <div className="glass p-6 rounded-xl">
            <img src="/hero-graphic.svg" alt="Security visual" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
