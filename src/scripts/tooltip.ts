import tippy, { createSingleton, type Instance } from "tippy.js"
import { $$ } from "@/utils/dom-selector"

const tooltipTriggers = $$("[data-tooltip]")
let tippyInstances: Instance<any>[] = []

tooltipTriggers.forEach((trigger) => {
  const content = trigger.getAttribute("data-tooltip-content")!

  tippyInstances.push(tippy(trigger, { content }))
})

createSingleton(tippyInstances, {
  theme: "tomato",
  animation: "custom",
  moveTransition: "transform 200ms ease-out",
})
