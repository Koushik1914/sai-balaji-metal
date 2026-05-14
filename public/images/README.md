# Site images

- **`hero/`** — Full-width hero background. Replace `hero-industrial.svg` with a real **WebP** photo when available; update `SITE.heroBackgroundImage` in `lib/constants.ts`.
- **`gallery/`** — Masonry tiles. Replace SVG placeholders with **WebP** (recommended 1200px wide) and update paths in `GALLERY_ITEMS` in `lib/constants.ts`.
- **`logo/`** — Optional wordmark or monogram for navbar/footer.

`next/image` uses `unoptimized` for SVG assets. For production photos, use `.webp`, set `unoptimized={false}` (default), and tune `sizes` as needed.
