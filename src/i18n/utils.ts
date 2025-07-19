import { type Locale, type UiKey, UI, DEFAULT_LOCALE } from './ui'

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')
  if (lang in UI) return lang as Locale
  return DEFAULT_LOCALE
}

export const useTranslations = (lang: Locale) => {
  return (key: UiKey) => {
    return UI[lang || DEFAULT_LOCALE][key]
  }
}
