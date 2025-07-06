import type { Project } from "@/types"
import { Tags } from "./tags"
import ExternalLinkIcon from "@/components/icons/external-link-icon.astro"
import GitHubIcon from "@/components/icons/github-icon.astro"

const IMAGE_BASE_PATH = "/images/projects"
const COVER_IMAGE_PATH = `${IMAGE_BASE_PATH}/cover`
const MODAL_IMAGE_PATH = `${IMAGE_BASE_PATH}/modal`

const VIEW_WEB_LABEL = "Visitar sitio"
const VIEW_WEB_ICON = ExternalLinkIcon
const VIEW_CODE_LABEL = "Ver código"
const VIEW_CODE_ICON = GitHubIcon

export const projects: Project[] = [
  {
    id: "dreflix-project",
    title: "Dreflix",
    description: "App de exploración de películas, al estilo de Amazon Prime Video y Crunchyroll.",
    imageUrl: `${COVER_IMAGE_PATH}/dreflix.webp`,
    modalData: {
      backgroundGradient: "linear-gradient(135deg, #FFA71A, #CA0003, #660088)",
      description: "Aplicación web para explorar películas, similar a Amazon Prime Video y Crunchyroll, con funcionalidades como scroll infinito, un buscador de películas optimizado para la navegación por teclado similar al de YouTube, y un carrusel para promocionar películas con características como reproducción automática solo cuando la película sea visible (es decir, cuando esté en el viewport y la pestaña tenga el foco), entre otras características.",
      links: [
        {
          label: VIEW_WEB_LABEL,
          url: "https://dreflix.vercel.app",
          icon: VIEW_WEB_ICON
        },
        {
          label: VIEW_CODE_LABEL,
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
        Tags.nextJs14,
        Tags.cssModules,
        Tags.typescript,
        Tags.theMovieDB,
        Tags.zustand,
        Tags.movieExplorer,
      ],
    }
  },
  {
    id: "vexara-project",
    title: "Vexara",
    description: "Clon del e-commerce de Bershka, implementando el flujo principal de un e-commerce.",
    imageUrl: `${COVER_IMAGE_PATH}/vexara.webp`,
    modalData: {
      backgroundGradient: "linear-gradient(135deg, #4A3F35, #F2E6F5, #6789FF)",
      description: "Clon del ecommerce de Bershka, implementando funcionalidades principales como el flujo de autenticación con auth.js, el flujo de pago de productos mediante la pasarela de pagos MercadoPago, maquetación de la app con precisión pixel perfect, y diseño responsive sin usar JavaScript (como se hace originalmente). Además, se implementó código funcional en producción.",
      links: [
        {
          label: VIEW_WEB_LABEL,
          url: "https://vexara.vercel.app",
          icon: VIEW_WEB_ICON
        },
        {
          label: VIEW_CODE_LABEL,
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
        Tags.mercadoPago,
        Tags.zustand,
        Tags.prismaOrm,
        Tags.nextJs14,
        Tags.authJs,
        Tags.typescript,
        Tags.eCommerce,
      ],
    }
  },
  {
    id: "linkpeek-project",
    title: "Linkpeek",
    description: "App para gestionar links, implementando scraping para la obtención de información de los sitios web.",
    imageUrl: `${COVER_IMAGE_PATH}/linkpeek.webp`,
    modalData: {
      backgroundGradient: "linear-gradient(135deg, #FF6B6B, #F5B041, #6BCFFF)",
      description: "Aplicación para gestionar enlaces, realizando scraping para obtener datos como el título, descripción e imagen usada en el Open Graph Protocol (OGP). Incluye un componente para agregar etiquetas similar al TagsInput de GitHub. El enfoque principal es del lado del servidor, de manera que la mayoría del trabajo se realiza en el servidor.",
      links: [
        {
          label: VIEW_WEB_LABEL,
          url: "https://linkpeek.vercel.app",
          icon: VIEW_WEB_ICON
        },
        {
          label: VIEW_CODE_LABEL,
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
        Tags.nextJs14,
        Tags.typescript,
        Tags.prismaOrm,
        Tags.tailwindCss,
        Tags.authJs,
        Tags.tool,
      ],
    }
  },
  {
    id: "minestyle-project",
    title: "MineStyle",
    description: "Aplicación para ver tu skin de Minecraft con armadura y adornos de armadura, enfocada en el look and feel 😎.",
    imageUrl: `${COVER_IMAGE_PATH}/minestyle.webp`,
    modalData: {
      backgroundGradient: "linear-gradient(135deg, #00F7A5, #00B3FF, #B13CFF)",
      description: "Aplicación para ver tu skin de Minecraft con armadura y adornos de armadura, enfocada en el look and feel 😎. Utilizando React three fiber y como base el codigo de https://github.com/bs-community/skinview3d",
      links: [
        {
          label: VIEW_WEB_LABEL,
          url: "https://minestyle.vercel.app",
          icon: VIEW_WEB_ICON
        },
        {
          label: VIEW_CODE_LABEL,
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
        Tags.nextJs14,
        Tags.zustand,
        Tags.cssModules,
        Tags.typescript,
        Tags.tool,
        Tags.jest,
        Tags.reactTestingLibrary,
      ],
    }
  },
]

export const extraProjects = [
  {
    title: "github-tags-input",
    description: "Recreating the component to add Tags on GitHub 🩻",
    url: "https://github.com/dresandev/github-tags-input",
  },
  {
    title: "youtube-shorts-autoscroll-extension",
    description: "Add a button at the bottom left that when active automatically scrolls the YouTube shorts👆🏼.",
    url: "https://github.com/dresandev/youtube-shorts-autoscroll-extension",
  },
  {
    title: "new-component",
    description: "⚛⚡ CLI utility for quickly creating new React components. ⚡⚛",
    url: "https://github.com/dresandev/new-component",
  },
]
