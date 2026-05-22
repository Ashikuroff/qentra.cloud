const STACK = [
  { id: 'k8s', name: 'Kubernetes', short: 'K8s' },
  { id: 'docker', name: 'Docker', short: 'DOCK' },
  { id: 'aws', name: 'AWS', short: 'AWS' },
  { id: 'azure', name: 'Azure', short: 'AZ' },
  { id: 'terraform', name: 'Terraform', short: 'TF' },
  { id: 'argocd', name: 'ArgoCD', short: 'ARGO' },
  { id: 'github', name: 'GitHub Actions', short: 'GH' },
  { id: 'openai', name: 'OpenAI', short: 'AI' },
  { id: 'python', name: 'Python', short: 'Py' },
  { id: 'node', name: 'Node.js', short: 'Node' }
]

export default function TechStack() {
  return (
    <section id="tech" className="pt-12">
      <h2 className="text-2xl font-heading font-extrabold mb-6">Technology Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {STACK.map((s) => (
          <div key={s.id} className="glass p-4 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 rounded-md flex items-center justify-center bg-gradient-to-br from-[#061028] to-[#0b1222] text-electric font-semibold shadow-glow-md">{s.short}</div>
            <div>
              <div className="text-sm font-semibold">{s.name}</div>
              <div className="text-xs text-white/70">Enterprise-ready integrations</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
