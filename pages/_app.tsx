import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Qentra.cloud — AI Automation & Cloud Engineering</title>
        <meta name="description" content="AI Automation & Cloud Engineering for modern businesses. Qentra.cloud designs, automates, and scales intelligent cloud-native systems using AI, Kubernetes, and DevOps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={process.env.SITE_URL || 'https://qentra.cloud'} />

        {/* Open Graph */}
        <meta property="og:title" content="Qentra.cloud — AI Automation & Cloud Engineering" />
        <meta property="og:description" content="Qentra.cloud helps organizations design, automate, and scale intelligent cloud-native systems using AI, Kubernetes, and DevOps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.SITE_URL || 'https://qentra.cloud'} />
        <meta property="og:image" content={`${process.env.SITE_URL || 'https://qentra.cloud'}/og-image.svg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qentra.cloud — AI Automation & Cloud Engineering" />
        <meta name="twitter:description" content="Qentra.cloud helps organizations design, automate, and scale intelligent cloud-native systems using AI, Kubernetes, and DevOps." />
        <meta name="twitter:image" content={`${process.env.SITE_URL || 'https://qentra.cloud'}/og-image.svg`} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Qentra.cloud',
              url: process.env.SITE_URL || 'https://qentra.cloud',
              logo: `${process.env.SITE_URL || 'https://qentra.cloud'}/logo.svg`,
              sameAs: []
            })
          }}
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
