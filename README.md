# SOCIAL

A minimal one-page site linking to my phone, Instagram, LinkedIn, GitHub and Gmail. Built with Next.js.

## Edit your info

Everything shown on the page lives in [`profile.ts`](./profile.ts): name, tagline, initials, and each link's `display` text and `href`.

- Phone: `href: "tel:+15551234567"` (digits only, with country code)
- Gmail: `href: "mailto:you@gmail.com"`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this GitHub repo.
2. Vercel detects Next.js automatically, so keep the defaults and click **Deploy**.
3. Every push to `main` redeploys the site.
