import NextLink from "next/link"
import { DresanLogo } from "~/components/Svg/DresanLogo"
import { ThemeSwitcher } from "~/components/ThemeSwitcher"
import { Button } from "~/components/Ui/Button"
import { MenuMobile } from "~/components/MenuMobile"
import { ContactModal } from "~/components/ContactModal"
import { Navigation } from "../Navigation"
import styles from "./Header.module.css"

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.contentWrapper}>
				<NextLink href="/" aria-label="Ir a la página de inicio">
					<DresanLogo className={styles.dresanLogo} />
				</NextLink>
				<Navigation />
				<div className={styles.optionsWrapper}>
					<ContactModal trigger={(
						<Button size="small" type="button">
							Contactar
						</Button>
					)} />
					<ThemeSwitcher />
				</div>
				<MenuMobile />
			</div>
		</header>
	)
}
