import type { MetadataRoute } from "next"
import { HOST_URL, APP_ROUTES } from "~/constants"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const routes = APP_ROUTES.map((path) => ({
		url: `${HOST_URL}${path}`,
		lastModified: new Date().toISOString().split("T")[0],
	}))

	return [
		{
			url: `${HOST_URL}/`,
			lastModified: new Date().toISOString().split("T")[0],
		},
		...routes
	]
}
