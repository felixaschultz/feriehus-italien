import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes, singletonTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Casa Santa Libera",

  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: "2024-10-01" }),
  ],

  schema: {
    types: schemaTypes,
    // Hide singleton types from the global "Create new" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Remove "Duplicate" and "Delete" actions from singleton documents
    actions: (input, context) => {
      if (singletonTypes.has(context.schemaType)) {
        return input.filter(
          ({ action }) =>
            action !== "duplicate" &&
            action !== "delete" &&
            action !== "unpublish",
        );
      }
      return input;
    },
  },
});
