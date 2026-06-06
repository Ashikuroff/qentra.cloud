export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm text-white/70">© {new Date().getFullYear()} Qentra.cloud — All rights reserved.</div>
          <div className="text-sm text-white/70 mt-1">AI automation, cloud engineering, Kubernetes consulting, and DevSecOps delivery.</div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
          <a href="/ai-automation" className="hover:text-white transition">AI Automation</a>
          <a href="/platform-engineering" className="hover:text-white transition">Platform Engineering</a>
          <a href="/cloud-security" className="hover:text-white transition">Cloud Security</a>
          <a href="/agentic-ai-workflows" className="hover:text-white transition">AI Workflows</a>
          <a href="/gpu-kubernetes" className="hover:text-white transition">GPU Kubernetes</a>
          <a href="/ai-security-guardrails" className="hover:text-white transition">AI Guardrails</a>
          <a href="/pricing" className="hover:text-white transition">Pricing</a>
          <a href="/#about" className="hover:text-white transition">About</a>
          <a href="/#faq" className="hover:text-white transition">FAQ</a>
          <a href="/#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
