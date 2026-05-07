# Hương Giang Coffee and Motel — Landing Page

A high-performance, mobile-first landing page for **Hương Giang Coffee and Motel** — a guesthouse with a coffee shop in front, located on Đường tỉnh 943, TT. Núi Sập, H. Thoại Sơn, T. An Giang. Built with Next.js (App Router), TypeScript and Tailwind CSS. Frontend-only, no backend required.

Quick links: [Google Maps](https://maps.app.goo.gl/wBJbmpv8JdnfDnYVA) • [Fanpage Facebook](https://www.facebook.com/coffeeandmotelhuonggiang/) • [Messenger](https://m.me/coffeeandmotelhuonggiang)

## Tech stack

- **Next.js 15** (App Router, Server Components by default)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3.4** with a custom coffee/cream color palette
- **next/image** with AVIF/WebP for optimized images

## Features

- Hero with full-bleed banner image, title, description and CTAs (Call, Zalo, Messenger).
- About, Rooms, Coffee Shop, Gallery, and Contact sections.
- Bento-style **Gallery** with click-to-open **Lightbox** (keyboard, swipe-friendly, lazy-loaded client component).
- Sticky **floating buttons** for Messenger, Zalo and Call on every screen size.
- Contact section with Phone, Zalo, **Messenger**, **Facebook fanpage**, email, address (links to Google Maps) and an embedded map.
- **Smooth scroll** between anchor sections.
- **Google Maps** embed in the contact section.
- **SEO**: metadata, Open Graph, Twitter card, JSON-LD `LodgingBusiness`, semantic HTML, lang="vi".
- **Performance**: Server Components by default, `next/image` everywhere, Lightbox is dynamically imported, console.log removed in production builds.
- Centralized site config in `data/site.ts` (phone, Zalo, address, hours…).

## Getting started

```bash
# install
npm install

# dev
npm run dev

# build for production
npm run build && npm run start
```

The dev server starts at http://localhost:3000.

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Landing page composition + JSON-LD
  globals.css         # Tailwind layers + components (.btn, .container-x, …)
components/
  Header.tsx          # Sticky navigation with anchor links
  Hero.tsx            # Banner + headline + CTAs
  About.tsx           # Intro about motel + cafe
  Rooms.tsx           # Room cards with price, amenities, CTA
  CoffeeShop.tsx      # Coffee shop highlights
  Gallery.tsx         # Bento grid (server component)
  Lightbox.tsx        # Client-only modal for the gallery
  Contact.tsx         # Phone, Zalo, email, address, map embed
  Footer.tsx
  FloatingButtons.tsx # Sticky call + Zalo CTAs
  SectionHeading.tsx
  icons.tsx           # Inline SVG icons (no external library)
data/
  site.ts             # Phone, Zalo, address, hours, OG image
  rooms.ts            # Room mock data + VND formatter
  gallery.ts          # Image manifest
lib/
  utils.ts            # cn() helper
```

## Customizing

- Replace phone & address in `data/site.ts`.
- Replace mock images in `data/rooms.ts` and `data/gallery.ts` with your own (drop them in `public/` and update the paths).
- Update the Google Maps embed `mapsEmbed` in `data/site.ts` (Google Maps → Share → Embed a map).
- Tweak the coffee color palette in `tailwind.config.ts`.

## Performance notes

- All sections are **Server Components**; only `Lightbox` is a client component, lazy-loaded via `next/dynamic`.
- The hero image uses `priority` to pre-load the LCP element. All other images use `loading="lazy"`.
- Images are served as AVIF/WebP through `next/image` with appropriate `sizes` for each layout.
- No external icon libraries — icons are inline SVG, tree-shakable.

## License

MIT
