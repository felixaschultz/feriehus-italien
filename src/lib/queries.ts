import { fetchOptional } from "./sanity";
import type { PortableTextBlock } from "@portabletext/to-html";

export interface SanityImage {
  asset: { _ref: string };
  alt?: string;
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface HomepageData {
  heroEyebrow?: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroImage: SanityImage;
  heroCtaLabel?: string;

  welcomeEyebrow?: string;
  welcomeHeading: string;
  welcomeBody: PortableTextBlock[];

  aboutEyebrow?: string;
  aboutHeading: string;
  aboutBody: PortableTextBlock[];
  aboutImage: SanityImage;
  features: Array<{ title: string; description: string }>;

  galleryEyebrow?: string;
  galleryHeading: string;
  galleryImages: SanityImage[];

  areaEyebrow?: string;
  areaHeading: string;
  areaBody: PortableTextBlock[];
  areaImage: SanityImage;

  ctaEyebrow?: string;
  ctaHeading: string;
  ctaBody?: string;
  ctaLabel: string;
}

export const homepageQuery = /* groq */ `
  *[_type == "homepage" && _id == "homepage"][0]{
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroImage,
    heroCtaLabel,

    welcomeEyebrow,
    welcomeHeading,
    welcomeBody,

    aboutEyebrow,
    aboutHeading,
    aboutBody,
    aboutImage,
    features,

    galleryEyebrow,
    galleryHeading,
    galleryImages,

    areaEyebrow,
    areaHeading,
    areaBody,
    areaImage,

    ctaEyebrow,
    ctaHeading,
    ctaBody,
    ctaLabel
  }
`;

export const fetchHomepage = () => fetchOptional<HomepageData>(homepageQuery);
