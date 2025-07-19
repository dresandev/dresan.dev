// @ts-check
import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://www.dresan.dev/",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        es: "es-CO",
        en: "en-US",
      },
    },
  })],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
})
