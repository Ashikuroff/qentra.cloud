import ServiceLandingPage from '../src/components/ServiceLandingPage'
import ServicePageLayout from '../src/components/ServicePageLayout'

export default function PlatformEngineeringPage() {
  return (
    <ServicePageLayout
      title="Platform Engineering & Kubernetes Consulting | Qentra.cloud"
      description="Platform engineering and Kubernetes consulting for reliable delivery platforms, Infrastructure as Code, observability, and cloud-native scale."
      canonicalPath="/platform-engineering"
    >
      <ServiceLandingPage
        eyebrow="Platform Engineering"
        title="Platform engineering and Kubernetes consulting for reliable production delivery."
        intro="Qentra.cloud helps engineering teams build internal platforms that improve delivery speed, consistency, and operational reliability. We focus on Kubernetes, Infrastructure as Code, deployment workflows, and the platform foundations needed to support both product and AI workloads."
        highlights={[
          'Platform engineering for cloud-native application and AI delivery',
          'Kubernetes consulting for scaling, stabilization, and redesign',
          'Infrastructure as Code, GitOps, and release workflow improvement',
          'Observability, reliability, and cost-awareness across platform operations'
        ]}
        deliverables={[
          'Platform architecture and Kubernetes operating model recommendations',
          'IaC standards for repeatable environments and safer change management',
          'CI/CD and GitOps delivery flows aligned to team operating needs',
          'Monitoring, alerting, and readiness improvements for production systems'
        ]}
        outcomes={[
          'More reliable software delivery and fewer infrastructure bottlenecks',
          'Stronger consistency across environments, workloads, and teams',
          'Better support for scaling cloud-native and AI-enabled products',
          'Lower risk during modernization and platform growth initiatives'
        ]}
        relatedLinks={[
          { href: '/gpu-kubernetes', label: 'GPU Kubernetes Platforms' },
          { href: '/ai-automation', label: 'AI Automation' },
          { href: '/cloud-security', label: 'Cloud Security' }
        ]}
      />
    </ServicePageLayout>
  )
}
