import { sectionId } from "./ids"

export const HOME_NAV_LINKS = [
  {
    href: `#${sectionId.projects}`,
    labelI18nId: "nav.link.projects" as const,
  },
  {
    href: `#${sectionId.aboutMe}`,
    labelI18nId: "nav.link.about" as const,
  },
]
