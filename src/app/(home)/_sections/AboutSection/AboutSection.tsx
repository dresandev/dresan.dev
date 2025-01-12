import { FakeMasonry } from "~/components/FakeMasonry"
import { Intro } from "./components/Intro"
import { MoreAbout } from "./components/MoreAbout"
import { MoreProjects } from "./components/MoreProjects"
import { Greeting } from "./components/Greeting"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Stack } from "./components/Stack"
import styles from "./AboutSection.module.css"

export const AboutSection = () => {
	return (
		<section id="about" className="section-wrapper">
			<h2 className={styles.title}>Sobre mí</h2>

			<FakeMasonry className={styles.fakeMasonry}>
				<Intro />
				<MoreAbout />
				<Greeting />
				<MoreProjects />
				<Experience />
				<Education />
				<Stack />
			</FakeMasonry>
		</section>
	)
}
