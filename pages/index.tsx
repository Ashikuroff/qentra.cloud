import Head from 'next/head'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Services from '../src/components/Services'
import Solutions from '../src/components/Solutions'
import TechStack from '../src/components/TechStack'
import About from '../src/components/About'
import WhyChoose from '../src/components/WhyChoose'
import Testimonials from '../src/components/Testimonials'
import ContactForm from '../src/components/ContactForm'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta name="robots" content="index,follow" />
      </Head>
      <Header />
      <main className="container page-offset pt-24 pb-12 flex-1">
        <Hero />
        <Services />
        <Solutions />
        <TechStack />
        <About />
        <WhyChoose />
        <Testimonials />
        <section id="contact" className="pt-12">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
