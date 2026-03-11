import { HOME_SECTION_ID } from "./ids"

export const HOME_NAV_LINKS = [
  {
    href: `#${HOME_SECTION_ID.projects}`,
    labelI18nId: "nav.link.projects" as const,
  },
  {
    href: `#${HOME_SECTION_ID.aboutMe}`,
    labelI18nId: "nav.link.about" as const,
  },
]
