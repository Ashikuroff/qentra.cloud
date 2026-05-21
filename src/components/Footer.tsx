export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/70">© {new Date().getFullYear()} Qentra.cloud — All rights reserved.</div>
        <div className="text-sm text-white/70">Designed for enterprise AI & cloud engineering</div>
      </div>
    </footer>
  )
}
