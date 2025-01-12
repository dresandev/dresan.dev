import { moreProjects } from "~/data/projects"
import styles from "./MoreProjects.module.css"

export const MoreProjects = () => {
  return (
    <div data-name="moreProjects">
      <h3>Otros proyectos</h3>

      <ul className={styles.projectList}>
        {moreProjects.map(({ title, description, url }) => (
          <li key={url}>
            <div className={styles.projectCard}>
              <a className={styles.projectLink} href={url} target="_blank">
                <h4 className={styles.projectTitle}>{title}</h4>
              </a>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
