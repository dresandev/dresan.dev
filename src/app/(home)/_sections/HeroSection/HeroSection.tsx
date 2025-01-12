import NextLink from "next/link"
import { Button } from "~/components/Ui/Button"
import { ArrowDown } from "~/components/Svg/ArrowDown"
import { ContactModal } from "~/components/ContactModal"
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton"
import styles from "./HeroSection.module.css"

export const HeroSection = () => {
	return (
		<section id="home" className={styles.section}>
			<p className={styles.phrase}>
				El código más limpio es el que no se escribió.{" "}
				<Button rounded="full" size="small" asChild>
					<NextLink href="https://www.linkedin.com/in/dresandev" target="_blank" rel="noopener">
						Disponible para trabajar <span className={styles.availableCircle}></span>
					</NextLink>
				</Button>
			</p>
			<h1 className={`text-gradient ${styles.title}`}>Dresan, Desarrollador Frontend</h1>
			<p className={styles.introSubtitle}>
				Hago que tu proyecto <strong>destaque</strong> con la <strong>elegancia</strong> y la{" "}
				<strong>calidad</strong> que merece.
			</p>
			<div className={styles.actions}>
				<ContactModal
					trigger={
						<Button className={styles.actionBtn} type="button">
							ʕっ•ᴥ•ʔっ Contáctame
						</Button>
					}
				/>
				<Button className={styles.actionBtn} variant="outlined" asChild>
					<NextLink
						href="/assets/files/Javier-Andres-Frontend-Developer-CV.pdf"
						target="_blank"
						prefetch={false}
					>
						Descargar Curriculum <ArrowDown />
					</NextLink>
				</Button>
				<CopyEmailSmallButton className={styles.copyEmailButton} />
			</div>
		</section>
	)
}
