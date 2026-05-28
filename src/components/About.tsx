export default function About() {
  return (
    <section id="about" className="pt-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-heading font-extrabold mb-3">About Qentra.cloud</h2>
          <p className="text-white/80 max-w-xl">Qentra.cloud is an AI automation, cloud engineering, and Kubernetes consulting partner for teams building production-grade software platforms. We help organizations design agentic workflows, modernize infrastructure, improve DevOps delivery, and secure cloud systems without slowing product execution.</p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="glass p-4 rounded-lg text-center">
              <div className="text-2xl font-heading font-extrabold text-electric">15+</div>
              <div className="text-xs text-white/70">AI & Cloud Experts</div>
            </div>
            <div className="glass p-4 rounded-lg text-center">
              <div className="text-2xl font-heading font-extrabold text-electric">60+</div>
              <div className="text-xs text-white/70">Agents in Production</div>
            </div>
            <div className="glass p-4 rounded-lg text-center">
              <div className="text-2xl font-heading font-extrabold text-electric">99.9%</div>
              <div className="text-xs text-white/70">Inference Uptime</div>
            </div>
          </div>
        </div>

        <div>
          <div className="glass p-6 rounded-xl">
            <h3 className="font-semibold text-white">How We Deliver</h3>
            <ul className="mt-3 text-white/80 space-y-2 text-sm">
              <li>• AI automation aligned to measurable business workflows</li>
              <li>• Kubernetes and cloud platforms designed for reliability</li>
              <li>• Security-first engineering with practical guardrails</li>
              <li>• Observability for infrastructure, costs, and model usage</li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Work With Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
