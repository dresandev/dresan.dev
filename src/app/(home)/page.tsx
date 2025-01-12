import { HeroSection } from "./_sections/HeroSection"
import { ProjectsSection } from "./_sections/ProjectsSection"
import { AboutSection } from "./_sections/AboutSection"
import { ContactSection } from "./_sections/ContactSection"

export default function Home() {
	return (
		<main>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
			<ContactSection />
		</main>
	)
}
