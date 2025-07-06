const storageKey = "theme-preference"

const getColorPreference = () => {
  const colorPreference = localStorage.getItem(storageKey)

  if (colorPreference) return colorPreference

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value)
}

const theme = {
  value: getColorPreference(),
}

reflectPreference()

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light"
    setPreference()
  })
