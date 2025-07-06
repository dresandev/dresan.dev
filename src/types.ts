interface Link {
  label: string
  url: string
  icon: (_props: Record<string, any>) => any
}

export interface Tag {
  name: string,
  colorLightHsl: string,
  colorDarkHsl: string,
}

export interface Project {
  id: string
  title: string
  imageUrl: string
  description: string
  modalData: ProjectModalData
}

export interface ProjectModalData {
  backgroundGradient: string
  description: string
  links: Link[]
  images: string[]
  tags: Tag[]
}
