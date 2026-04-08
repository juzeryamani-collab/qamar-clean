# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a greenfield website project for **Qamar Construction**, a Houston-based contractor specializing in construction and renovation of medical and dental facilities. The project is a full redesign/replacement of their existing WordPress/Divi site at qamarconstruction.com.

The client's phone number supports WhatsApp; all contact channels (WhatsApp, SMS, email) must be integrated.

## Development Phases

**Phase 1 (current):** Core service pages + client demo for approval
- Homepage
- Medical Clinics (full design-to-buildout)
- Dental Clinics
- Medical Urgent Care Facilities
- Contact/Lead capture with WhatsApp floating widget, SMS, and email

**Phase 2+:** Additional services, expanded location pages, portfolio/case studies

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server → http://localhost:3000
npm run build      # production build
npm run lint       # ESLint
```

## Tech Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v3** — brand tokens in `tailwind.config.ts`
- **Resend** — email delivery for contact/quote forms
- **lucide-react** — icons throughout

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key (set in Vercel env vars too) |
| `CONTACT_EMAIL` | Where quote form submissions are delivered |

Both must be set in `.env.local` (local) and Vercel project settings (production).

## Design System & Branding

Brand colors are derived from the Qamar logo (`Qamar Logo.png` in project root):
- **Primary background:** Dark graphite / stainless steel
- **Accent:** Gold/amber
- **Secondary:** Deep navy blue (buildings in logo)
- **Text:** White / light gray

Design direction: modern, industrial-professional aesthetic — clean typography, premium feel.

## SEO & AEO Requirements

- Geo-targeted pages for Houston and surrounding cities within ~40-mile radius
- Each service line gets its own dedicated page (not just anchor links)
- Semantic HTML, structured data (schema.org), meta tags managed per-page
- Mobile-first — always verify responsive behavior before considering a component done
- Core Web Vitals performance targets

## Key Constraints

- **Mobile-first is non-negotiable** — test all components at mobile viewport before desktop
- WhatsApp floating button must be present on all pages (phone number from qamarconstruction.com)
- Phase 1 output is a demo for client approval — prioritize visual completeness over full functionality
