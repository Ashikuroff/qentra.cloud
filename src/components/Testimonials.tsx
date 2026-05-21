const TESTIMONIALS = [
  {
    quote: 'Qentra.cloud modernized our CI/CD and platform stack — delivery is faster and more reliable.',
    author: 'VP Engineering, FinTech'
  },
  {
    quote: 'Their AI automation reduced manual work across our ops team by 40%.',
    author: 'CTO, HealthTech'
  }
]

export default function Testimonials() {
  return (
    <section className="pt-12">
      <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TESTIMONIALS.map((t) => (
          <div key={t.author} className="glass p-6 rounded-lg">
            <p className="text-white/85">“{t.quote}”</p>
            <div className="mt-4 text-sm text-white/70">— {t.author}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
