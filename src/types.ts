interface Link {
  label: string
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
  description: string
  gradient: string
  modalData: ProjectModalData
}

export interface ProjectModalData {
  description: string
  links: Link[]
  images: Image[]
  tags: ProjectTag[]
}
