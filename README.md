# Casa Santa Libera

Holiday house website for a villa in Santa Libera (Canelli, Piemonte, Italy).

Built with **Astro 5** + **Tailwind CSS 4** + **Sanity Studio** (embedded at `/studio`), deployed to **Cloudflare Pages**. Page navigation uses Astro's View Transitions for an SPA-like feel without sacrificing SEO or static hosting.

## Requirements

- **Node.js 20.12+** (Astro 5's bundled Vite 7 needs `util.styleText`)
- npm 10+
- A free Sanity account (sanity.io) — see "First-time Sanity setup" below

A `.nvmrc` is committed: just run `nvm use` in the project root if you have nvm.

## Quick start

```bash
nvm use
cp .env.example .env.local       # then fill in PUBLIC_SANITY_PROJECT_ID
npm install
npm run dev                       # http://localhost:4321
```

To build for production:

```bash
npm run build         # output in dist/
npm run preview       # serve dist/ locally
```

## First-time Sanity setup (do this once)

1. **Create a free Sanity account** at <https://www.sanity.io/login>. Sign in with Google, GitHub, or email.
2. **Create a new project** at <https://www.sanity.io/manage>. Click "Create new project" — name it "Casa Santa Libera" and accept defaults (`production` dataset, public read access).
3. **Copy the Project ID** (a short string like `abcdef12`) shown on the project dashboard.
4. **Paste it into `.env.local`**:
    ```env
    PUBLIC_SANITY_PROJECT_ID=abcdef12
    PUBLIC_SANITY_DATASET=production
    ```
5. **Restart `npm run dev`** and open <http://localhost:4321/studio>. Log in with the same Sanity account, and you'll see the editor with all the page forms.

That's it. Edit a field, hit "Publish", and refresh the homepage to see the change.

## Inviting the owner (so they can edit content)

Once Sanity is set up:

1. Go to <https://www.sanity.io/manage> → your project → **Members** → "Invite member".
2. Enter the owner's email. Pick role: **Editor** (can edit and publish, can't change project settings).
3. The owner clicks the email link, creates a Sanity password, and goes to `casasantalibera.com/studio`. They'll see exactly the same editor you do — no developer tools, no code, just forms.

## What the owner can and can't do

By design, the owner can ONLY edit content — they can never break the layout. This is enforced at the schema level:

| Field type | Limit |
|---|---|
| Text fields | Hard character limits (e.g. hero title max 70 chars) |
| Rich text | Only paragraphs, **bold**, *italic*, links — no headings, no embeds, no lists |
| Images | Required alt text + hotspot crop point; the layout chooses the actual aspect ratio |
| Feature grid | Min 4, max 10 items — keeps the 4-column grid balanced |
| Gallery teaser | Exactly 4 images |
| Galleries | Max 40 images per section (Ude / Inde / Vinrum) |

Singletons are also enforced: the owner can't accidentally create a second "Forside" — they only see one of each page in the sidebar, with no "Create new" button for singletons.

## Project structure

```
sanity/                      # Sanity Studio code
├── schemas/                 # Content models (one per page)
│   ├── siteSettings.ts
│   ├── homepage.ts
│   ├── canelliPage.ts
│   ├── galleryPage.ts
│   ├── contactPage.ts
│   ├── faqPage.ts
│   └── blocks/
│       └── limitedRichText.ts   # Locked-down rich text (bold/italic/links only)
└── structure.ts             # Custom sidebar (singletons only)

sanity.config.ts             # Studio config (mounted at /studio)

src/
├── layouts/BaseLayout.astro          # HTML shell, fonts, View Transitions, header, footer
├── components/                       # Reusable UI components
│   ├── SiteHeader.astro              # Sticky transparent → solid on scroll
│   ├── SiteFooter.astro
│   ├── Hero.astro
│   ├── Section.astro
│   ├── SectionHeader.astro
│   ├── FeatureGrid.astro
│   ├── GalleryGrid.astro
│   ├── Cards.astro
│   ├── AddressBlock.astro
│   ├── PortableText.astro            # Renders rich text from Sanity
│   └── CTA.astro
├── pages/
│   ├── index.astro                   # Home — wired to Sanity ✓
│   ├── canelli.astro                 # The town & area
│   ├── galleri.astro                 # Gallery (Ude / Inde / Vinrum)
│   ├── kontakt.astro                 # Contact form + map
│   └── faq.astro                     # A–Z handbook
├── data/faq.ts                       # Hardcoded FAQ (will move to Sanity in Phase 4 wiring)
├── lib/
│   ├── sanity.ts                     # Sanity client + image URL builder
│   └── queries.ts                    # GROQ queries + TypeScript types
├── styles/global.css                 # Tailwind 4 + design tokens
└── env.d.ts
```

