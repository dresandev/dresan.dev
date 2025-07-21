import { HOST_URL } from "astro:env/client"
import { SUPPORTED_LOCALES } from "@/i18n/ui"

export const getAlternateCanonicalLinks = (canonicalUrl: string) => {
  const path = new URL(canonicalUrl).pathname
  const currentLocale = path.split("/")[1]

  const alternateCanonicals = SUPPORTED_LOCALES.map((locale) => {
    const href = canonicalUrl.replace(`/${currentLocale}`, `/${locale}`)
    return { hreflang: locale, href }
  })

  return [
    ...alternateCanonicals,
    {
      hreflang: "x-default",
      href: `${HOST_URL}/`,
    }
  ]
}
