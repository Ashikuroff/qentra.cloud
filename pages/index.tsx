import Head from 'next/head'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Services from '../src/components/Services'
import Solutions from '../src/components/Solutions'
import AISection from '../src/components/features/AISection'
import CloudSection from '../src/components/features/CloudSection'
import SecuritySection from '../src/components/features/SecuritySection'
import TechStack from '../src/components/TechStack'
import About from '../src/components/About'
import WhyChoose from '../src/components/WhyChoose'
import Testimonials from '../src/components/Testimonials'
import FAQ, { FAQS } from '../src/components/FAQ'
import ContactForm from '../src/components/ContactForm'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta name="robots" content="index,follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer
                }
              }))
            })
          }}
        />
      </Head>
      <Header />
      <main className="container page-offset pt-24 pb-12 flex-1">
        <Hero />
        {/* Feature slider sections */}
        <section aria-hidden className="pt-6" />
        <AISection />
        <CloudSection />
        <SecuritySection />
        <Services />
        <Solutions />
        {/* Detailed feature sections */}
        <div>
          {/* Dynamically import detailed feature sections for clarity */}
        </div>
        <TechStack />
        <About />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <section id="contact" className="pt-12">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
