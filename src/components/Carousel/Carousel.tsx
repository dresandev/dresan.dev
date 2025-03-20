"use client"

import type { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import clsx from "clsx"
import { DotButton, useDotButton } from "./CarouselDotButton"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "./CarouselArrowButtons"
import styles from "./Carousel.module.css"

type PropType = {
  options?: EmblaOptionsType
  children: React.ReactNode[]
}

export const Carousel: React.FC<PropType> = ({ children, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={styles.carousel}>
      <div ref={emblaRef}>
        <div className={styles.slidesWrapper}>
          {children.map((slide, index) => (
            <div key={index} className={styles.slide}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <PrevButton
        aria-label="Ir al slide anterior"
        className={styles.button}
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <NextButton
        aria-label="Ir al siguiente slide"
        className={styles.button}
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />

      <div className={styles.dotsWrapper}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              styles.dot,
              { [styles.selected]: index === selectedIndex }
            )}
          />
        ))}
      </div>
    </section>
  )
}
