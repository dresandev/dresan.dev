import { Tags } from "./tags"
import { ExternalLinkIcon } from "~/components/Svg/ExternalLinkIcon"
import { GitHubIcon } from "~/components/Svg/GitHubIcon"

const IMAGE_BASE_PATH = "/assets/images/projects"
const COVER_IMAGE_PATH = `${IMAGE_BASE_PATH}/cover`
const MODAL_IMAGE_PATH = `${IMAGE_BASE_PATH}/modal`

const VIEW_WEB_LABEL = "Visitar sitio"
const VIEW_WEB_ICON = <ExternalLinkIcon />
const VIEW_CODE_LABEL = "Ver código"
const VIEW_CODE_ICON = <GitHubIcon />

export const projects = [
	{
		title: "Dreflix",
		coverData: {
			imageUrl: `${COVER_IMAGE_PATH}/dreflix.webp`,
			description: "App de exploración de películas, al estilo de Amazon Prime Video y Crunchyroll.",
		},
		modalData: {
			backgroundGradient: "linear-gradient(135deg, hsl(270 40% 60%), hsl(340 50% 70%))",
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
				`${MODAL_IMAGE_PATH}/dreflix-1.webp`,
				`${MODAL_IMAGE_PATH}/dreflix-2.webp`,
				`${MODAL_IMAGE_PATH}/dreflix-3.webp`,
				`${MODAL_IMAGE_PATH}/dreflix-4.webp`,
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
		title: "Vexara",
		coverData: {
			imageUrl: `${COVER_IMAGE_PATH}/vexara.webp`,
			description: "Clon del e-commerce de Bershka, implementando el flujo principal de un e-commerce.",
		},
		modalData: {
			backgroundGradient: "linear-gradient(135deg, hsl(250 50% 70%), hsl(30 60% 70%))",
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
				`${MODAL_IMAGE_PATH}/vexara-1.webp`,
				`${MODAL_IMAGE_PATH}/vexara-2.webp`,
				`${MODAL_IMAGE_PATH}/vexara-3.webp`,
				`${MODAL_IMAGE_PATH}/vexara-4.webp`,
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
		title: "Linkpeek",
		coverData: {
			imageUrl: `${COVER_IMAGE_PATH}/linkpeek.webp`,
			description: "App para gestionar links, implementando scraping para la obtención de información de los sitios webs.",
		},
		modalData: {
			backgroundGradient: "linear-gradient(135deg, hsl(340 40% 65%), hsl(50 50% 75%))",
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
				`${MODAL_IMAGE_PATH}/linkpeek-1.webp`,
				`${MODAL_IMAGE_PATH}/linkpeek-2.webp`,
				`${MODAL_IMAGE_PATH}/linkpeek-3.webp`,
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
		title: "Dree",
		coverData: {
			imageUrl: `${COVER_IMAGE_PATH}/dree.webp`,
			description: "Herramienta para generar diagramas de texto sobre la estructura de file systems 📁.",
		},
		modalData: {
			backgroundGradient: "linear-gradient(135deg, hsl(220 40% 65%), hsl(280 45% 70%))",
			description: "Herramienta para generar diagramas de texto sobre estructuras de directorios y archivos, basado en el proyecto de Nathan Friend: https://tree.nathanfriend.io/.",
			links: [
				{
					label: VIEW_WEB_LABEL,
					url: "https://dreee.vercel.app",
					icon: VIEW_WEB_ICON
				},
				{
					label: VIEW_CODE_LABEL,
					url: "https://github.com/dresandev/dree",
					icon: VIEW_CODE_ICON
				},
			],
			images: [`${MODAL_IMAGE_PATH}/dree-1.webp`],
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

export const moreProjects = [
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
		description: "⚛ ⚡ CLI utility for quickly creating new React components. ⚡ ⚛",
		url: "https://github.com/dresandev/new-component",
	},
]
