export const copyToClipboard = async (text: string) => {
  if (!navigator?.clipboard) {
    console.warn("Clipboard not supported")
    return false
  }

  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.warn("Copy failed", error)
    return false
  }
}
