const FAQS = [
  {
    question: 'What does Qentra.cloud help companies build?',
    answer:
      'Qentra.cloud helps teams design AI automation workflows, modernize cloud platforms, implement Kubernetes and DevOps delivery systems, and improve security across production infrastructure.'
  },
  {
    question: 'When should a company invest in AI automation services?',
    answer:
      'AI automation is most useful when teams have repetitive operational work, fragmented internal knowledge, or support processes that can be improved with agent workflows, retrieval systems, and governed automation.'
  },
  {
    question: 'Do you provide Kubernetes consulting for existing platforms?',
    answer:
      'Yes. Qentra.cloud supports teams that need to stabilize, scale, or redesign existing Kubernetes platforms, including Infrastructure as Code, GitOps delivery, observability, and workload optimization.'
  },
  {
    question: 'How do you approach cloud security and DevSecOps?',
    answer:
      'We integrate security into delivery workflows through policy controls, access guardrails, secret management, automated checks, and compliance-aware engineering practices that fit modern cloud teams.'
  },
  {
    question: 'Can Qentra.cloud support both AI systems and core platform engineering?',
    answer:
      'Yes. The delivery model is built around both application-layer AI automation and the cloud engineering needed to run those systems reliably in production.'
  },
  {
    question: 'Are there pricing tiers for Qentra.cloud services?',
    answer:
      'Yes. Qentra.cloud offers starting tiers for discovery, implementation, and advisory work. Final pricing depends on the systems involved, the delivery timeline, and the level of hands-on engineering required.'
  },
  {
    question: 'Can Qentra.cloud help with cloud migration?',
    answer:
      'Yes. Qentra.cloud supports cloud migration planning and implementation, including platform architecture, Kubernetes readiness, Infrastructure as Code, security controls, and delivery workflow changes.'
  }
]

export { FAQS }

export default function FAQ() {
  return (
    <section id="faq" className="pt-12">
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-extrabold">Frequently Asked Questions</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Answers to common questions about AI automation, Kubernetes consulting, cloud engineering, and security delivery.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FAQS.map((item) => (
          <article key={item.question} className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-3 text-sm text-white/80">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
