export default function About() {
  return (
    <section id="about" className="pt-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-heading font-extrabold mb-3">About Qentra.cloud</h2>
          <p className="text-white/80 max-w-xl">Qentra.cloud is a premier AI automation and platform engineering agency. We partner with fast-growing enterprises to design, build, and operate cognitive AI agents and high-throughput GPU cloud systems. By bridging modern AI models with reliable software engineering, we help companies automate workflows and scale securely.</p>

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
            <h3 className="font-semibold text-white">Our Methodology</h3>
            <ul className="mt-3 text-white/80 space-y-2 text-sm">
              <li>• Agentic and autonomous design paradigms</li>
              <li>• GPU-native, cost-optimized platform engineering</li>
              <li>• Zero-trust, safety-first data guardrails</li>
              <li>• Full-observability tracking for LLM costs and latencies</li>
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
