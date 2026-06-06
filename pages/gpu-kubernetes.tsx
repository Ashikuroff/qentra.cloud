import ServiceLandingPage from '../src/components/ServiceLandingPage'
import ServicePageLayout from '../src/components/ServicePageLayout'

export default function GPUKubernetesPage() {
  return (
    <ServicePageLayout
      title="GPU Kubernetes Platforms & AI Infrastructure | Qentra.cloud"
      description="GPU Kubernetes platform design, AI infrastructure consulting, scalable inference environments, and production operations support."
      canonicalPath="/gpu-kubernetes"
      serviceName="GPU Kubernetes Platforms and AI Infrastructure"
    >
      <ServiceLandingPage
        eyebrow="AI Infrastructure"
        title="GPU Kubernetes platforms for AI infrastructure and production inference workloads."
        intro="Qentra.cloud supports teams that need stronger infrastructure for AI model delivery. We help design GPU-capable Kubernetes platforms, cloud-native runtime patterns, and operational practices that support demanding training and inference workloads."
        process={[
          'Review workload patterns, compute requirements, and operational goals that drive the infrastructure design.',
          'Define platform architecture for GPU-capable environments, delivery workflows, and workload management practices.',
          'Prioritize runtime visibility, scaling paths, and operational readiness for sustained production use.'
        ]}
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
        useCases={[
          'Teams need GPU-aware Kubernetes environments for inference, model services, batch processing, or AI platform growth.',
          'Existing platforms struggle with scheduling, observability, scaling, or cost control for heavier compute workloads.',
          'Engineering leaders need a pragmatic architecture before committing to new AI infrastructure spend.'
        ]}
        proofPoints={[
          'Architecture recommendations cover node pools, workload placement, autoscaling, networking, storage, and observability.',
          'Runbooks define health checks, failure modes, deployment expectations, and capacity planning signals.',
          'Infrastructure plans connect GPU usage to delivery workflows, security controls, and long-term platform operations.'
        ]}
        relatedLinks={[
          { href: '/platform-engineering', label: 'Platform Engineering' },
          { href: '/ai-automation', label: 'AI Automation' },
          { href: '/cloud-security', label: 'Cloud Security' },
          { href: '/pricing', label: 'Pricing' }
        ]}
      />
    </ServicePageLayout>
  )
}
