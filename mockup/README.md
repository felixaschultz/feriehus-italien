# Casa Santa Libera — Mockup (Phase 1)

Static HTML/CSS mockup of the planned holiday-house website. **No backend, no CMS yet** — this exists purely so you can approve the visual design before we build the real Astro + Sanity site.

## How to view

Just open `mockup/index.html` in any modern browser (Chrome, Safari, Firefox, Edge). All five pages link together with normal `<a>` tags, so you can click around.

If you'd rather serve it locally (recommended on macOS so the browser doesn't complain about local files):

```bash
cd mockup
python3 -m http.server 8080
```

Then visit <http://localhost:8080> in your browser.

## What's in here

```
mockup/
  index.html      Home — hero, welcome, "Om boligen", gallery teaser, area teaser, CTA
  canelli.html    The town and area — what to do, map
  galleri.html    Gallery with three sections: Udenfor, Indenfor, Vinrum
  kontakt.html    Contact form + address + map
  faq.html        A–Z guest handbook with collapsible entries and sticky letter nav
  styles.css      All shared styles + design tokens (colours, fonts, spacing)
  scripts.js      Tiny script for the sticky header + mobile menu + active nav state
```

## Design language

- **Palette:** cream `#F4EFE6`, terracotta accent `#B5651D`, deep olive `#3E4A2E`, charcoal text `#2D2A26`.
- **Typography:** Cormorant Garamond (headings, italian-feeling serif) + Inter (body).
- **Mood:** calm, warm, photo-led, generous whitespace — inspired by `casacalma-piemonte.com` but with a unique identity (the wine room is featured prominently).
- **Header behaviour:** transparent over the hero photo, turns into a solid cream bar with charcoal text once you scroll.
- **Mobile-first:** everything reflows to a single column under ~860px.

## Important notes about the placeholders

- **Photos** are random placeholders from `picsum.photos`. They will look different every time you load — that's expected. Real photos of the house will replace them in Phase 4.
- **House name** "Casa Santa Libera" is a working title (named after the area). Easy to swap to anything you prefer.
- **Email and phone** in the contact page are placeholders.
- **Contact form** doesn't actually send anything in the mockup — it just shows an alert. The real form goes live in Phase 5 (Web3Forms).
- **FAQ entries** are seeded with examples from the reference site, adapted to your house. The owner will be able to add/edit/remove these freely once Sanity is wired up.

## What to feedback on

When reviewing, focus on:

1. **Overall mood / look** — does it feel like the right brand for the house?
2. **Colour palette** — happy with cream/terracotta/olive, or want something different (more blue/sea, more neutral, more rustic, etc.)?
3. **Typography** — Cormorant Garamond is elegant and italian-feeling; Playfair, Lora, or Libre Caslon are alternatives if you'd like.
4. **Page structure** — anything missing or unnecessary?
5. **House name** — should it be something else?
6. **Wording** — anything you'd phrase differently?

Don't worry about the photos — those are just placeholders.

## Next phases (after your approval)

2. **Astro skeleton** — turn this into a proper Astro project with reusable components.
3. **Sanity Studio** — set up the editor where you'll log in to change text and images.
4. **Wire content** — connect Sanity to the Astro pages.
5. **Contact form** — Web3Forms integration.
6. **Deploy** — push to Cloudflare Pages, attach a custom domain, and onboard the owner.
