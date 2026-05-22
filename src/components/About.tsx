export default function About() {
  return (
    <section id="about" className="pt-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-heading font-extrabold mb-3">About Qentra.cloud</h2>
          <p className="text-white/80 max-w-xl">Qentra.cloud partners with modern engineering teams to design and operate intelligent cloud-native systems. We combine AI automation, robust platform engineering, and security-first practices to reduce operational toil and accelerate business outcomes.</p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="glass p-4 rounded-lg text-center">
              <div className="text-2xl font-heading font-extrabold">10+</div>
              <div className="text-xs text-white/70">Years combined</div>
            </div>
            <div className="glass p-4 rounded-lg text-center">
              <div className="text-2xl font-heading font-extrabold">50+</div>
              <div className="text-xs text-white/70">Projects delivered</div>
            </div>
            <div className="glass p-4 rounded-lg text-center">
              <div className="text-2xl font-heading font-extrabold">Enterprise</div>
              <div className="text-xs text-white/70">Trusted clients</div>
            </div>
          </div>
        </div>

        <div>
          <div className="glass p-6 rounded-xl">
            <h3 className="font-semibold">Our Approach</h3>
            <ul className="mt-3 text-white/80 space-y-2 text-sm">
              <li>• Product-minded platform engineering</li>
              <li>• AI-first automation and augmentation</li>
              <li>• Secure by design, policy-driven operations</li>
              <li>• Measurable outcomes and observability</li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Work With Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
