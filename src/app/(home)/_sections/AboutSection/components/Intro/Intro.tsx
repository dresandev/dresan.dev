import { socialMediaLinks } from "~/data/links"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/Ui/Tooltip"
import styles from "./Intro.module.css"

export const Intro = () => {
  return (
    <div data-name="intro">
      <p className={styles.intro}>
        Desarrollador de Software con <em>2 años de experiencia</em> especializado en el Front-end, enfocado en los <strong>detalles</strong> y el <strong>performace</strong> para brindar una experiencia de usuario representativa.
      </p>

      <div className={styles.linksWrapper}>
        {socialMediaLinks.map(({ label, url, icon }) => (
          <TooltipProvider key={label}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <a
                  aria-label={`Visitar mi ${label}`}
                  className={styles.link}
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
