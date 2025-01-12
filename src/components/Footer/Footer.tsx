import { socialMediaLinks } from "~/data/links"
import { Link } from "~/components/Ui/Link"
import styles from "./Footer.module.css"

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<span className={styles.year}>ฅʕ´•ᴥ•`ʔฅ - {currentYear}</span>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ url, label }) => (
						<Link
							key={url}
							className={styles.link}
							href={url}
							target="_blank"
							rel="noopener"
						>
							{label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}
