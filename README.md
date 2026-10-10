# NexIon Labs website

Marketing website for **NexIon Labs**, an Australian web development studio.
Built with Next.js (App Router, Cache Components), TypeScript, Tailwind CSS v4
and Motion. Every page is statically prerendered.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Script                            | What it does                                             |
| --------------------------------- | -------------------------------------------------------- |
| `npm run dev`                     | Development server                                       |
| `npm run build`                   | Production build (type-checks and prerenders every page) |
| `npm start`                       | Serve the production build                               |
| `npm run lint` / `lint:fix`       | ESLint (Next.js core-web-vitals + TypeScript rules)      |
| `npm run format` / `format:check` | Prettier (with Tailwind class sorting)                   |
| `npm run typecheck`               | `tsc --noEmit`                                           |

Requires Node.js 20.9 or newer.

## Environment variables

See `.env.example`.

| Variable               | Required      | Description                                                                                                                                                      |
| ---------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Recommended   | Production URL with no trailing slash. Drives canonical URLs, the sitemap, robots.txt and Open Graph. Falls back to the `SITE_URL` placeholder in `lib/site.ts`. |
| `EMAIL_PROVIDER`       | No            | `resend` (default when `RESEND_API_KEY` is set) or `console` (logs enquiries; development only).                                                                 |
| `RESEND_API_KEY`       | In production | API key from [resend.com](https://resend.com).                                                                                                                   |
| `CONTACT_FROM_EMAIL`   | In production | Sender address on a domain you've verified in Resend, e.g. `NexIon Labs Website <website@yourdomain.com.au>`.                                                    |
| `CONTACT_TO_EMAIL`     | No            | Inbox that receives enquiries. Defaults to `site.email`.                                                                                                         |

If email isn't configured in production, the form shows a friendly
"temporarily unavailable, please email us" message instead of silently
dropping the enquiry.

**Using another email provider:** implement the `EmailProvider` interface in
`lib/email.ts` (Postmark, SES, SMTP and so on) and add a case to
`getEmailProvider()`.

## Editing content

All copy and data live in typed files, so you can change content without
touching components:

| What                                                                 | File                      |
| -------------------------------------------------------------------- | ------------------------- |
| Business details: name, ABN, email, phone, map, promo toggle, domain | `lib/site.ts`             |
| Navigation links                                                     | `content/navigation.ts`   |
| Services                                                             | `content/services.ts`     |
| "Built by industry veterans" points                                  | `content/veterans.ts`     |
| Why choose us                                                        | `content/why-us.ts`       |
| Portfolio (currently **sample/concept work**)                        | `content/portfolio.ts`    |
| Pricing packages and notes                                           | `content/pricing.ts`      |
| Process steps                                                        | `content/process.ts`      |
| FAQ (also generates the FAQPage JSON-LD)                             | `content/faq.ts`          |
| Testimonials (section is hidden while the list is empty)             | `content/testimonials.ts` |
| Contact form service and budget options                              | `lib/contact.ts`          |
| Contact form validation rules                                        | `lib/contact-schema.ts`   |
| Privacy policy                                                       | `app/privacy/page.tsx`    |

- **Images:** put files in `public/images` and reference them as `/images/...`.
  Remember to update `CREDITS.md`.
- **Promo badge:** set `site.promo.active = false` in `lib/site.ts` to hide the
  "50% off" offer everywhere.
- **Brand colours:** CSS variables at the top of `app/globals.css`, exposed as
  Tailwind tokens (`bg-lilac`, `text-ink`, `bg-brand` and so on).

## Project structure

```
app/                 Routes, metadata, OG image, sitemap, robots, server action
  actions/contact.ts Contact form server action (Zod validation, honeypot, email)
components/
  layout/            Header, Footer
  sections/          Page sections (Hero, Services, Pricing, ...)
  ui/                Reusable primitives (Button, MeshGradient, Reveal, MapFacade, ...)
content/             Editable typed content
lib/                 Site config, JSON-LD schema, metadata helper, email provider
public/images/       Local images (see CREDITS.md)
assets/fonts/        TTFs used only for the generated OG image
```

## Performance notes

- The hero gradient is pure CSS (transform-only animations on the compositor).
  It pauses when off-screen and is static for `prefers-reduced-motion` users.
- Scroll reveals use Motion's `animate`/`inView`, imported lazily after
  hydration so Motion never delays first paint.
- The Google Map is a click-to-load facade; nothing from Google loads until a
  visitor asks for it.
- CSS is inlined (`experimental.inlineCss`) to remove the render-blocking
  stylesheet request.
- The hero mockup image only loads at full size on desktop; mobile requests a
  tiny placeholder.

Local Lighthouse (mobile, production build) scored 95–98 on Performance and
100 on Accessibility, Best Practices and SEO for every route. Re-check after
deployment, since real hosting and network conditions differ.

## Deploying to Vercel

1. Push this repository to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository. The
   framework preset is detected as Next.js, so no build settings need changing.
3. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL`,
   `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL`.
4. Deploy, then add your custom domain under **Settings → Domains**.
5. In Resend, verify your sending domain (DNS records) so `CONTACT_FROM_EMAIL`
   works.
6. Submit `https://yourdomain/sitemap.xml` in Google Search Console.

## Before launch checklist

See the placeholder list in `lib/site.ts` (everything marked `PLACEHOLDER`)
and search the codebase for `TODO`.
