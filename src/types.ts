interface Link {
	label: string
	url: string
	icon: React.ReactNode
}

export interface Tag {
	name: string,
	colorLightHsl: string,
	colorDarkHsl: string,
}

export interface ProjectModalData {
	backgroundGradient: string
	description: string
	links: Link[]
	images: string[]
	tags: Tag[]
}

export interface Project {
	title: string
	imageUrl: string
	description: string
	modalData: ProjectModalData
}
