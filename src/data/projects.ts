import type { Project } from "@/types"
import { ProjectTags } from "./project-tags"
import ExternalLinkIcon from "@/components/icons/external-link-icon.astro"
import GitHubIcon from "@/components/icons/github-icon.astro"

type FeaturedProjectName = "dreflix" | "vexara" | "minestyle" | "linkpeek"

const IMAGE_BASE_PATH = "/images/projects"
const COVER_IMAGE_PATH = `${IMAGE_BASE_PATH}/cover`
const MODAL_IMAGE_PATH = `${IMAGE_BASE_PATH}/modal`

const VIEW_WEB_LABEL_I18N_ID = "projects.link.viewWeb" as const
const VIEW_CODE_LABEL_I18N_ID = "projects.link.viewCode" as const
const VIEW_WEB_ICON = ExternalLinkIcon
const VIEW_CODE_ICON = GitHubIcon


const getProjectDescriptionI18nId = (projectName: FeaturedProjectName, short: boolean = false) => {
  return `projects.description${short ? ".short" : ""}.${projectName}` as const
}

export const projects: Project[] = [
  {
    id: "dreflix-project",
    title: "Dreflix",
    descriptionI18nId: getProjectDescriptionI18nId("dreflix", true),
    imageUrl: `${COVER_IMAGE_PATH}/dreflix.webp`,
    gradient: "linear-gradient(135deg, #ff2e63, #7b2cbf, #2a2a72)",
    modalData: {
      descriptionI18nId: getProjectDescriptionI18nId("dreflix"),
      links: [
        {
          labelI18nId: VIEW_WEB_LABEL_I18N_ID,
          url: "https://dreflix.vercel.app",
          icon: VIEW_WEB_ICON
        },
        {
          labelI18nId: VIEW_CODE_LABEL_I18N_ID,
          url: "https://github.com/dresandev/dreflix",
          icon: VIEW_CODE_ICON
        },
      ],
      images: [
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/dreflix-1.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/dreflix-1.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/dreflix-2.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/dreflix-2.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/dreflix-3.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/dreflix-3.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/dreflix-4.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/dreflix-4.webp`
        },
      ],
      tags: [
        ProjectTags.nextJs14,
        ProjectTags.cssModules,
        ProjectTags.typescript,
        ProjectTags.theMovieDB,
        ProjectTags.zustand,
        ProjectTags.movieExplorer,
      ],
    }
  },
  {
    id: "vexara-project",
    title: "Vexara",
    descriptionI18nId: getProjectDescriptionI18nId("vexara", true),
    imageUrl: `${COVER_IMAGE_PATH}/vexara.webp`,
    gradient: "linear-gradient(135deg, #5b4434, #e5b5f0, #486eff)",
    modalData: {
      descriptionI18nId: getProjectDescriptionI18nId("vexara"),
      links: [
        {
          labelI18nId: VIEW_WEB_LABEL_I18N_ID,
          url: "https://vexara.vercel.app",
          icon: VIEW_WEB_ICON
        },
        {
          labelI18nId: VIEW_CODE_LABEL_I18N_ID,
          url: "https://github.com/dresandev/vexara",
          icon: VIEW_CODE_ICON
        },
      ],
      images: [
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/vexara-1.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/vexara-1.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/vexara-2.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/vexara-2.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/vexara-3.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/vexara-3.webp`
        },
      ],
      tags: [
        ProjectTags.mercadoPago,
        ProjectTags.zustand,
        ProjectTags.prismaOrm,
        ProjectTags.nextJs14,
        ProjectTags.authJs,
        ProjectTags.typescript,
        ProjectTags.eCommerce,
      ],
    }
  },
  {
    id: "minestyle-project",
    title: "MineStyle",
    descriptionI18nId: getProjectDescriptionI18nId("minestyle", true),
    imageUrl: `${COVER_IMAGE_PATH}/minestyle.webp`,
    gradient: "linear-gradient(135deg, #e8a0d8ff, #75aff1ff, #a8ccdcff)",
    modalData: {
      descriptionI18nId: getProjectDescriptionI18nId("minestyle"),
      links: [
        {
          labelI18nId: VIEW_WEB_LABEL_I18N_ID,
          url: "https://minestyle.vercel.app",
          icon: VIEW_WEB_ICON
        },
        {
          labelI18nId: VIEW_CODE_LABEL_I18N_ID,
          url: "https://github.com/dresandev/minestyle",
          icon: VIEW_CODE_ICON
        },
      ],
      images: [
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/minestyle-1.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/minestyle-1.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/minestyle-2.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/minestyle-2.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/minestyle-3.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/minestyle-3.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/minestyle-4.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/minestyle-4.webp`
        },
      ],
      tags: [
        ProjectTags.nextJs14,
        ProjectTags.zustand,
        ProjectTags.cssModules,
        ProjectTags.typescript,
        ProjectTags.tool,
        ProjectTags.jest,
        ProjectTags.reactTestingLibrary,
      ],
    }
  },
  {
    id: "linkpeek-project",
    title: "Linkpeek",
    descriptionI18nId: getProjectDescriptionI18nId("linkpeek", true),
    imageUrl: `${COVER_IMAGE_PATH}/linkpeek.webp`,
    gradient: "linear-gradient(135deg, #a066ff, #ff5e7e, #63e3fdff)",
    modalData: {
      descriptionI18nId: getProjectDescriptionI18nId("linkpeek"),
      links: [
        {
          labelI18nId: VIEW_WEB_LABEL_I18N_ID,
          url: "https://linkpeek.vercel.app",
          icon: VIEW_WEB_ICON
        },
        {
          labelI18nId: VIEW_CODE_LABEL_I18N_ID,
          url: "https://github.com/dresandev/linkpeek",
          icon: VIEW_CODE_ICON
        },
      ],
      images: [
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/linkpeek-1.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/linkpeek-1.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/linkpeek-2.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/linkpeek-2.webp`
        },
        {
          desktop: `${MODAL_IMAGE_PATH}/desktop/linkpeek-3.webp`,
          mobile: `${MODAL_IMAGE_PATH}/mobile/linkpeek-3.webp`
        },
      ],
      tags: [
        ProjectTags.nextJs14,
        ProjectTags.typescript,
        ProjectTags.prismaOrm,
        ProjectTags.tailwindCss,
        ProjectTags.authJs,
        ProjectTags.tool,
      ],
    }
  },
]

export const extraProjects = [
  {
    title: "github-tags-input",
    descriptionI18nId: "about.otherProjects.project1.description" as const,
    url: "https://github.com/dresandev/github-tags-input",
  },
  {
    title: "youtube-shorts-autoscroll-extension",
    descriptionI18nId: "about.otherProjects.project2.description" as const,
    url: "https://github.com/dresandev/youtube-shorts-autoscroll-extension",
  },
  {
    title: "new-component",
    descriptionI18nId: "about.otherProjects.project3.description" as const,
    url: "https://github.com/dresandev/new-component",
  },
]
