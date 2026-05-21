# Qentra.cloud — AI Automation & Cloud Engineering Website

Local development:

```bash
npm install
npm run dev
```

This repository contains a Next.js + TailwindCSS site scaffold for Qentra.cloud (AI Automation & Cloud Engineering).

Environment variables
---------------------

- `SITE_URL` — your canonical site URL (e.g. https://qentra.cloud)
- `SENDGRID_API_KEY` — (optional) SendGrid API key to send contact form emails via the server API
- `CONTACT_TO_EMAIL` — recipient address for contact emails (used with SendGrid)
- `CONTACT_FROM_EMAIL` — from address for contact emails (used with SendGrid)
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — (optional) Formspree endpoint (e.g. `https://formspree.io/f/xyz`) for client-side form submissions when hosting statically

Hosting on Hostinger
---------------------

You own the domain and want to host on Hostinger. There are two practical options depending on the Hostinger plan you purchased:

### A) Host with Node.js (recommended — keeps the API and server features)

- Use a Hostinger Cloud or VPS plan that supports running Node.js apps. Shared hosting commonly does not allow long-running Node processes.
- Steps:

	1. Upload or clone this repository on the server (via Git or SFTP).
	2. Create a `.env` file (or set variables in hPanel) with at least:

	```env
	SITE_URL=https://yourdomain.com
	CONTACT_TO_EMAIL=hello@yourdomain.com
	CONTACT_FROM_EMAIL=noreply@yourdomain.com
	# Optional (if you want server-side emails):
	SENDGRID_API_KEY=SG.xxxxxx
	```

	3. Install and build:

	```bash
	npm install --production
	npm run build
	```

	4. Start the app. Use `pm2` or Hostinger's Node app manager to run `npm run start`:

	```bash
	npm install -g pm2
	pm2 start "npm -- start" --name qentra-cloud
	pm2 save
	```

	5. In Hostinger hPanel, point your domain's A record to your server IP. Configure proxy/port forwarding if required, or use the Node app manager to bind the app to the domain.

### B) Static export and upload to Shared Hosting (no Node required)

- Use this if your Hostinger plan is Shared Hosting that only serves static files.
- Limitations: server API (`/api/contact`) and any server-side routes will not work. Use Formspree for contact forms.

Steps:

	1. (Optional) Create a Formspree form and copy the endpoint.
	2. Set the client form endpoint in environment (for local builds):

	```env
	NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
	SITE_URL=https://yourdomain.com
	```

	3. Ensure there are no server-side routes that prevent static export. This project includes a server-side `pages/sitemap.xml.ts`; either remove/rename it or replace it with a static `public/sitemap.xml`.

	4. Export a static site:

	```bash
	npm install
	npm run build
	npx next export -o out
	```

	5. Upload the contents of the `out/` directory to Hostinger's `public_html` (via File Manager or FTP/SFTP) and point your domain to the site.

DNS / Domain setup
------------------

- If Hostinger manages your DNS, add an A record for `@` pointing to your server IP (Node/VPS), or use Hostinger's domain connection tools for shared hosting.
- If you manage DNS elsewhere, set the A record to the Hostinger server IP and add any required CNAMEs for `www`.

Notes
-----

- Server-side features (SendGrid email, server API routes) require Node hosting. If you want those on Hostinger, use a VPS/Cloud plan.
- For a lightweight static deployment use Formspree and `next export` then upload files to shared hosting.

Want me to finish this for you?
- I can wire Formspree here (the contact form supports `NEXT_PUBLIC_FORMSPREE_ENDPOINT`), create a static `public/sitemap.xml` for export, and push a branch ready for static upload — tell me which option you prefer (Node hosting or static upload).

