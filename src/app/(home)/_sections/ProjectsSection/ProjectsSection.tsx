import { projects } from "~/data/projects"
import { ProjectCard } from "~/components/ProjectCard"
import styles from "./ProjectsSection.module.css"

export const ProjectsSection = () => {
	return (
		<section id="projects">
			<div className={`${styles.wrapper} section-wrapper`}>
				<h2 className={styles.title}>Proyectos destacados</h2>
				<div className={styles.projectsWrapper}>
					{projects.map(({ title, coverData, modalData }) => (
						<ProjectCard
							key={title}
							title={title}
							modalData={modalData}
							{...coverData}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
