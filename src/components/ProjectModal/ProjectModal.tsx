import type { ProjectModalData } from "~/types"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "~/components/Ui/Dialog"
import { Carousel } from "~/components/Carousel"
import { X } from "~/components/Svg/X"
import styles from "./ProjectModal.module.css"

interface Props {
  children: React.ReactNode
  data: { title: string } & ProjectModalData
}

interface PillCustomProps extends React.CSSProperties {
  "--color-light-hsl": string,
  "--color-dark-hsl": string,
}

export const ProjectModal: React.FC<Props> = ({ children, data }) => {
  const { title, description, images, backgroundGradient, links, tags } = data

  const slides = images.map((url) => (
    <img
      key={url}
      className={styles.image}
      src={url}
      alt=""
      loading="lazy"
      decoding="async"
    />
  ))

  return (
    <Dialog>
      {children}
      <DialogPortal>
        <DialogOverlay className={styles.overlay} />
        <DialogContent className={styles.content}>
          <div
            style={{ background: backgroundGradient }}
            className={styles.imageWrapper}
          >
            {slides.length > 1 ? (
              <Carousel
                slides={slides}
                options={{ loop: true }}
              />
            ) : slides}
          </div>

          <div className={styles.infoWrapper}>
            <div className={styles.header}>
              <DialogTitle className={styles.title}>{title}</DialogTitle>
              {links.map(({ label, url, icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  className={styles.action}
                >
                  {icon}
                </a>
              ))}

              <DialogClose
                className={styles.action}
                aria-label="Cerrar modal"
              >
                <X />
              </DialogClose>
            </div>

            <div className={styles.tagsWrapper}>
              <h3>Tags</h3>
              <div className={styles.tagList}>
                {tags.map(({ name, colorLightHsl, colorDarkHsl }) => (
                  <span
                    key={name}
                    style={{
                      "--color-light-hsl": colorLightHsl,
                      "--color-dark-hsl": colorDarkHsl
                    } as PillCustomProps}
                    className={styles.tagPill}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.info}>
              <h3 className={styles.heading}>Descripción general</h3>
              <p>{description}</p>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
