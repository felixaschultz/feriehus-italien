import { defineType, defineField } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Forside",
  type: "document",
  groups: [
    { name: "hero", title: "Hero (top af siden)", default: true },
    { name: "welcome", title: "Velkomst" },
    { name: "about", title: "Om boligen" },
    { name: "gallery", title: "Galleri-teaser" },
    { name: "area", title: "Om området" },
    { name: "cta", title: "Call to action" },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: "heroEyebrow",
      title: "Hero — lille tekst over titel",
      description: "Fx 'Canelli · Piemonte · Italien'. Maks 50 tegn.",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero — titel",
      description: "Den store overskrift på forsiden. Maks 70 tegn.",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero — undertekst",
      description: "Kort beskrivelse under titlen. Maks 200 tegn.",
      type: "text",
      rows: 3,
      group: "hero",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "heroImage",
      title: "Hero — baggrundsbillede",
      description:
        "Stort billede der fylder skærmen. Brug et liggende foto i god opløsning. Justér 'hotspot' så det vigtigste forbliver synligt på alle skærmstørrelser.",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternativ tekst (for skærmlæsere)",
          type: "string",
          validation: (Rule) => Rule.required().max(120),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroCtaLabel",
      title: "Hero — knaptekst",
      description: 'Fx "Kontakt os". Maks 25 tegn.',
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.max(25),
      initialValue: "Kontakt os",
    }),

    // ── Welcome ───────────────────────────────────────────────────────────
    defineField({
      name: "welcomeEyebrow",
      title: "Velkomst — lille tekst",
      type: "string",
      group: "welcome",
      validation: (Rule) => Rule.max(40),
      initialValue: "Velkommen",
    }),
    defineField({
      name: "welcomeHeading",
      title: "Velkomst — overskrift",
      type: "string",
      group: "welcome",
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: "welcomeBody",
      title: "Velkomst — tekst",
      description:
        "Den brødtekst der hilser gæster velkommen. Tilladte formateringer: fed, kursiv og links.",
      type: "limitedRichText",
      group: "welcome",
      validation: (Rule) => Rule.required(),
    }),

    // ── About ─────────────────────────────────────────────────────────────
    defineField({
      name: "aboutEyebrow",
      title: "Om boligen — lille tekst",
      type: "string",
      group: "about",
      validation: (Rule) => Rule.max(40),
      initialValue: "Om boligen",
    }),
    defineField({
      name: "aboutHeading",
      title: "Om boligen — overskrift",
      type: "string",
      group: "about",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "aboutBody",
      title: "Om boligen — tekst",
      type: "limitedRichText",
      group: "about",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutImage",
      title: "Om boligen — billede",
      description: "Stående billede (vises ved siden af teksten).",
      type: "image",
      group: "about",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternativ tekst",
          type: "string",
          validation: (Rule) => Rule.required().max(120),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Egenskaber (8 felter i et grid)",
      description:
        "Listen vises i et 4×2 grid på desktop, 2×4 på mobil. Min 4, maks 10 elementer. Hold titler korte for at bevare layoutet.",
      type: "array",
      group: "about",
      validation: (Rule) => Rule.required().min(4).max(10),
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Titel",
              validation: (Rule) => Rule.required().max(30),
            },
            {
              name: "description",
              type: "string",
              title: "Beskrivelse",
              validation: (Rule) => Rule.required().max(60),
            },
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),

    // ── Gallery teaser ────────────────────────────────────────────────────
    defineField({
      name: "galleryEyebrow",
      title: "Galleri-teaser — lille tekst",
      type: "string",
      group: "gallery",
      validation: (Rule) => Rule.max(40),
      initialValue: "Galleri",
    }),
    defineField({
      name: "galleryHeading",
      title: "Galleri-teaser — overskrift",
      type: "string",
      group: "gallery",
      validation: (Rule) => Rule.required().max(80),
      initialValue: "Et glimt af huset",
    }),
    defineField({
      name: "galleryImages",
      title: "Galleri-teaser — billeder (præcis 4)",
      description:
        "Vises i et 4-kolonners grid. Brug stående billeder. Præcis 4 billeder for at bevare layoutet.",
      type: "array",
      group: "gallery",
      validation: (Rule) => Rule.required().length(4),
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternativ tekst",
              validation: (Rule) => Rule.required().max(120),
            },
          ],
        },
      ],
    }),

    // ── Area ──────────────────────────────────────────────────────────────
    defineField({
      name: "areaEyebrow",
      title: "Om området — lille tekst",
      type: "string",
      group: "area",
      validation: (Rule) => Rule.max(40),
      initialValue: "Om området",
    }),
    defineField({
      name: "areaHeading",
      title: "Om området — overskrift",
      type: "string",
      group: "area",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "areaBody",
      title: "Om området — tekst",
      type: "limitedRichText",
      group: "area",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "areaImage",
      title: "Om området — billede",
      type: "image",
      group: "area",
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

    // ── Final CTA ─────────────────────────────────────────────────────────
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
    prepare: ({ title }) => ({ title: title || "Forside" }),
  },
});
