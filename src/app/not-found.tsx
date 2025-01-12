import Link from "next/link"
import { Button } from "~/components/Ui/Button"
import styles from "./not-found.module.css"

export const metadata = {
	title: "Dresan - 404",
}

export default function NotFound() {
	return (
		<>
			<main className={styles.wrapper}>
				<h1 className={styles.title}>404</h1>
				<p className={styles.description}>Página no encontrada ♨︎_♨︎</p>
				<Button asChild>
					<Link href="/">Volver al inicio</Link>
				</Button>
			</main>
		</>
	)
}
