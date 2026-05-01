import { defineType, defineField } from "sanity";

export const faqEntry = defineType({
  name: "faqEntry",
  title: "FAQ-emne",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Emne",
      description: 'Fx "Adresse", "Affald", "Vinrum"',
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "body",
      title: "Indhold",
      description:
        "Tekst om emnet. Tilladte formateringer: fed, kursiv og links.",
      type: "limitedRichText",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "defaultOpen",
      title: "Vis åbent fra start?",
      description: "Hvis tændt, vises emnet udfoldet når siden åbner.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});

export const faqLetter = defineType({
  name: "faqLetter",
  title: "Bogstav-sektion",
  type: "object",
  fields: [
    defineField({
      name: "letter",
      title: "Bogstav",
      description: "Et enkelt bogstav (A, B, C, ...)",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(2).regex(/^[A-ZÆØÅa-zæøå]$/, {
          name: "single letter",
          invert: false,
        }),
    }),
    defineField({
      name: "entries",
      title: "Emner under dette bogstav",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [{ type: "faqEntry" }],
    }),
  ],
  preview: {
    select: { title: "letter", entries: "entries" },
    prepare: ({ title, entries }) => ({
      title: title || "?",
      subtitle: `${entries?.length || 0} emner`,
    }),
  },
});

export const faqPage = defineType({
  name: "faqPage",
  title: "FAQ-side",
  type: "document",
  groups: [
    { name: "intro", title: "Intro", default: true },
    { name: "content", title: "Indhold" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({
      name: "introEyebrow",
      title: "Intro — lille tekst",
      type: "string",
      group: "intro",
      validation: (Rule) => Rule.max(40),
      initialValue: "Praktisk information",
    }),
    defineField({
      name: "introHeading",
      title: "Intro — overskrift",
      type: "string",
      group: "intro",
      validation: (Rule) => Rule.required().max(80),
      initialValue: "FAQ — Gæstehåndbog A til Å",
    }),
    defineField({
      name: "introBody",
      title: "Intro — kort beskrivelse",
      type: "text",
      rows: 3,
      group: "intro",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "letters",
      title: "Bogstav-sektioner",
      description:
        "Hvert bogstav indeholder en eller flere FAQ-emner. Sortér dem manuelt i den rækkefølge, du ønsker.",
      type: "array",
      group: "content",
      validation: (Rule) => Rule.required().min(1),
      of: [{ type: "faqLetter" }],
    }),
    defineField({
      name: "ctaEyebrow",
      title: "CTA — lille tekst",
      type: "string",
      group: "cta",
      validation: (Rule) => Rule.max(40),
      initialValue: "Mangler der noget?",
    }),
    defineField({
      name: "ctaHeading",
      title: "CTA — overskrift",
      type: "string",
      group: "cta",
      validation: (Rule) => Rule.required().max(80),
      initialValue: "Skriv til os, vi svarer gerne",
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
    select: { title: "introHeading" },
    prepare: ({ title }) => ({ title: title || "FAQ-side" }),
  },
});
