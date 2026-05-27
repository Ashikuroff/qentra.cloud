/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
    // All hero images are local (public/), no external domains needed
    formats: ['image/webp', 'image/avif']
  }
}
