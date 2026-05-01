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

// ---------------------------------------------------------------------------
// Site settings (footer, contact, address)
// ---------------------------------------------------------------------------

export interface SiteSettingsData {
  houseName: string;
  tagline?: string;
  contactEmail: string;
  contactPhone?: string;
  addressStreet: string;
  addressPostal: string;
  addressCountry: string;
  footerCopyright?: string;
}

export const siteSettingsQuery = /* groq */ `
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    houseName,
    tagline,
    contactEmail,
    contactPhone,
    addressStreet,
    addressPostal,
    addressCountry,
    footerCopyright
  }
`;

export const fetchSiteSettings = () =>
  fetchOptional<SiteSettingsData>(siteSettingsQuery);

// ---------------------------------------------------------------------------
// Canelli page
// ---------------------------------------------------------------------------

export interface CanelliPageData {
  heroEyebrow?: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroImage: SanityImage;

  introEyebrow?: string;
  introHeading: string;
  introBody: PortableTextBlock[];

  santaLiberaEyebrow?: string;
  santaLiberaHeading: string;
  santaLiberaBody: PortableTextBlock[];
  santaLiberaImage: SanityImage;

  experiencesEyebrow?: string;
  experiencesHeading: string;
  experiences: Array<{ eyebrow: string; title: string; body: string }>;

  mapQuery: string;

  ctaEyebrow?: string;
  ctaHeading: string;
  ctaBody?: string;
  ctaLabel: string;
}

export const canelliPageQuery = /* groq */ `
  *[_type == "canelliPage" && _id == "canelliPage"][0]{
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroImage,

    introEyebrow,
    introHeading,
    introBody,

    santaLiberaEyebrow,
    santaLiberaHeading,
    santaLiberaBody,
    santaLiberaImage,

    experiencesEyebrow,
    experiencesHeading,
    experiences,

    mapQuery,

    ctaEyebrow,
    ctaHeading,
    ctaBody,
    ctaLabel
  }
`;

export const fetchCanelliPage = () =>
  fetchOptional<CanelliPageData>(canelliPageQuery);

// ---------------------------------------------------------------------------
// Gallery page
// ---------------------------------------------------------------------------

export interface GalleryPageData {
  heroTitle: string;
  heroSubtitle?: string;
  heroImage: SanityImage;
  outsideImages?: SanityImage[];
  insideImages?: SanityImage[];
  wineRoomImages?: SanityImage[];
  ctaHeading: string;
  ctaBody?: string;
  ctaLabel: string;
}

export const galleryPageQuery = /* groq */ `
  *[_type == "galleryPage" && _id == "galleryPage"][0]{
    heroTitle,
    heroSubtitle,
    heroImage,
    outsideImages,
    insideImages,
    wineRoomImages,
    ctaHeading,
    ctaBody,
    ctaLabel
  }
`;

export const fetchGalleryPage = () =>
  fetchOptional<GalleryPageData>(galleryPageQuery);

// ---------------------------------------------------------------------------
// Contact page
// ---------------------------------------------------------------------------

export interface ContactPageData {
  heroEyebrow?: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroImage: SanityImage;
  formEyebrow?: string;
  formHeading: string;
  mapQuery: string;
}

export const contactPageQuery = /* groq */ `
  *[_type == "contactPage" && _id == "contactPage"][0]{
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroImage,
    formEyebrow,
    formHeading,
    mapQuery
  }
`;

export const fetchContactPage = () =>
  fetchOptional<ContactPageData>(contactPageQuery);

// ---------------------------------------------------------------------------
// FAQ page
// ---------------------------------------------------------------------------

export interface FaqEntryData {
  title: string;
  body: PortableTextBlock[];
  defaultOpen?: boolean;
}

export interface FaqLetterData {
  letter: string;
  entries: FaqEntryData[];
}

export interface FaqPageData {
  introEyebrow?: string;
  introHeading: string;
  introBody?: string;
  letters: FaqLetterData[];
  ctaEyebrow?: string;
  ctaHeading: string;
  ctaBody?: string;
  ctaLabel: string;
}

export const faqPageQuery = /* groq */ `
  *[_type == "faqPage" && _id == "faqPage"][0]{
    introEyebrow,
    introHeading,
    introBody,
    letters[]{
      letter,
      entries[]{
        title,
        body,
        defaultOpen
      }
    },
    ctaEyebrow,
    ctaHeading,
    ctaBody,
    ctaLabel
  }
`;

export const fetchFaqPage = () => fetchOptional<FaqPageData>(faqPageQuery);
