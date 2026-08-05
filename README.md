# SPA Roofing

Production-ready bilingual roofing website for SPA Roofing, based in Little Rock and serving Arkansas.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

1. Upload this project to a GitHub repository.
2. Import the repository into Vercel.
3. Deploy with the default Next.js settings.
4. Add `sparoofing.online` as the custom domain in Vercel.
5. Use the DNS records Vercel gives you in Porkbun.

## Estimate form

Version 1 intentionally uses a `mailto:` handoff so there are no API keys or external form accounts required. When the visitor submits, their email app opens with the estimate details pre-filled for `sparoofing6@gmail.com`.

For a production form that submits silently in the background, replace `submitEstimate()` in `components/RoofingSite.tsx` with Web3Forms, Formspree, Resend, or a Next.js API route.

## Images

All current site photography is real SPA Roofing project photography supplied for this build.

## Branding

The header logo is rendered with HTML/CSS so the text stays crisp and avoids AI-generated lettering artifacts. A generated logo concept is included at `public/logo/logo-reference.png` for reference.
