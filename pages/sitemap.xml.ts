import { GetServerSideProps } from 'next'

const SITE_URL = process.env.SITE_URL || 'https://qentra.cloud'

export default function Sitemap() {
  // getServerSideProps will write the XML response.
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pages = [
    '',
    'ai-automation',
    'agentic-ai-workflows',
    'platform-engineering',
    'gpu-kubernetes',
    'cloud-security',
    'ai-security-guardrails'
  ]
  const lastModified = new Date().toISOString()

  const urls = pages
    .map((p) => {
      const path = p === '' ? '' : `/${p}`
      const priority = p === '' ? '1.0' : '0.8'
      return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.write(xml)
  res.end()

  return {
    props: {}
  }
}
