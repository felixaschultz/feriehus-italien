import { defineType, defineField } from "sanity";

const imageArray = (title: string, description: string) => ({
  type: "array" as const,
  title,
  description,
  validation: (Rule: any) => Rule.min(0).max(40),
  of: [
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternativ tekst",
          validation: (Rule: any) => Rule.required().max(120),
        },
      ],
    },
  ],
});

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Galleri-side",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "outside", title: "Udenfor" },
    { name: "inside", title: "Indenfor" },
    { name: "wineRoom", title: "Vinrum" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero — titel",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required().max(70),
      initialValue: "Et hus i billeder",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero — undertekst",
      type: "text",
      rows: 3,
      group: "hero",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "heroImage",
      title: "Hero — billede",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternativ tekst",
          validation: (Rule) => Rule.required().max(120),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "outsideImages",
      title: "Udenfor — billeder",
      description: "Billeder af terrasse, have, facade, udsigt, mv. Maks 40.",
      group: "outside",
      ...imageArray("Udenfor", "Maks 40 billeder"),
    }),
    defineField({
      name: "insideImages",
      title: "Indenfor — billeder",
      description: "Billeder af stuer, køkken, soveværelser, badeværelse, mv. Maks 40.",
      group: "inside",
      ...imageArray("Indenfor", "Maks 40 billeder"),
    }),
    defineField({
      name: "wineRoomImages",
      title: "Vinrum — billeder",
      description: "Husets unikke vinrum. Maks 40.",
      group: "wineRoom",
      ...imageArray("Vinrum", "Maks 40 billeder"),
    }),
    defineField({
      name: "ctaHeading",
      title: "CTA — overskrift",
      type: "string",
      group: "cta",
      validation: (Rule) => Rule.required().max(80),
      initialValue: "Klar til en ferie i Piemonte?",
    }),
    defineField({
      name: "ctaBody",
      title: "CTA — kort tekst",
      type: "text",
      rows: 2,
      group: "cta",
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA — knaptekst",
      type: "string",
      group: "cta",
      validation: (Rule) => Rule.required().max(25),
      initialValue: "Kontakt os",
    }),
  ],
  preview: {
    select: { title: "heroTitle" },
    prepare: ({ title }) => ({ title: title || "Galleri-side" }),
  },
});
