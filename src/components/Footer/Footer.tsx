import { socialMediaLinks } from "~/data/links"
import { Link } from "~/components/Ui/Link"
import { ArrowUpRight } from "~/components/Svg/ArrowUpRight"
import styles from "./Footer.module.css"

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<div className={styles.wrapper}>
			<footer className={styles.footer}>
				<span className={styles.year}>ฅʕ´•ᴥ•`ʔฅ - {currentYear}</span>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ url, label }) => (
						<Link key={url} className={styles.link} href={url} target="_blank" rel="noopener">
							{label}
							<ArrowUpRight className={styles.arrowIcon} />
						</Link>
					))}
				</div>
			</footer>
		</div>
	)
}
