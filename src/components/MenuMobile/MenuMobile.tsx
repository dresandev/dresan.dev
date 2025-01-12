"use client"

import { useState } from "react"
import clsx from "clsx"
import { HOME_NAV_LINKS } from "~/constants"
import { toggleBodyOverflow } from "~/utils"
import { useIsValidAppRoute } from "~/hooks/use-is-in-valid-path"
import { Link } from "~/components/Ui/Link"
import { Button } from "~/components/Ui/Button"
import { ThemeSwitcher } from "~/components/ThemeSwitcher"
import { ContactModal } from "~/components/ContactModal"
import styles from "./MenuMobile.module.css"

export const MenuMobile = () => {
	const [open, setOpen] = useState(false)
	const isValidAppRoute = useIsValidAppRoute()

	const handleToggleMenu = () => {
		setOpen(!open)
		toggleBodyOverflow(!open)
	}

	const handleCloseMenu = () => {
		setOpen(false)
		toggleBodyOverflow(false)
	}

	return (
		<>
			<button
				className={clsx(styles.button, { [styles.open]: open })}
				aria-label={`${open ? "Cerrar" : "Abrir"} menú`}
				type="button"
				onClick={handleToggleMenu}
			>
				<span className={styles.buttonLine}></span>
				<span className={styles.buttonLine}></span>
			</button>
			<div className={clsx(styles.menu, { [styles.open]: open })}>
				{isValidAppRoute && (
					<nav className={styles.nav}>
						<ul className={styles.navList}>
							{HOME_NAV_LINKS.map(({ href, label }) => (
								<li key={href}>
									<Link
										className={styles.navLink}
										href={href}
										onClick={handleCloseMenu}
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				)}
				<div className={styles.optionsWrapper}>
					<ContactModal trigger={
						<Button
							className={styles.contactButton}
							size="medium"
							type="button"
						>
							Contactar
						</Button>
					} />
					<div className={styles.themeWrapper}>
						<span>Tema</span> <ThemeSwitcher />
					</div>
				</div>
			</div>
		</>
	)
}
