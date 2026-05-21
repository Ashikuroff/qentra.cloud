import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-white/6 glass">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-white font-bold text-lg tracking-wide">
          Qentra.cloud
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
