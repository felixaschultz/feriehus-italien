import type { ImageMetadata } from "astro";

import feriehusOutdoor from "../assets/feriehus-outdoor.jpg";
import feriehusOutdoor2 from "../assets/feriehus-outdoor2.jpg";
import img2298 from "../assets/IMG_2298.jpeg";
import img2304 from "../assets/IMG_2304.jpeg";
import image004 from "../assets/image004.jpg";
import image005 from "../assets/image005.jpg";

import bathroom003 from "../assets/bathroom/image003.jpg";
import bathroom004 from "../assets/bathroom/image004.jpg";
import feriehusBath from "../assets/feriehus-bath.jpg";

import house003 from "../assets/summerhouse/image003.jpg";
import house004 from "../assets/summerhouse/image004.jpg";
import house005 from "../assets/summerhouse/image005.jpg";
import house006 from "../assets/summerhouse/image006.jpg";
import house007 from "../assets/summerhouse/image007.jpg";
import house008 from "../assets/summerhouse/image008.jpg";
import house009 from "../assets/summerhouse/image009.jpg";
import house010 from "../assets/summerhouse/image010.jpg";
import house011 from "../assets/summerhouse/image011.jpg";

export interface LocalGalleryImage {
  src: string;
  alt: string;
}

function localImage(image: ImageMetadata, alt: string): LocalGalleryImage {
  return { src: image.src, alt };
}

export const galleryHeroImage = feriehusOutdoor;
export const galleryHeroAlt = "Casa Santa Libera set udefra";

export const outsideImages: LocalGalleryImage[] = [
  localImage(feriehusOutdoor, "Feriehuset og omgivelserne"),
  localImage(feriehusOutdoor2, "Udearealer omkring huset"),
  localImage(img2298, "Udsigt fra feriehuset"),
  localImage(img2304, "Terrasse og have"),
  localImage(image004, "Sommerhuset set udefra"),
  localImage(image005, "Omgivelser omkring Santa Libera"),
];

export const insideImages: LocalGalleryImage[] = [
  localImage(house003, "Stue og opholdsrum"),
  localImage(house004, "Indendørs i feriehuset"),
  localImage(house005, "Køkken og spiseområde"),
  localImage(house006, "Detalje fra feriehuset"),
  localImage(house007, "Hyggelige opholdsrum"),
  localImage(house008, "Indendørs atmosfære"),
  localImage(house009, "Feriehuset indenfor"),
  localImage(house010, "Soveværelse eller ophold"),
  localImage(house011, "Indendørs i Casa Santa Libera"),
];

export const bathroomImages: LocalGalleryImage[] = [
  localImage(feriehusBath, "Badeværelse"),
  localImage(bathroom003, "Badeværelse med moderne faciliteter"),
  localImage(bathroom004, "Badeværelse i feriehuset"),
];

/** First four images for the homepage gallery teaser. */
export const homepageGalleryPreview = [
  outsideImages[0],
  insideImages[0],
  insideImages[4],
  bathroomImages[0],
];
