import ServiceLandingPage from '../src/components/ServiceLandingPage'
import ServicePageLayout from '../src/components/ServicePageLayout'

export default function AISecurityGuardrailsPage() {
  return (
    <ServicePageLayout
      title="AI Security Guardrails & DevSecOps Consulting | Qentra.cloud"
      description="AI security guardrails, DevSecOps consulting, cloud security controls, and delivery practices for modern engineering teams."
      canonicalPath="/ai-security-guardrails"
      serviceName="AI Security Guardrails and DevSecOps Consulting"
    >
      <ServiceLandingPage
        eyebrow="Security Delivery"
        title="AI security guardrails and DevSecOps practices for production delivery teams."
        intro="Qentra.cloud helps organizations secure AI-enabled workflows and cloud platforms with practical guardrails, policy controls, and delivery-focused security practices. The goal is to reduce risk without separating security from how teams actually build and ship software."
        process={[
          'Review how AI features, supporting services, and delivery pipelines currently expose risk or governance gaps.',
          'Design guardrails, review controls, and DevSecOps practices that match the team’s real operating model.',
          'Create an implementation path that improves security coverage while staying practical for production engineering teams.'
        ]}
        highlights={[
          'AI guardrails for prompts, outputs, access, and sensitive workflow paths',
          'DevSecOps consulting aligned to modern engineering delivery practices',
          'Security controls for cloud-native systems and AI-enabled product features',
          'Operational approaches for policy enforcement and compliance support'
        ]}
        deliverables={[
          'Guardrail patterns for AI workflows, data handling, and runtime behavior',
          'Prioritized DevSecOps improvements across delivery and release paths',
          'Security control recommendations for infrastructure and service boundaries',
          'Implementation roadmap for practical, staged security improvement'
        ]}
        outcomes={[
          'Lower risk around AI-enabled workflows and supporting platforms',
          'Stronger security posture without slowing engineering momentum',
          'Clearer responsibilities and checks across delivery pipelines',
          'Better alignment between security goals and production operations'
        ]}
        useCases={[
          'Teams are introducing AI features and need guardrails before exposing sensitive workflows or data paths.',
          'Security and engineering leaders need practical DevSecOps controls across cloud-native release pipelines.',
          'Organizations want a staged remediation plan for AI, platform, and delivery risks without pausing product work.'
        ]}
        proofPoints={[
          'Guardrail designs cover prompt safety, retrieval boundaries, access checks, logging, and human escalation.',
          'DevSecOps recommendations map to CI/CD checks, policy enforcement, dependency visibility, and secrets handling.',
          'Security improvements are prioritized by operational impact, implementation effort, and production risk reduction.'
        ]}
        relatedLinks={[
          { href: '/cloud-security', label: 'Cloud Security' },
          { href: '/platform-engineering', label: 'Platform Engineering' },
          { href: '/ai-automation', label: 'AI Automation' },
          { href: '/pricing', label: 'Pricing' }
        ]}
      />
    </ServicePageLayout>
  )
}
