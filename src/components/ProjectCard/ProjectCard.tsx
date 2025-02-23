import type { Project } from "~/types"
import { ProjectModal } from "~/components/ProjectModal"
import { DialogTrigger } from "~/components/Ui/Dialog"
import styles from "./ProjectCard.module.css"

interface Props extends Project {
	title: string
}

export const ProjectCard: React.FC<Props> = ({
	imageUrl,
	title,
	description,
	modalData,
}) => {
	return (
		<div className={styles.card}>
			<ProjectModal data={{ title, ...modalData }}>
				<DialogTrigger className={styles.modalTrigger}>
					<span className="sr-only">Abrir modal del proyecto {title}</span>
				</DialogTrigger>
			</ProjectModal>
			<figure className={styles.imageWrapper}>
				<img
					className={styles.image}
					src={imageUrl}
					alt=""
					width={684}
					height={385}
				/>
			</figure>
			<img
				className={styles.gradientImage}
				src={imageUrl}
				aria-hidden
				alt=""
				width={684}
				height={385}
				loading="lazy"
				decoding="async"
			/>
			<h3 className={styles.title}>{title}</h3>
			<p>{description}</p>
		</div>
	)
}
