const STACK = [
  { id: 'k8s', name: 'Kubernetes', short: 'K8s', desc: 'Container orchestration' },
  { id: 'pytorch', name: 'PyTorch', short: 'Torch', desc: 'Deep learning framework' },
  { id: 'openai', name: 'OpenAI & Anthropic', short: 'LLM', desc: 'Frontier AI models' },
  { id: 'langchain', name: 'LangChain', short: 'LC', desc: 'Agent orchestration' },
  { id: 'qdrant', name: 'Qdrant & Pinecone', short: 'VDB', desc: 'Vector databases' },
  { id: 'terraform', name: 'Terraform', short: 'TF', desc: 'Infrastructure as Code' },
  { id: 'argocd', name: 'ArgoCD', short: 'Argo', desc: 'GitOps deployment' },
  { id: 'aws', name: 'AWS & GCP', desc: 'GPU-native cloud platforms', short: 'Cloud' },
  { id: 'fastapi', name: 'FastAPI & Python', short: 'API', desc: 'AI inference backends' },
  { id: 'docker', name: 'Docker', short: 'Dock', desc: 'Container standardization' }
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
              <div className="text-xs text-white/70">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
