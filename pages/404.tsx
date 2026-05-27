import Link from 'next/link'
import Head from 'next/head'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | Qentra.cloud</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-heading font-extrabold text-electric">404</h1>
        <p className="mt-4 text-xl text-white/80">Page not found.</p>
        <p className="mt-2 text-white/50">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="mt-8 inline-block px-6 py-3 rounded-md bg-gradient-to-r from-electric to-cyan text-black font-semibold">
          Back to Home
        </Link>
      </div>
    </>
  )
}
