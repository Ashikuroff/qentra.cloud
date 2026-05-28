import ServiceLandingPage from '../src/components/ServiceLandingPage'
import ServicePageLayout from '../src/components/ServicePageLayout'

export default function CloudSecurityPage() {
  return (
    <ServicePageLayout
      title="Cloud Security, DevSecOps & AI Guardrails | Qentra.cloud"
      description="Cloud security consulting, DevSecOps delivery, AI guardrails, and compliance-aware engineering for modern production systems."
      canonicalPath="/cloud-security"
      serviceName="Cloud Security, DevSecOps, and AI Guardrails"
    >
      <ServiceLandingPage
        eyebrow="Cloud Security"
        title="Cloud security, DevSecOps, and AI guardrails for modern engineering teams."
        intro="Qentra.cloud helps organizations strengthen security without disconnecting it from day-to-day delivery. We focus on cloud security controls, DevSecOps automation, and AI guardrails that fit production workflows and evolving platform requirements."
        process={[
          'Identify the operational, architectural, and workflow-level risks that matter most in the current delivery environment.',
          'Define practical security controls and DevSecOps improvements that align with how the team ships software today.',
          'Sequence implementation around the highest-value controls so security posture improves without creating delivery drag.'
        ]}
        highlights={[
          'DevSecOps workflows integrated into modern engineering delivery',
          'Cloud security controls for applications, infrastructure, and data flows',
          'AI guardrails, access boundaries, and safer runtime patterns',
          'Compliance-aware engineering practices that support ongoing delivery'
        ]}
        deliverables={[
          'Security review priorities across cloud platforms and delivery pipelines',
          'Guardrail design for AI workflows, access paths, and sensitive data handling',
          'Improved release controls, policy enforcement, and operational checks',
          'Practical remediation plans for platform, delivery, and governance gaps'
        ]}
        outcomes={[
          'Reduced platform risk without slowing product and engineering teams',
          'Stronger trust around cloud operations and AI-enabled workflows',
          'Better alignment between security expectations and release practices',
          'Clearer path to sustainable, repeatable security improvements'
        ]}
        relatedLinks={[
          { href: '/ai-automation', label: 'AI Automation' },
          { href: '/cloud-engineering', label: 'Cloud Engineering' },
          { href: '/', label: 'Homepage' }
        ]}
      />
    </ServicePageLayout>
  )
}
