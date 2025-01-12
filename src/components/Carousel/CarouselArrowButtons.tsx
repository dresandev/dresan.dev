import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from "react"
import { EmblaCarouselType } from "embla-carousel"
import { ChevronLeft } from "~/components/Svg/ChevronLeft"
import { ChevronRight } from "~/components/Svg/ChevronRight"

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<"button">

export const PrevButton: React.FC<PropType> = ({
  children,
  ...restProps
}) => {
  return (
    <button
      type="button"
      {...restProps}
    >
      <ChevronLeft />
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = ({
  children,
  ...restProps
}) => {
  return (
    <button
      type="button"
      {...restProps}
    >
      <ChevronRight />
      {children}
    </button>
  )
}
