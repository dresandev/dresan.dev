"use client"

import { useTheme } from "next-themes"
import { useHasMounted } from "~/hooks/use-has-mounted"
import styles from "./ThemeSwitcher.module.css"

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme()
	const hasMounted = useHasMounted()
	const isLightMode = theme === "light"
	const oppositeThemeName = isLightMode ? "oscuro" : "claro"

	const handleOnClick = () => {
		const oppositeTheme = isLightMode ? "dark" : "light"
		setTheme(oppositeTheme)
	}

	if (!hasMounted) return

	return (
		<button
			className={styles.button}
			onClick={handleOnClick}
			title={`Cambiar a modo ${oppositeThemeName}`}
			aria-live="polite"
		>
			<svg
				className={styles.sunAndMoon}
				aria-hidden="true"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeLinecap="round"
			>
				<circle
					className={styles.sun}
					cx="12"
					cy="12"
					r="6"
					mask="url(#moon-mask)"
					fill="currentColor"
				></circle>
				<g className={styles.sunBeams} stroke="currentColor" strokeWidth="2">
					<line x1="12" y1="1" x2="12" y2="3"></line>
					<line x1="12" y1="21" x2="12" y2="23"></line>
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
					<line x1="1" y1="12" x2="3" y2="12"></line>
					<line x1="21" y1="12" x2="23" y2="12"></line>
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
				</g>
			</svg>
		</button>
	)
}
