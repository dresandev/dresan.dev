import CodePenIcon from "@/components/icons/code-pen-icon.astro"
import EmailIcon from "@/components/icons/email-icon.astro"
import GitHubIcon from "@/components/icons/github-icon.astro"
import LinkedInIcon from "@/components/icons/linked-in-icon.astro"
import XIcon from "@/components/icons/x-icon.astro"

export const SOCIAL_MEDIA = {
  github: {
    label: "GitHub",
    url: "https://github.com/dresandev",
    icon: GitHubIcon
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/dresandev",
    icon: LinkedInIcon
  },
  email: {
    label: "Email",
    url: "mailto:dresan.dev@gmail.com",
    icon: EmailIcon
  },
  codepen: {
    label: "CodePen",
    url: "https://codepen.io/dresandev",
    icon: CodePenIcon
  },
  x: {
    label: "X",
    url: "https://x.com/dresan_dev",
    icon: XIcon
  }
} as const

export const SOCIAL_MEDIA_LINKS = Object.values(SOCIAL_MEDIA)
