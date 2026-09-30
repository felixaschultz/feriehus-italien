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

import mainHouse from "../assets/summerhouse/main-house.png";

import house003 from "../assets/summerhouse/image003.jpg";
import house004 from "../assets/summerhouse/image004.jpg";
import house005 from "../assets/summerhouse/image005.jpg";
import house006 from "../assets/summerhouse/image006.jpg";
import house007 from "../assets/summerhouse/image007.jpg";
import house008 from "../assets/summerhouse/image008.jpg";
import house009 from "../assets/summerhouse/image009.jpg";
import house010 from "../assets/summerhouse/image010.jpg";
import house011 from "../assets/summerhouse/image011.jpg";

import backview from "../assets/summerhouse/backview.jpeg";
import balcon from "../assets/summerhouse/balcon.jpeg";
import summerhouse2 from "../assets/summerhouse/summerhouse-2.jpeg";
import viewoverWineyard from "../assets/summerhouse/viewover-wineyard.jpeg";
import outsideView from "../assets/summerhouse/outside-view.jpg";
import pool from "../assets/summerhouse/pool.jpg";
import wineyard from "../assets/summerhouse/wineyard.jpg";
import wineyard2 from "../assets/summerhouse/wineyard-2.jpg";

import bedroom from "../assets/summerhouse/bedroom.jpeg";
import bedroom2 from "../assets/summerhouse/bedroom2.jpg";
import indoorsImg from "../assets/summerhouse/indoors-img.jpg";
import stairs from "../assets/summerhouse/stairs.jpg";

import bathroom1 from "../assets/summerhouse/bathroom-1.jpeg";
import bathroom2 from "../assets/summerhouse/bathroom-2.jpeg";
import bathroom3 from "../assets/summerhouse/bathroom-3.jpeg";
import bathroom4 from "../assets/summerhouse/bathroom-4.jpeg";
import bathroomRustic from "../assets/summerhouse/bathroom.jpeg";
import shower from "../assets/summerhouse/shower.jpeg";

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
  localImage(mainHouse, "Hovedhuset set fra gaden"),
  localImage(feriehusOutdoor, "Feriehuset og omgivelserne"),
  localImage(feriehusOutdoor2, "Udearealer omkring huset"),
  localImage(img2298, "Udsigt fra feriehuset"),
  localImage(img2304, "Terrasse og have"),
  localImage(image004, "Sommerhuset set udefra"),
  localImage(image005, "Omgivelser omkring Santa Libera"),
  localImage(backview, "Huset set bagfra"),
  localImage(summerhouse2, "Huset set fra vinmarkerne"),
  localImage(balcon, "Morgenmad på altanen med udsigt over vinmarkerne"),
  localImage(viewoverWineyard, "Terrassen med udsigt over vinmarkerne"),
  localImage(outsideView, "Vinmarker tæt på huset"),
  localImage(pool, "Afkøling i poolen en varm sommerdag"),
  localImage(wineyard, "Vinranker med druer"),
  localImage(wineyard2, "Modne druer på vinstokken"),
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
  localImage(bedroom, "Dobbeltværelse"),
  localImage(bedroom2, "Soveværelse med to enkeltsenge"),
  localImage(indoorsImg, "Klædeskab og kommode på soveværelset"),
  localImage(stairs, "Trappen op til første sal"),
];

export const bathroomImages: LocalGalleryImage[] = [
  localImage(feriehusBath, "Badeværelse"),
  localImage(bathroom003, "Badeværelse med moderne faciliteter"),
  localImage(bathroom004, "Badeværelse i feriehuset"),
  localImage(bathroom1, "Badeværelse med håndklædestige"),
  localImage(bathroom2, "Badeværelse med indbygget bruser"),
  localImage(bathroom3, "Badeværelse med antikt vaskeskab"),
  localImage(bathroom4, "Badeværelse med håndklædestige og vaskeskab"),
  localImage(bathroomRustic, "Rustikt badeværelse med træmøbler"),
  localImage(shower, "Badeværelse med brusekabine"),
];

/** First four images for the homepage gallery teaser. */
export const homepageGalleryPreview = [
  outsideImages[0],
  insideImages[0],
  insideImages[4],
  bathroomImages[0],
];
