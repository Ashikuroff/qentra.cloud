import Link from 'next/link'
import ServicePageLayout from '../../src/components/ServicePageLayout'

const POSTS = [
  {
    title: 'Cloud Engineering Best Practices for AI Automation Teams',
    description:
      'A practical guide to cloud engineering foundations for teams moving AI automation from prototype to production.',
    href: '/blog/cloud-engineering-best-practices-ai-automation',
    date: '2026-06-06',
    readTime: '7 min read',
    category: 'Cloud Engineering'
  }
]

export default function BlogIndexPage() {
  const siteUrl = process.env.SITE_URL || 'https://qentra.cloud'

  return (
    <ServicePageLayout
      title="AI Automation and Cloud Engineering Blog | Qentra.cloud"
      description="Read practical Qentra.cloud insights on AI automation, cloud engineering, Kubernetes consulting, DevSecOps, and secure production platforms."
      canonicalPath="/blog"
      serviceName="Blog"
      includeServiceSchema={false}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Qentra.cloud Blog',
          description:
            'Practical insights on AI automation, cloud engineering, Kubernetes consulting, DevSecOps, and secure production platforms.',
          url: `${siteUrl}/blog`,
          blogPost: POSTS.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            url: `${siteUrl}${post.href}`
          }))
        }
      ]}
    >
      <div className="space-y-12">
        <section className="glass rounded-2xl p-8 md:p-12">
          <div className="inline-block px-3 py-1 rounded-full bg-white/3 text-sm text-electric font-medium">Blog</div>
          <h1 className="mt-5 text-4xl md:text-5xl font-heading font-extrabold max-w-4xl leading-tight">
            Practical guides for AI automation, cloud engineering, and secure platform delivery.
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-3xl">
            Read Qentra.cloud field notes on building AI workflows, Kubernetes platforms, cloud infrastructure, and DevSecOps practices that hold up in production.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6">
          {POSTS.map((post) => (
            <article key={post.href} className="glass rounded-xl p-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span>{post.category}</span>
                <span aria-hidden="true">/</span>
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden="true">/</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-heading font-extrabold">
                <Link href={post.href} className="hover:text-electric transition">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-white/75 max-w-3xl">{post.description}</p>
              <Link href={post.href} className="mt-6 inline-block px-5 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">
                Read the Guide
              </Link>
            </article>
          ))}
        </section>
      </div>
    </ServicePageLayout>
  )
}
