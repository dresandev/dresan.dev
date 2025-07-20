import { SUPPORTED_LOCALES } from "@/i18n/ui"
import { HOST_URL } from "@/constants/urls"

export const getAlternateCanonicalLinks = (canonicalUrl: string) => {
  const path = new URL(canonicalUrl).pathname
  const currentLocale = path.split("/")[1]

  return SUPPORTED_LOCALES.map((locale) => {
    const href = canonicalUrl.replace(`/${currentLocale}`, `/${locale}`)
    return { hreflang: locale, href }
  }).concat({
    hreflang: "x-default",
    href: `${HOST_URL}/`,
  })
}
