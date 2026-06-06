import type { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

type JsonLd = Record<string, unknown>

type ServicePageLayoutProps = {
  title: string
  description: string
  canonicalPath: string
  serviceName: string
  includeServiceSchema?: boolean
  structuredData?: JsonLd[]
  children: ReactNode
}

export default function ServicePageLayout({
  title,
  description,
  canonicalPath,
  serviceName,
  includeServiceSchema = true,
  structuredData = [],
  children
}: ServicePageLayoutProps) {
  const siteUrl = process.env.SITE_URL || 'https://qentra.cloud'
  const canonicalUrl = `${siteUrl}${canonicalPath}`
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonicalUrl
    },
    ...(includeServiceSchema ? [{
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
    }] : []),
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
    },
    ...structuredData
  ]

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta name="description" content={description} key="description" />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={canonicalUrl} key="og:url" />
        <meta property="og:image" content={`${siteUrl}/og-image-new.svg`} key="og:image" />
        <meta property="og:site_name" content="Qentra.cloud" key="og:site_name" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta name="twitter:description" content={description} key="twitter:description" />
        <meta name="twitter:image" content={`${siteUrl}/og-image-new.svg`} key="twitter:image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
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
