import { defineType, defineArrayMember } from "sanity";

/**
 * A deliberately constrained Portable Text type.
 *
 * Owners can format paragraphs with **bold**, *italic*, and links — but they
 * cannot insert headings, embeds, lists, or other elements that would break
 * the page layout. This is the heart of the "edit content, never the layout"
 * promise.
 */
export const limitedRichText = defineType({
  name: "limitedRichText",
  title: "Tekst",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Only paragraphs — no headings, no blockquote, no listings of headings
      styles: [{ title: "Almindelig", value: "normal" }],
      // No lists allowed (forces clean paragraph flow)
      lists: [],
      marks: {
        // Inline formatting limited to bold + italic
        decorators: [
          { title: "Fed", value: "strong" },
          { title: "Kursiv", value: "em" },
        ],
        // Only link annotations — no internal references, no special blocks
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
            ],
          },
        ],
      },
    }),
  ],
});
