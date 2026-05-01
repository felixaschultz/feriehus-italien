import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Side-indstillinger",
  type: "document",
  // Singleton: there should only ever be ONE of these
  groups: [
    { name: "general", title: "Generelt", default: true },
    { name: "address", title: "Adresse" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({
      name: "houseName",
      title: "Husets navn",
      description: 'Vises i header og footer (fx "CASA SANTA LIBERA")',
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      description: "Kort beskrivelse vist i footeren",
      type: "text",
      rows: 2,
      group: "general",
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: "contactEmail",
      title: "Kontakt e-mail",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "contactPhone",
      title: "Telefon (valgfrit)",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "addressStreet",
      title: "Vej og nummer",
      type: "string",
      group: "address",
      validation: (Rule) => Rule.required().max(80),
      initialValue: "Santa Libera-regionen 45",
    }),
    defineField({
      name: "addressPostal",
      title: "Postnummer og by",
      type: "string",
      group: "address",
      validation: (Rule) => Rule.required().max(60),
      initialValue: "14053 Canelli — Asti (AT)",
    }),
    defineField({
      name: "addressCountry",
      title: "Land",
      type: "string",
      group: "address",
      validation: (Rule) => Rule.required().max(40),
      initialValue: "Italien",
    }),
    defineField({
      name: "footerCopyright",
      title: "Copyright tekst",
      description: 'Vises nederst (fx "Casa Santa Libera"). Årstallet tilføjes automatisk.',
      type: "string",
      group: "footer",
      validation: (Rule) => Rule.max(80),
    }),
  ],
  preview: {
    select: { title: "houseName" },
    prepare: ({ title }) => ({ title: title || "Side-indstillinger" }),
  },
});
