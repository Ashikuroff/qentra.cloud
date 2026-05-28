import type { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

type ServicePageLayoutProps = {
  title: string
  description: string
  canonicalPath: string
  serviceName: string
  children: ReactNode
}

export default function ServicePageLayout({
  title,
  description,
  canonicalPath,
  serviceName,
  children
}: ServicePageLayoutProps) {
  const siteUrl = process.env.SITE_URL || 'https://qentra.cloud'
  const canonicalUrl = `${siteUrl}${canonicalPath}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image-new.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/og-image-new.svg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: title,
                description,
                url: canonicalUrl
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: serviceName,
                description,
                provider: {
                  '@type': 'Organization',
                  name: 'Qentra.cloud',
                  url: siteUrl
                },
                areaServed: {
                  '@type': 'Place',
                  name: 'Global'
                },
                url: canonicalUrl
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: siteUrl
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: serviceName,
                    item: canonicalUrl
                  }
                ]
              }
            ])
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container page-offset pt-24 pb-12 flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}
