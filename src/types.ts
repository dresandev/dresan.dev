import type { UiKey } from "@/i18n/ui"

interface Link {
  labelI18nId: UiKey
  url: string
  icon: (_props: Record<string, any>) => any
}

export interface ProjectTag {
  name: string,
  colorLightHsl: string,
  colorDarkHsl: string,
}

export interface Image {
  desktop: string
  mobile: string
}

export interface Project {
  id: string
  title: string
  imageUrl: string
  descriptionI18nId: UiKey
  gradient: string
  modalData: ProjectModalData
}

export interface ProjectModalData {
  descriptionI18nId: UiKey
  links: Link[]
  images: Image[]
  tags: ProjectTag[]
}
