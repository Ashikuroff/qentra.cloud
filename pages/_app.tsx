import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

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
        <meta property="og:description" content="Enterprise-grade AI automation, cloud engineering, and security solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.SITE_URL || 'https://qentra.cloud'} />
        <meta property="og:image" content={`${process.env.SITE_URL || 'https://qentra.cloud'}/og-image-new.svg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qentra.cloud — AI Automation & Cloud Engineering" />
        <meta name="twitter:description" content="Enterprise-grade AI automation, cloud engineering, and security solutions for modern businesses." />
        <meta name="twitter:image" content={`${process.env.SITE_URL || 'https://qentra.cloud'}/og-image-new.svg`} />
        <meta name="theme-color" content="#061028" />
        <link rel="icon" href="/favicon-new.svg" />
      </Head>
      <Component {...pageProps} />

      {/* AI Cloud Advisor Botpress */}
      <Script
        id="botpress-preinit"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: "window.botpressWebChat = { botName: 'Qentra AI Cloud Advisor' };"
        }}
      />
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
