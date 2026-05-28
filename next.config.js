/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cloud-engineering',
        destination: '/platform-engineering',
        permanent: true
      }
    ]
  },
  images: {
    domains: [],
    // All hero images are local (public/), no external domains needed
    formats: ['image/webp', 'image/avif']
  }
}
