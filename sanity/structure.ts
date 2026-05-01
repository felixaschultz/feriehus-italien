import type { StructureBuilder, StructureResolver } from "sanity/structure";

const singletons: Array<{ id: string; type: string; title: string; icon?: string }> = [
  { id: "siteSettings", type: "siteSettings", title: "Side-indstillinger" },
  { id: "homepage", type: "homepage", title: "Forside" },
  { id: "canelliPage", type: "canelliPage", title: "Canelli-side" },
  { id: "galleryPage", type: "galleryPage", title: "Galleri-side" },
  { id: "contactPage", type: "contactPage", title: "Kontakt-side" },
  { id: "faqPage", type: "faqPage", title: "FAQ-side" },
];

/**
 * Custom Studio structure: every page is a singleton (one document per type),
 * shown as a flat list in the sidebar. The owner doesn't see "create new"
 * buttons — they just open the page they want to edit.
 */
export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title("Indhold")
    .items([
      ...singletons.map((singleton) =>
        S.listItem()
          .title(singleton.title)
          .id(singleton.id)
          .child(
            S.document()
              .schemaType(singleton.type)
              .documentId(singleton.id)
              .title(singleton.title),
          ),
      ),
    ]);
