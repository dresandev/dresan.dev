import { education } from "~/data/background"
import { BackgroundCard } from "~/components/BackgroundCard"
import styles from "./Education.module.css"

export const Education = () => {
  return (
    <div data-name="education">
      <h3>Educación</h3>
      <div className={styles.educationList}>
        {education.map((educationData, index) => (
          <BackgroundCard
            key={index}
            data={educationData}
            isExperience={false}
          />
        ))}
      </div>
    </div>
  )
}
