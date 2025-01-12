import { skills } from "~/data/skills"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/Ui/Tooltip"
import styles from "./Stack.module.css"

export const Stack = () => {
  return (
    <div data-name="stack">
      <h3>Mi Stack</h3>

      <div className={styles.technologiesList}>
        {skills.map(({ label, icon, url }) => (
          <TooltipProvider key={label}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <a
                  aria-label={`Visitar el sitio de ${label}`}
                  href={url}
                  target="_blank"
                  rel="noopener"
                >
                  {icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                {label}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}
