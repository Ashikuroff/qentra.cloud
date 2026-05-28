import ServiceLandingPage from '../src/components/ServiceLandingPage'
import ServicePageLayout from '../src/components/ServicePageLayout'

export default function GPUKubernetesPage() {
  return (
    <ServicePageLayout
      title="GPU Kubernetes Platforms & AI Infrastructure | Qentra.cloud"
      description="GPU Kubernetes platform design, AI infrastructure consulting, scalable inference environments, and production operations support."
      canonicalPath="/gpu-kubernetes"
    >
      <ServiceLandingPage
        eyebrow="AI Infrastructure"
        title="GPU Kubernetes platforms for AI infrastructure and production inference workloads."
        intro="Qentra.cloud supports teams that need stronger infrastructure for AI model delivery. We help design GPU-capable Kubernetes platforms, cloud-native runtime patterns, and operational practices that support demanding training and inference workloads."
        highlights={[
          'GPU-ready Kubernetes architecture for model and application workloads',
          'Operational planning for inference environments and scaling patterns',
          'Platform foundations for AI workloads, delivery workflows, and observability',
          'Reliability improvements for cloud-native systems with heavier compute demands'
        ]}
        deliverables={[
          'Reference architecture for GPU-capable platform environments',
          'Workload placement, deployment, and operational planning guidance',
          'Observability recommendations for performance, health, and usage visibility',
          'Integration approach for AI workloads within broader platform operations'
        ]}
        outcomes={[
          'More stable infrastructure for AI delivery and runtime operations',
          'Better coordination between platform teams and model-serving needs',
          'Clearer scalability path for demanding compute workloads',
          'Improved platform readiness for future AI product expansion'
        ]}
        relatedLinks={[
          { href: '/platform-engineering', label: 'Platform Engineering' },
          { href: '/ai-automation', label: 'AI Automation' },
          { href: '/cloud-security', label: 'Cloud Security' }
        ]}
      />
    </ServicePageLayout>
  )
}
