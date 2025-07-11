export interface MyBackgroundData {
  role: string
  years: string
  siteName: string
  siteUrl?: string
  inRemote?: boolean
}

export const experience: MyBackgroundData[] = [
  {
    role: "Front-end Developer",
    years: "2023 — 2025",
    siteName: "Freelance",
    inRemote: true,
  },
  {
    role: "Front-end Developer",
    years: "2022 — 2023",
    siteName: "NTT DATA",
    siteUrl: "https://co.nttdata.com",
    inRemote: true,
  },
  {
    role: "Front-end Developer",
    years: "2021 — 2021",
    siteName: "SENA",
    siteUrl: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
    inRemote: true,
  },
]

export const education: MyBackgroundData[] = [
  {
    role: "Tecnólogo en análisis y desarrollo de sistemas de información",
    years: "2020 — 2022",
    siteName: "SENA",
  },
  {
    role: "Diplomado de desarrollo web y móvil",
    years: "2021 — 2021",
    siteName: "SENA",
  },
  {
    role: "Técnico en sistemas",
    years: "2019 — 2019",
    siteName: "SENA",
  },
]
