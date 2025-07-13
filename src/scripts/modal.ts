import { $$ } from "@/utils/dom-selector"

const $modals = $$<HTMLDialogElement>("dialog[data-modal]")

$modals.forEach((modal) => {
  modal.addEventListener("toggle", () => {
    const firstInput = modal.querySelector("input")

    firstInput?.focus()

    document.body.toggleAttribute("data-scroll-locked", modal.open)
  })

  const $triggerButton = $$(`[data-modal-trigger-id='${modal.id}']`)

  $triggerButton.forEach((button) => {
    button.addEventListener("click", () => modal.showModal())
  })
})
