import { CodePenIcon } from "~/components/Svg/CodePenIcon"
import { EmailIcon } from "~/components/Svg/EmailIcon"
import { GitHubIcon } from "~/components/Svg/GitHubIcon"
import { LinkedInIcon } from "~/components/Svg/LinkedInIcon"

export const socialMediaLinks = [
	{
		label: "GitHub",
		url: "https://github.com/dresandev",
		icon: <GitHubIcon width={20} height={20} />
	},
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/dresandev",
		icon: <LinkedInIcon />
	},
	{
		label: "Email",
		url: "mailto:dresan.dev@gmail.com",
		icon: <EmailIcon />
	},
	{
		label: "CodePen",
		url: "https://codepen.io/dresandev",
		icon: <CodePenIcon />
	},
]
