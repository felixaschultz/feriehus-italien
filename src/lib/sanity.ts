import { sanityClient } from "sanity:client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * The Sanity client is provided by the @sanity/astro integration via the
 * `sanity:client` virtual module. It uses the projectId/dataset configured
 * in astro.config.mjs.
 */
export { sanityClient };

/**
 * Image URL builder. Use this to generate optimised image URLs from Sanity
 * image references. Examples:
 *
 *   urlFor(image).width(1200).height(800).fit("crop").url()
 *   urlFor(image).width(800).auto("format").url()
 *
 * Sanity automatically serves WebP/AVIF when the browser supports it,
 * preserves the hotspot crop, and serves from a fast CDN — so we don't need
 * a separate image service on Cloudflare.
 */
const builder = createImageUrlBuilder(sanityClient);
export const urlFor = (source: SanityImageSource) => builder.image(source);

/**
 * Safe fetch: returns null if the document doesn't exist or projectId is the
 * placeholder. Pages should always handle the null case with a fallback so
 * the build doesn't crash before the owner has populated content.
 */
export async function fetchOptional<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  const projectId =
    import.meta.env.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID;
  if (!projectId || projectId === "placeholder") {
    return null;
  }
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (err) {
    console.warn("[sanity] fetch failed:", err);
    return null;
  }
}
