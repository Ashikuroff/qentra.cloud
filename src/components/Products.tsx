import { motion } from 'framer-motion'

const PRODUCTS = [
  {
    name: 'MarginIQ',
    url: 'https://marginiq.shop',
    category: 'Commerce Intelligence',
    description:
      'MarginIQ gives commerce teams a sharper view of pricing, costs, and promotion impact before they launch changes.'
  },
  {
    name: 'VisiPilot',
    url: 'https://visipilot.dev',
    category: 'Operational Visibility',
    description:
      'VisiPilot helps product and engineering teams monitor workflows, releases, and system health with less noise.'
  },
  {
    name: 'AgentGuard Cloud',
    url: 'https://agentgurad.cloud',
    category: 'AI Governance',
    description:
      'AgentGuard Cloud brings policy checks, safer approvals, and runtime guardrails to AI agent workflows.'
  }
]

export default function Products() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  }

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="products" className="pt-12 scroll-mt-28">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex rounded-full bg-white/3 px-3 py-1 text-sm font-medium text-electric">
            Products
          </div>
          <h2 className="mt-4 text-2xl font-heading font-extrabold">
            Product surfaces with clear positioning
          </h2>
          <p className="mt-3 max-w-2xl text-white/75">
            A compact product showcase that presents each brand as a real SaaS offering, with a live URL and a short
            description instead of a plain link list.
          </p>
        </div>
        <p className="max-w-xl text-sm text-white/60">
          This section is built to read like a portfolio, not a directory, so visitors can understand the product
          story at a glance.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {PRODUCTS.map((product) => (
          <motion.article
            key={product.name}
            variants={item}
            className="glass flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-glow-md transition-transform hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-electric/80">{product.category}</p>
                <h3 className="mt-2 text-xl font-heading font-extrabold text-white">{product.name}</h3>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                Live
              </span>
            </div>

            <a
              href={product.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 break-all text-sm font-medium text-electric transition hover:text-cyan"
            >
              {product.url}
            </a>

            <p className="mt-3 text-sm leading-6 text-white/75">{product.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
