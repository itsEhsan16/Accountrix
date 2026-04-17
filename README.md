# Accountrix Solutions — Website

> **Smart Accounting, Simple Solutions.** — Professional accounting & financial services firm based in Rajura, Maharashtra, India.

The official marketing and information website for **Accountrix Solutions**, a full-service accounting practice established in 2025. Built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

---

## Table of Contents

- [Overview](#overview)
- [Pages & Features](#pages--features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Overview

Accountrix Solutions provides clarity, compliance, and confidence for growing businesses. This website serves as the firm's primary digital presence, showcasing services, publishing financial insights, and providing a direct channel for client enquiries.

**Key highlights:**
- Fully animated UI powered by **Framer Motion**
- Responsive design built with **Tailwind CSS v4**
- Contact form integrated with **EmailJS** (no backend required)
- SEO-optimised with per-page `metadata` exports
- Auto-hiding sticky header with scroll-direction detection
- Dropdown service navigation with anchor-link deep-linking

---

## Pages & Features

| Route | Description |
|---|---|
| `/` | Hero section, value proposition, services overview, testimonials, news teaser, and contact form |
| `/about` | Firm story, core values (Confidentiality, Transparency, Compliance, Growth), and team section |
| `/services` | Detailed breakdown of all six service lines with anchor IDs for deep linking |
| `/news` | Filterable insights/articles hub with featured article and category filters |
| `/contact` | Standalone contact page with office hours, map, and social links |

### Services Offered

- **Accounting & Bookkeeping** — Day-to-day ledger management and reconciliation
- **GST Filings & Compliances** — GSTR-1, GSTR-3B, GSTR-9, and full GST advisory
- **Financial Reporting & MIS** — Monthly management reports, P&L, and balance sheets
- **Payroll Management** — Salary processing, PF, ESIC, and compliance
- **Direct & Indirect Taxes** — ITR filing, TDS management, advance tax planning
- **Business Advisory** — Virtual CFO, strategic planning, and investor-ready reporting

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Email | [EmailJS Browser](https://www.emailjs.com/) |
| Utilities | `clsx`, `tailwind-merge` |
| Fonts | Crimson Pro (serif headings), Source Sans 3 (body) via `next/font` |
| Linting | ESLint 9 with `eslint-config-next` |

---

## Project Structure

```
accountrix/
+-- public/                    # Static assets (logo, hero image, etc.)
+-- src/
¦   +-- app/
¦   ¦   +-- layout.tsx         # Root layout — fonts, metadata, Header/Footer
¦   ¦   +-- page.tsx           # Home page
¦   ¦   +-- globals.css        # Global styles & Tailwind directives
¦   ¦   +-- about/
¦   ¦   ¦   +-- page.tsx       # About Us page
¦   ¦   +-- contact/
¦   ¦   ¦   +-- page.tsx       # Contact page
¦   ¦   +-- news/
¦   ¦   ¦   +-- layout.tsx     # News section layout
¦   ¦   ¦   +-- page.tsx       # Insights & articles hub
¦   ¦   +-- services/
¦   ¦       +-- page.tsx       # Services page
¦   +-- components/
¦   ¦   +-- Header.tsx         # Sticky auto-hiding nav with services dropdown
¦   ¦   +-- Footer.tsx         # Footer with links, social icons, contact info
¦   ¦   +-- ServicesContent.tsx # Services page content (client component)
¦   +-- data/
¦       +-- contact.ts         # Contact info, office hours, social links
¦       +-- insights.ts        # Articles data and category definitions
+-- next.config.ts             # Next.js config (remote image domains)
+-- postcss.config.mjs         # PostCSS config for Tailwind
+-- tsconfig.json
+-- package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.18.0
- **npm** >= 9 (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/itsEhsan16/Accountrix.git
cd Accountrix

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

---

## Environment Variables

This project uses **EmailJS** for the contact form. Create a `.env.local` file in the project root with the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

You can obtain these values from your [EmailJS dashboard](https://dashboard.emailjs.com/). Without them, the contact form will not send emails but the rest of the site will work normally.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server on `http://localhost:3000` |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## Deployment

The recommended deployment platform is **Vercel** — zero-config, optimised for Next.js.

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add the EmailJS environment variables in the Vercel project settings.
4. Deploy. Vercel will automatically rebuild on every push to `main`.

Alternatively, you can deploy to any platform that supports Node.js by running `npm run build` and then `npm run start`.

---

## Contact

**Accountrix Solutions**
Gadchandur Road, Rajura, Chandrapur, Maharashtra – 442905, India

- **Email:** info@accountrixsolutions.in
- **Phone:** +91 7276535406
- **LinkedIn:** [linkedin.com/company/accountrix-solutions](https://linkedin.com/company/accountrix-solutions)
- **Office Hours:** Mon–Fri 9 AM–6 PM | Sat 10 AM–2 PM | Sun Closed

---

*Built with love by [Webcros](https://webcros.in)*
