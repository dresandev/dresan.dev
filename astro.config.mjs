// @ts-check
import vercel from "@astrojs/vercel"
import { defineConfig, envField } from "astro/config"

export default defineConfig({
  site: "https://www.dresan.dev/",
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  env: {
    schema: {
      HOST_URL: envField.string({ context: "client", access: "public" }),
      FORM_ID: envField.string({ context: "client", access: "public" }),
      SPOTIFY_REFRESH_TOKEN: envField.string({ context: "server", access: "secret" }),
      SPOTIFY_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      SPOTIFY_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
    },
  },
})
