import ServiceLandingPage from '../src/components/ServiceLandingPage'
import ServicePageLayout from '../src/components/ServicePageLayout'

export default function CloudEngineeringPage() {
  return (
    <ServicePageLayout
      title="Cloud Engineering & Kubernetes Consulting | Qentra.cloud"
      description="Cloud engineering and Kubernetes consulting for platform reliability, Infrastructure as Code, GitOps delivery, and scalable production systems."
      canonicalPath="/cloud-engineering"
    >
      <ServiceLandingPage
        eyebrow="Cloud Engineering"
        title="Cloud engineering and Kubernetes consulting for reliable production platforms."
        intro="Qentra.cloud works with engineering teams that need more reliable infrastructure, clearer delivery workflows, and better operational foundations. We help modernize cloud platforms with Kubernetes, GitOps, Infrastructure as Code, and practical observability."
        highlights={[
          'Kubernetes consulting for scaling, stabilization, and redesign',
          'Platform engineering for application and AI workloads',
          'Infrastructure as Code, GitOps, and release automation',
          'Observability, reliability, and cost-awareness across cloud environments'
        ]}
        deliverables={[
          'Kubernetes platform architecture and cluster operating model',
          'Terraform or IaC standards for repeatable environment management',
          'Deployment workflows, CI/CD improvements, and GitOps patterns',
          'Monitoring, alerting, and production-readiness recommendations'
        ]}
        outcomes={[
          'More reliable releases and fewer operational bottlenecks',
          'Improved platform consistency across environments and teams',
          'Stronger scalability for cloud-native and AI application workloads',
          'Lower risk during infrastructure modernization and growth phases'
        ]}
        relatedLinks={[
          { href: '/ai-automation', label: 'AI Automation' },
          { href: '/cloud-security', label: 'Cloud Security' },
          { href: '/', label: 'Homepage' }
        ]}
      />
    </ServicePageLayout>
  )
}
