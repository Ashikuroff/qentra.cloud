import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  const siteUrl = process.env.SITE_URL || 'https://qentra.cloud'
  const title = 'AI Automation, Cloud Engineering & Kubernetes Consulting | Qentra.cloud'
  const description = 'Qentra.cloud delivers AI automation services, cloud engineering, Kubernetes consulting, DevOps automation, and cloud security for teams building production-grade platforms.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image-new.svg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/og-image-new.svg`} />
        <meta name="theme-color" content="#061028" />
        <link rel="icon" href="/favicon-new.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Qentra.cloud',
              url: siteUrl,
              logo: `${siteUrl}/logo-mark.svg`,
              description,
              sameAs: ['https://github.com/Ashikuroff/qentra.cloud']
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Qentra.cloud',
              url: siteUrl,
              description
            })
          }}
        />
      </Head>
      <Component {...pageProps} />

      {/* AI Cloud Advisor Botpress */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2026/05/23/16/20260523163642-DO1HQEMD.js"
        strategy="afterInteractive"
        defer
      />

    </>
  )
}
