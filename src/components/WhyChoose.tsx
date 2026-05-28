const POINTS = [
  'AI automation mapped to real operational outcomes',
  'Kubernetes and cloud engineering for production reliability',
  'DevSecOps practices built into delivery from day one',
  'Observability and cost tracking for platforms and AI workloads',
  'Cross-functional team spanning AI, cloud, and security engineering'
]

export default function WhyChoose() {
  return (
    <section className="pt-12">
      <h2 className="text-2xl font-semibold mb-6">Why Teams Choose Qentra.cloud</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {POINTS.map((p) => (
          <div key={p} className="glass p-4 rounded-lg flex items-start gap-3">
            <div className="w-8 h-8 bg-electric rounded-full flex items-center justify-center text-black font-bold">✓</div>
            <div className="text-white/90">{p}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
