/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
/// <reference types="@astrojs/cloudflare" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly RESEND_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Runtime = import("@astrojs/cloudflare").Runtime<{
  RESEND_API_KEY: string;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
