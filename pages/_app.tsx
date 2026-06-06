import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { Inter, Sora, Space_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap'
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-sora',
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  const siteUrl = process.env.SITE_URL || 'https://qentra.cloud'
  const title = 'Qentra - AI Automation & Cloud Engineering Solutions'
  const description = 'Discover Qentra AI automation services, cloud engineering, and Kubernetes consulting designed to improve operational efficiency for AI workflow teams.'

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta name="description" content={description} key="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} key="canonical" />

        {/* Open Graph */}
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={siteUrl} key="og:url" />
        <meta property="og:image" content={`${siteUrl}/og-image-new.svg`} key="og:image" />
        <meta property="og:site_name" content="Qentra.cloud" key="og:site_name" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta name="twitter:description" content={description} key="twitter:description" />
        <meta name="twitter:image" content={`${siteUrl}/og-image-new.svg`} key="twitter:image" />
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
      <div className={`${inter.className} ${inter.variable} ${spaceGrotesk.variable} ${sora.variable}`}>
        <Component {...pageProps} />
      </div>

      {/* AI Cloud Advisor Botpress */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        strategy="lazyOnload"
      />
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.botpress.init({
              botId: "d198de56-bc84-4e3c-87cf-13921ff6f186",
              configuration: {
                version: "v2",
                botName: "Qentra AI Cloud Advisor",
                botAvatar: "${siteUrl}/logo-mark.svg",
                website: {},
                email: {},
                phone: {},
                termsOfService: {},
                privacyPolicy: {},
                color: "#3276EA",
                variant: "solid",
                headerVariant: "solid",
                themeMode: "light",
                fontFamily: "inter",
                radius: 4,
                feedbackEnabled: false,
                footer: "[by Botpress](https://botpress.com/?from=webchat)",
                soundEnabled: false,
                proactiveMessageEnabled: false,
                proactiveBubbleMessage: "Hi! Need help?",
                proactiveBubbleTriggerType: "afterDelay",
                proactiveBubbleDelayTime: 10,
                conversationHistory: false
              },
              clientId: "3b582d52-8797-477a-9d90-c42c6213b662"
            });
          `
        }}
      />

    </>
  )
}
