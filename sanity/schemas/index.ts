import { siteSettings } from "./siteSettings";
import { homepage } from "./homepage";
import { canelliPage } from "./canelliPage";
import { galleryPage } from "./galleryPage";
import { contactPage } from "./contactPage";
import { faqPage, faqLetter, faqEntry } from "./faqPage";
import { limitedRichText } from "./blocks/limitedRichText";

export const schemaTypes = [
  // Reusable blocks
  limitedRichText,
  faqEntry,
  faqLetter,
  // Singleton documents (one of each)
  siteSettings,
  homepage,
  canelliPage,
  galleryPage,
  contactPage,
  faqPage,
];

export const singletonTypes = new Set([
  "siteSettings",
  "homepage",
  "canelliPage",
  "galleryPage",
  "contactPage",
  "faqPage",
]);
