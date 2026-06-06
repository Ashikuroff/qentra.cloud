import Link from 'next/link'
import { useState } from 'react'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return ( <>

    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-mark.svg" alt="Qentra" className="w-10 h-10 logo-glow" />
          <img src="/logo-wordmark.svg" alt="Qentra" className="hidden sm:block h-8" />
        </Link>

        <nav className="hidden md:flex gap-5 lg:gap-8 items-center text-sm text-white/80">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/ai-automation" className="hover:text-white transition">AI Automation</Link>
          <Link href="/platform-engineering" className="hover:text-white transition">Platform Engineering</Link>
          <Link href="/cloud-security" className="hover:text-white transition">Cloud Security</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <a href="/#about" className="hover:text-white transition">About</a>
          <a href="/#contact" className="ml-4 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Contact</a>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={false}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(true)}
            className="bg-white/6 p-2 rounded-md hover:bg-white/10 transition"
          >
            ☰
          </button>
        </div>
        </div>
      </header>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-6 text-white text-xl text-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link>
            <Link href="/ai-automation" onClick={() => setIsOpen(false)} className="hover:underline">AI Automation</Link>
            <Link href="/platform-engineering" onClick={() => setIsOpen(false)} className="hover:underline">Platform Engineering</Link>
            <Link href="/cloud-security" onClick={() => setIsOpen(false)} className="hover:underline">Cloud Security</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:underline">Pricing</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:underline">Blog</Link>
            <a href="/#about" onClick={() => setIsOpen(false)} className="hover:underline">About</a>
            <a href="/#contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact</a>
          </nav>
        </div>
      )}
    </>
  )
}
