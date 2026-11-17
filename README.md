# Paris Road Haircuts

Single-page, static website for Paris Road Haircuts in Paris, Ontario. Built with Astro and configured for Netlify.

## Run locally

Install Node.js 22.23.5 or newer, then run:

```sh
npm install
npm run dev
```

Create and preview the production build with:

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`. `netlify.toml` sets the build command, publish directory, and Node.js version for Netlify. On Netlify, the production `URL` is used to generate canonical metadata, `robots.txt`, and an XML sitemap.

After deployment, add the live site to Google Search Console and submit `/sitemap-index.xml`. Keep the site's name, phone, and address consistent with its Google Business Profile. Search rankings and indexing timing are determined by Google and cannot be guaranteed.

## Business details and photos

The page uses the business's public phone, address, pricing, and profile links. Hours are not shown as a fixed schedule; visitors are asked to call or message to confirm current availability.

The photos in `public/` are business images supplied by the owner or downloaded from the Paris Road Haircuts Google Business Profile with the owner's permission.
