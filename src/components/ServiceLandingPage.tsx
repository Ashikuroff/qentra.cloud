import Link from 'next/link'
import ContactForm from './ContactForm'

type ServiceLandingPageProps = {
  eyebrow: string
  title: string
  intro: string
  process: string[]
  highlights: string[]
  deliverables: string[]
  outcomes: string[]
  relatedLinks: Array<{ href: string; label: string }>
}

export default function ServiceLandingPage({
  eyebrow,
  title,
  intro,
  process,
  highlights,
  deliverables,
  outcomes,
  relatedLinks
}: ServiceLandingPageProps) {
  return (
    <div className="space-y-12">
      <section className="glass rounded-2xl p-8 md:p-12">
        <div className="inline-block px-3 py-1 rounded-full bg-white/3 text-sm text-electric font-medium">{eyebrow}</div>
        <h1 className="mt-5 text-4xl md:text-5xl font-heading font-extrabold max-w-4xl leading-tight">{title}</h1>
        <p className="mt-5 text-lg text-white/80 max-w-3xl">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">
            Talk to Our Team
          </a>
          <Link href="/" className="inline-block px-6 py-3 rounded-md border border-white/10 text-white/90">
            Back to Homepage
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
        <article className="glass rounded-xl p-6">
          <h2 className="text-2xl font-heading font-extrabold">Engagement Structure</h2>
          <p className="mt-3 text-white/75">
            Each engagement is designed around discovery, implementation priorities, and an operating model your team can sustain after delivery.
          </p>
        </article>

        <article className="glass rounded-xl p-6">
          <h2 className="text-2xl font-heading font-extrabold">How We Approach It</h2>
          <ol className="mt-4 space-y-4 text-white/80">
            {process.map((item, index) => (
              <li key={item} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-electric text-black font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="glass rounded-xl p-6">
          <h2 className="text-2xl font-heading font-extrabold">What We Help With</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            {highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="glass rounded-xl p-6">
          <h2 className="text-2xl font-heading font-extrabold">Typical Deliverables</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            {deliverables.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="glass rounded-xl p-6">
          <h2 className="text-2xl font-heading font-extrabold">Business Outcomes</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            {outcomes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
        <div className="glass rounded-xl p-6">
          <h2 className="text-2xl font-heading font-extrabold">Related Services</h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            Explore adjacent capabilities across AI automation, platform engineering, Kubernetes consulting, and cloud security delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block px-4 py-2 rounded-md border border-white/10 text-white/90 hover:border-electric/60 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <section id="contact" className="glass rounded-xl p-6">
          <h2 className="text-2xl font-heading font-extrabold">Start a Conversation</h2>
          <p className="mt-3 text-white/75">
            Share your current platform, delivery, or automation goals and we will follow up with a practical next step.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </section>
    </div>
  )
}
