import type { UiKey } from "@/i18n/ui"

export interface MyBackgroundData {
  roleI18nId: UiKey
  years: string
  siteName: string
  siteUrl?: string
  inRemote?: boolean
}

export const experience: MyBackgroundData[] = [
  {
    roleI18nId: "about.experience.role.frontend",
    years: "2023 — 2025",
    siteName: "Freelance",
    inRemote: true,
  },
  {
    roleI18nId: "about.experience.role.frontend",
    years: "2022 — 2023",
    siteName: "NTT DATA",
    siteUrl: "https://co.nttdata.com",
    inRemote: true,
  },
  {
    roleI18nId: "about.experience.role.fullStack",
    years: "2021 — 2021",
    siteName: "SENA",
    siteUrl: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
    inRemote: true,
  },
]

export const education: MyBackgroundData[] = [
  {
    roleI18nId: "about.education.certified1",
    years: "2020 — 2022",
    siteName: "SENA",
  },
  {
    roleI18nId: "about.education.certified2",
    years: "2021 — 2021",
    siteName: "SENA",
  },
  {
    roleI18nId: "about.education.certified3",
    years: "2019 — 2019",
    siteName: "SENA",
  },
]
