import ServiceLandingPage from '../src/components/ServiceLandingPage'
import ServicePageLayout from '../src/components/ServicePageLayout'

export default function AIAutomationPage() {
  return (
    <ServicePageLayout
      title="AI Automation Services & Agentic Workflow Consulting | Qentra.cloud"
      description="AI automation services for agent workflows, secure RAG systems, process automation, and production-ready AI delivery."
      canonicalPath="/ai-automation"
    >
      <ServiceLandingPage
        eyebrow="AI Automation Services"
        title="AI automation services for teams building agentic workflows and secure operational systems."
        intro="Qentra.cloud helps product and operations teams turn AI into practical software. We design agent workflows, retrieval systems, and automation patterns that improve delivery speed, reduce manual work, and fit governed production environments."
        highlights={[
          'Agentic workflows for internal operations and support processes',
          'Retrieval-augmented generation backed by secure knowledge access',
          'Prompt and workflow design for task automation',
          'Production integration between AI systems and existing software stacks'
        ]}
        deliverables={[
          'Architecture for AI automation and multi-step workflow execution',
          'RAG pipelines, vector search, and governed knowledge retrieval',
          'Operational guardrails, evaluation criteria, and runtime monitoring',
          'Integration plans for APIs, internal tools, and human review loops'
        ]}
        outcomes={[
          'Reduced repetitive work for operations and service teams',
          'Better use of internal knowledge in support and delivery flows',
          'Faster rollout of practical AI features with lower implementation risk',
          'More reliable automation built around measured business processes'
        ]}
        relatedLinks={[
          { href: '/cloud-engineering', label: 'Cloud Engineering' },
          { href: '/cloud-security', label: 'Cloud Security' },
          { href: '/', label: 'Homepage' }
        ]}
      />
    </ServicePageLayout>
  )
}