## How content flows from editor to site

```
Owner browser ──► Studio at /studio ──► Sanity Cloud
                                              │
                                       (publish webhook, future)
                                              │
                                              ▼
                                Cloudflare Pages rebuild ──► visitors see new content
```

In dev mode, just refreshing the page (`Cmd+R`) shows changes immediately — the Astro page fetches fresh data from Sanity every render. In production we'll set up the rebuild webhook in Phase 6.

## Hosting decisions

- **Output:** `output: "server"` with `prerender = true` on every content page → all 5 visitor-facing pages are pre-rendered to pure static HTML. Only `/studio/*` runs as a Cloudflare Function (called only when the owner is editing — basically zero traffic).
- **Adapter:** `@astrojs/cloudflare` — deploys cleanly to Cloudflare Pages.
- **Images:** served from Sanity's image CDN with on-the-fly resizing/cropping/WebP — no Cloudflare image service needed.

## Design tokens

Defined in `src/styles/global.css` via Tailwind 4's `@theme` directive:

| Token | Value |
|---|---|
| `--color-cream` | `#F4EFE6` |
| `--color-terracotta` | `#B5651D` |
| `--color-olive` | `#3E4A2E` |
| `--color-charcoal` | `#2D2A26` |
| `--font-serif` | Cormorant Garamond |
| `--font-sans` | Inter |

## Roadmap

- [x] **Phase 1** — Static HTML mockup (`mockup/`, kept for reference).
- [x] **Phase 2** — Astro skeleton with reusable components and View Transitions.
- [x] **Phase 3** — Sanity Studio at `/studio` with locked-field schemas (singletons, validation, hotspot crop).
- [x] **Phase 4** — Wire all pages (canelli, galleri, kontakt, faq) to Sanity content with safe fallbacks.
- [ ] **Phase 5** — Contact form via Web3Forms (free, no backend).
- [ ] **Phase 6** — Deploy to Cloudflare Pages, attach custom domain, set up Sanity → Cloudflare deploy hook, write 1-page owner guide (PDF).

## Deploying to Cloudflare Pages

The project is configured for Cloudflare Pages via `@astrojs/cloudflare` and a committed `wrangler.toml`. Two ways to set up env vars on the production deploy:

### Via dashboard (required for runtime)

1. Push the repo to GitHub, then in https://dash.cloudflare.com → **Workers & Pages → Create → Connect to Git**, pick the repo.
2. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
   - Node version: `20` (set in **Settings → Environment variables → Production** as `NODE_VERSION = 20`)
3. **Settings → Environment variables**, add to **both Production and Preview**:

   | Variable | Value | Type |
   |---|---|---|
   | `PUBLIC_SANITY_PROJECT_ID` | `8chs5okk` | Plaintext |
   | `PUBLIC_SANITY_DATASET` | `production` | Plaintext |
   | `NODE_VERSION` | `20` | Plaintext |

4. **Re-deploy** — env-var changes don't affect existing deployments.

### Via `wrangler.toml` (already committed)

The `wrangler.toml` at the repo root declares the `PUBLIC_*` vars under `[vars]`, so they're applied to all deploys. **Do not use `[env.preview]` blocks** — Cloudflare Pages doesn't support `[env.X]` (only Workers does). Per-environment overrides for Preview must be set in the dashboard. The dashboard method above is also still required for `NODE_VERSION` (Cloudflare reads that one from the dashboard, not `wrangler.toml`).

### CORS — the one-time Sanity click

After your first production deploy succeeds, open https://www.sanity.io/manage/personal/project/8chs5okk/api → **CORS origins → Add CORS origin** with your Cloudflare URL (and later the custom domain). Tick **Allow credentials**. Without this, `/studio` on production will fail to log in.

## Notes

- Astro telemetry: `npx astro telemetry disable` to opt out globally.
- The `mockup/` folder is the original static HTML mockup. Kept until launch as a visual reference; will be deleted before deploy.
- Sandbox-restricted environments may need `ASTRO_TELEMETRY_DISABLED=1` to build.
