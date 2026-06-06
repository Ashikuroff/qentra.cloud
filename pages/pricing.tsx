import Link from 'next/link'
import ServicePageLayout from '../src/components/ServicePageLayout'
import ContactForm from '../src/components/ContactForm'

const TIERS = [
  {
    name: 'Discovery Sprint',
    scope: 'Scoped project',
    summary: 'A focused assessment for teams that need clarity before committing to an AI, cloud, or Kubernetes implementation.',
    includes: [
      'Workflow, platform, or security discovery sessions',
      'Current-state review and implementation risk notes',
      'Prioritized roadmap with recommended next steps',
      'Executive summary and engineering action plan'
    ],
    cta: 'Plan a Sprint'
  },
  {
    name: 'Implementation Partner',
    scope: 'Monthly delivery engagement',
    summary: 'Hands-on engineering support for building AI automation, platform engineering, Kubernetes, or DevSecOps improvements.',
    includes: [
      'Architecture and implementation across agreed workstreams',
      'Weekly delivery planning and progress review',
      'Integration support for cloud, CI/CD, data, or AI systems',
      'Documentation, handover, and operational guidance'
    ],
    cta: 'Discuss Implementation'
  },
  {
    name: 'Platform Advisory',
    scope: 'Custom advisory retainer',
    summary: 'Ongoing technical guidance for teams scaling production platforms, AI workloads, and security practices.',
    includes: [
      'Architecture reviews and delivery advisory',
      'Roadmap support for platform, AI, and security initiatives',
      'Incident, reliability, and modernization guidance',
      'Priority access for technical decision support'
    ],
    cta: 'Request Advisory'
  }
]

const FAQS = [
  {
    question: 'Are the pricing tiers fixed packages?',
    answer:
      'The tiers provide starting points. Scope, timeline, and cost are finalized after a short discovery discussion because AI automation, cloud engineering, and Kubernetes work depends on the current environment.'
  },
  {
    question: 'Can Qentra.cloud support a one-time project?',
    answer:
      'Yes. Discovery Sprint and focused implementation scopes are suitable for one-time projects when the goals, technical constraints, and handover expectations are clear.'
  },
  {
    question: 'Which tier is best for AI automation work?',
    answer:
      'Teams usually start with Discovery Sprint when the workflow is undefined and Implementation Partner when the target workflow, data sources, and integration points are already known.'
  }
]

export default function PricingPage() {
  const siteUrl = process.env.SITE_URL || 'https://qentra.cloud'

  return (
    <ServicePageLayout
      title="AI Automation and Cloud Engineering Pricing | Qentra.cloud"
      description="Explore Qentra.cloud pricing tiers for AI automation services, cloud engineering, Kubernetes consulting, and platform advisory engagements."
      canonicalPath="/pricing"
      serviceName="AI Automation and Cloud Engineering Pricing"
      includeServiceSchema={false}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        },
        {
          '@context': 'https://schema.org',
          '@type': 'OfferCatalog',
          name: 'Qentra.cloud Consulting Pricing',
          url: `${siteUrl}/pricing`,
          itemListElement: TIERS.map((tier) => ({
            '@type': 'Offer',
            name: tier.name,
            description: tier.summary,
            seller: {
              '@type': 'Organization',
              name: 'Qentra.cloud',
              url: siteUrl
            }
          }))
        }
      ]}
    >
      <div className="space-y-12">
        <section className="glass rounded-2xl p-8 md:p-12">
          <div className="inline-block px-3 py-1 rounded-full bg-white/3 text-sm text-electric font-medium">Pricing</div>
          <h1 className="mt-5 text-4xl md:text-5xl font-heading font-extrabold max-w-4xl leading-tight">
            Transparent pricing tiers for AI automation, cloud engineering, and Kubernetes consulting.
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-3xl">
            Start with a focused discovery sprint, bring Qentra.cloud in as an implementation partner, or use advisory support for ongoing platform, AI, and security decisions.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <article key={tier.name} className="glass rounded-xl p-6 flex flex-col">
              <h2 className="text-2xl font-heading font-extrabold">{tier.name}</h2>
              <p className="mt-3 text-2xl font-heading font-extrabold text-electric">{tier.scope}</p>
              <p className="mt-4 text-white/75">{tier.summary}</p>
              <ul className="mt-6 space-y-3 text-white/80 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-7 inline-block px-5 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold text-center">
                {tier.cta}
              </a>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
          <article className="glass rounded-xl p-6">
            <h2 className="text-2xl font-heading font-extrabold">How Scope Is Confirmed</h2>
            <p className="mt-3 text-white/75">
              Pricing is finalized after a short review of goals, systems, data sources, stakeholders, and delivery constraints. This keeps estimates tied to real engineering work instead of broad consulting assumptions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ai-automation" className="inline-block px-4 py-2 rounded-md border border-white/10 text-white/90 hover:border-electric/60 transition">
                AI Automation
              </Link>
              <Link href="/platform-engineering" className="inline-block px-4 py-2 rounded-md border border-white/10 text-white/90 hover:border-electric/60 transition">
                Platform Engineering
              </Link>
              <Link href="/cloud-security" className="inline-block px-4 py-2 rounded-md border border-white/10 text-white/90 hover:border-electric/60 transition">
                Cloud Security
              </Link>
            </div>
          </article>

          <article className="glass rounded-xl p-6">
            <h2 className="text-2xl font-heading font-extrabold">Pricing FAQ</h2>
            <div className="mt-4 space-y-5">
              {FAQS.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-2 text-sm text-white/75">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="contact" className="glass rounded-xl p-6">
          <h2 className="text-2xl font-heading font-extrabold">Request a Scope Review</h2>
          <p className="mt-3 text-white/75 max-w-3xl">
            Share the outcome you want, the systems involved, and any timeline constraints. Qentra.cloud will respond with the most suitable tier and a practical next step.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </ServicePageLayout>
  )
}
