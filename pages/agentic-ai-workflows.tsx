import ServiceLandingPage from '../src/components/ServiceLandingPage'
import ServicePageLayout from '../src/components/ServicePageLayout'

export default function AgenticAIWorkflowsPage() {
  return (
    <ServicePageLayout
      title="Agentic AI Workflows & RAG Systems | Qentra.cloud"
      description="Agentic AI workflow consulting, retrieval-augmented generation systems, and operational AI delivery for production teams."
      canonicalPath="/agentic-ai-workflows"
    >
      <ServiceLandingPage
        eyebrow="AI Workflow Delivery"
        title="Agentic AI workflows and retrieval systems for operational automation."
        intro="Qentra.cloud helps teams design AI workflows that do more than generate text. We build governed agent flows, retrieval systems, and human-in-the-loop automation patterns that fit business operations and production software environments."
        highlights={[
          'Agentic workflows for support, operations, and internal knowledge use cases',
          'Retrieval systems that connect AI responses to trusted enterprise context',
          'Workflow orchestration across APIs, documents, and review checkpoints',
          'Evaluation and control patterns for practical AI system quality'
        ]}
        deliverables={[
          'Workflow maps for agent roles, triggers, tools, and escalation paths',
          'RAG architecture for document, database, and knowledge access flows',
          'Operational controls for prompts, outputs, and confidence thresholds',
          'Deployment guidance for integrating AI workflows into existing systems'
        ]}
        outcomes={[
          'More useful AI automation tied to real operational tasks',
          'Better response quality through structured retrieval and context use',
          'Lower risk when rolling out workflow-based AI capabilities',
          'Clearer path from experimentation to production adoption'
        ]}
        relatedLinks={[
          { href: '/ai-automation', label: 'AI Automation' },
          { href: '/platform-engineering', label: 'Platform Engineering' },
          { href: '/cloud-security', label: 'Cloud Security' }
        ]}
      />
    </ServicePageLayout>
  )
}
