import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import cloudflare from "@astrojs/cloudflare";

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.PUBLIC_SANITY_DATASET || "production";

// https://astro.build/config
export default defineConfig({
  site: "https://casasantalibera.example",

  // Server output is required because Sanity Studio runs as an SPA route
  // (`/studio/*`) that the @sanity/astro integration sets to non-prerendered.
  // All our content pages explicitly opt back into prerendering with
  // `export const prerender = true`, so they remain pure static HTML on
  // Cloudflare Pages — only `/studio/*` becomes a Cloudflare Function.
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
  }),

  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: "2024-10-01",
      studioBasePath: "/studio",
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
