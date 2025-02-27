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
  slides: React.ReactNode[]
  options?: EmblaOptionsType
}

export const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
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
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <PrevButton
        className={styles.button}
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <NextButton
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
