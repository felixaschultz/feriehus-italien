import { defineType, defineField } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Kontakt-side",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "form", title: "Formular" },
    { name: "map", title: "Kort" },
  ],
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero — lille tekst",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.max(50),
      initialValue: "Kontakt",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero — titel",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required().max(70),
      initialValue: "Lad os tale sammen",
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
      name: "formEyebrow",
      title: "Formular — lille tekst",
      type: "string",
      group: "form",
      validation: (Rule) => Rule.max(40),
      initialValue: "Send en besked",
    }),
    defineField({
      name: "formHeading",
      title: "Formular — overskrift",
      type: "string",
      group: "form",
      validation: (Rule) => Rule.required().max(80),
      initialValue: "Skriv til os",
    }),
    defineField({
      name: "mapQuery",
      title: "Kort — søgeforespørgsel",
      description: "Hvad Google Maps skal vise. Fx 'Canelli, Asti, Italy'.",
      type: "string",
      group: "map",
      validation: (Rule) => Rule.required().max(120),
      initialValue: "Canelli, Asti, Italy",
    }),
  ],
  preview: {
    select: { title: "heroTitle" },
    prepare: ({ title }) => ({ title: title || "Kontakt-side" }),
  },
});
