import { defineType, defineField } from "sanity";

export const canelliPage = defineType({
  name: "canelliPage",
  title: "Canelli-side",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "intro", title: "Intro" },
    { name: "santaLibera", title: "Santa Libera" },
    { name: "experiences", title: "Hvad du kan opleve" },
    { name: "map", title: "Kort" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero — lille tekst",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.max(50),
      initialValue: "Området",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero — titel",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required().max(70),
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
      name: "introEyebrow",
      title: "Intro — lille tekst",
      type: "string",
      group: "intro",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "introHeading",
      title: "Intro — overskrift",
      type: "string",
      group: "intro",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "introBody",
      title: "Intro — tekst",
      type: "limitedRichText",
      group: "intro",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "santaLiberaEyebrow",
      title: "Santa Libera — lille tekst",
      type: "string",
      group: "santaLibera",
      validation: (Rule) => Rule.max(40),
      initialValue: "Santa Libera",
    }),
    defineField({
      name: "santaLiberaHeading",
      title: "Santa Libera — overskrift",
      type: "string",
      group: "santaLibera",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "santaLiberaBody",
      title: "Santa Libera — tekst",
      type: "limitedRichText",
      group: "santaLibera",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "santaLiberaImage",
      title: "Santa Libera — billede",
      type: "image",
      group: "santaLibera",
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
      name: "experiencesEyebrow",
      title: "Oplevelser — lille tekst",
      type: "string",
      group: "experiences",
      validation: (Rule) => Rule.max(40),
      initialValue: "Oplev Piemonte",
    }),
    defineField({
      name: "experiencesHeading",
      title: "Oplevelser — overskrift",
      type: "string",
      group: "experiences",
      validation: (Rule) => Rule.required().max(80),
      initialValue: "Hvad du kan opleve",
    }),
    defineField({
      name: "experiences",
      title: "Oplevelser (kort)",
      description:
        "Vises i et 2-kolonners grid. Min 2, maks 6 elementer for at bevare layoutet.",
      type: "array",
      group: "experiences",
      validation: (Rule) => Rule.required().min(2).max(6),
      of: [
        {
          type: "object",
          name: "experience",
          fields: [
            {
              name: "eyebrow",
              type: "string",
              title: "Lille tekst",
              validation: (Rule) => Rule.required().max(30),
            },
            {
              name: "title",
              type: "string",
              title: "Titel",
              validation: (Rule) => Rule.required().max(60),
            },
            {
              name: "body",
              type: "text",
              rows: 4,
              title: "Tekst",
              validation: (Rule) => Rule.required().max(300),
            },
          ],
          preview: {
            select: { title: "title", subtitle: "eyebrow" },
          },
        },
      ],
    }),

    defineField({
      name: "mapQuery",
      title: "Kort — søgeforespørgsel",
      description:
        "Den tekst Google Maps skal søge efter. Fx: 'Santa Libera, Canelli, Asti, Italy'.",
      type: "string",
      group: "map",
      validation: (Rule) => Rule.required().max(120),
      initialValue: "Santa Libera, Canelli, Asti, Italy",
    }),

    defineField({
      name: "ctaEyebrow",
      title: "CTA — lille tekst",
      type: "string",
      group: "cta",
      validation: (Rule) => Rule.max(40),
      initialValue: "Book dit ophold",
    }),
    defineField({
      name: "ctaHeading",
      title: "CTA — overskrift",
      type: "string",
      group: "cta",
      validation: (Rule) => Rule.required().max(80),
      initialValue: "Lyder Piemonte som dit næste eventyr?",
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
    prepare: ({ title }) => ({ title: title || "Canelli-side" }),
  },
});
