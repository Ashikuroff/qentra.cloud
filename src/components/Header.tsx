import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-mark.svg" alt="Qentra" className="w-10 h-10 logo-glow" />
          <img src="/logo-wordmark.svg" alt="Qentra.cloud" className="hidden sm:block h-8" />
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm text-white/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#tech" className="hover:text-white transition">Tech</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="ml-4 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">Contact</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="bg-white/6 p-2 rounded-md">☰</button>
        </div>
      </div>
    </header>
  )
}
