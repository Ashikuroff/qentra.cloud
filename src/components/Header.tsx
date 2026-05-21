import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass bg-transparent border-b border-white/6">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Qentra.cloud" className="w-10 h-10" />
          <span className="hidden sm:inline text-white font-bold text-lg tracking-wide">Qentra.cloud</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm text-white/80">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#tech">Tech</a>
          <a href="#about">About</a>
          <a href="#contact" className="ml-4 inline-block bg-gradient-to-r from-electric to-cyan text-black px-4 py-2 rounded-md font-semibold">Contact</a>
        </nav>
      </div>
    </header>
  )
}
