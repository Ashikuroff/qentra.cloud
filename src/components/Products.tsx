import { PRODUCTS } from '../data/products'

export default function Products() {
  return (
    <section id="products" className="pt-12 scroll-mt-28">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full bg-white/3 px-3 py-1 text-sm font-medium text-electric">
            Qentra Products
          </div>
          <h2 className="mt-4 text-2xl font-heading font-extrabold">
            SaaS products for profit, visibility, and AI security
          </h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Explore focused software products from the Qentra ecosystem. Each product solves a specific business
            problem in plain terms: protect profit, improve discoverability, or secure AI workflows.
          </p>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/60">
          Built for operators, founders, marketers, and engineering teams that need practical tools rather than
          generic dashboards.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <article
            key={product.name}
            className="glass flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-glow-md transition hover:-translate-y-1 hover:border-electric/25"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-electric/80">{product.category}</p>
                <h3 className="mt-2 text-xl font-heading font-extrabold text-white">{product.name}</h3>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                SaaS
              </span>
            </div>

            <p className="mt-4 text-sm font-semibold text-white/85">{product.coreFeature}</p>
            <p className="mt-3 text-sm leading-6 text-white/72">{product.description}</p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Best for</p>
              <p className="mt-2 text-sm text-white/75">{product.audience}</p>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Core features</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-white/72">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between lg:mt-auto lg:flex-col lg:items-start xl:flex-row xl:items-center">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${product.name} website`}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-gradient-to-r from-electric to-cyan px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Visit product
              </a>
              <span className="break-all text-xs font-medium text-white/55">{product.domain}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
