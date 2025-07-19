import { defineMiddleware } from "astro/middleware"
import { SUPPORTED_LOCALES } from "@/i18n/ui"
import { isMiddlewareExcluded } from "@/utils/is-middleware-excluded"

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = new URL(context.request.url)

  if (isMiddlewareExcluded(pathname)) {
    return next()
  }

  const [locale] = pathname.split("/").filter(Boolean)

  if (!locale) return next()

  if (!SUPPORTED_LOCALES.includes(locale)) {
    return context.rewrite("/404")
  }

  return next()
})
