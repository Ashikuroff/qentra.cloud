# Qentra.cloud — AI Automation & Cloud Engineering Website

Local development:

```bash
npm install
npm run dev
```

This repository contains a Next.js + TailwindCSS starter with Framer Motion components.

Environment variables:

- `SITE_URL` — your canonical site URL (e.g. https://qentra.cloud)
- `SENDGRID_API_KEY` — (optional) SendGrid API key to send contact form emails
- `CONTACT_TO_EMAIL` — (optional) recipient address for contact emails
- `CONTACT_FROM_EMAIL` — (optional) from address for contact emails

If `SENDGRID_API_KEY` is not provided, contact submissions will be logged to the server console (useful for local testing).

Build and deploy (Vercel recommended):

```bash
npm install
npm run build
npm run start
```

Place `robots.txt` in `public/robots.txt` and sitemap is available at `/sitemap.xml`.
