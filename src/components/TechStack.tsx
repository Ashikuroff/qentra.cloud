const STACK = ['Kubernetes', 'AWS / GCP / Azure', 'Terraform', 'ArgoCD', 'Jenkins / GitHub Actions', 'Python / Node.js', 'LangChain', 'OpenAI']

export default function TechStack() {
  return (
    <section id="tech" className="pt-12">
      <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
      <div className="flex flex-wrap gap-3">
        {STACK.map((s) => (
          <div key={s} className="px-3 py-2 glass rounded-full text-sm text-white/80">{s}</div>
        ))}
      </div>
    </section>
  )
}
