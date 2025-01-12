"use client"

import { useEffect, useRef, ReactNode } from "react"
import clsx from "clsx"
import styles from "./FakeMasonry.module.css"

interface Props {
  children: ReactNode
  className?: string
}

const smOrder = {
  intro: 1,
  moreAbout: 4,
  greeting: 2,
  moreProjects: 7,
  experience: 3,
  education: 5,
  stack: 6,
}

const mdOrder = {
  intro: 1,
  moreAbout: 2,
  greeting: 5,
  moreProjects: 4,
  experience: 6,
  education: 7,
  stack: 3,
}

const lgOrder = {
  intro: 1,
  moreAbout: 2,
  greeting: 3,
  moreProjects: 4,
  experience: 5,
  education: 6,
  stack: 7,
}

const getOrder = () => {
  const width = window.innerWidth
  if (width >= 1400) return lgOrder
  if (width >= 900) return mdOrder
  return smOrder
}

export const FakeMasonry: React.FC<Props> = ({ children, className }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sortElements = () => {
      const order = getOrder()
      const elements = Array.from(wrapperRef.current?.children || [])

      const orderedElements = elements
        .sort((a, b) => {
          const aName = a.getAttribute("data-name") || ""
          const bName = b.getAttribute("data-name") || ""
          return (order[aName as keyof typeof order] || 99) - (order[bName as keyof typeof order] || 99)
        })

      wrapperRef.current?.replaceChildren(...orderedElements)
    }

    sortElements()

    window.addEventListener("resize", sortElements)

    return () => {
      window.removeEventListener("resize", sortElements)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={clsx(styles.fakeMasonry, className)}
    >
      {children}
    </div>
  )
}
