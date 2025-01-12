"use client"

import { useState } from "react"
import clsx from "clsx"
import { DRESAN_EMAIL } from "~/constants"
import { copyToClipboard } from "~/utils"
import { useTimeout } from "~/hooks/use-timeout"
import styles from "./CopyEmailButton.module.css"

const RESET_FEEDBACK_TIME = 5000

export const CopyEmailButton = () => {
	const [displayFeedback, setDisplayFeedback] = useState(false)

	const hideFeedback = () => setDisplayFeedback(false)

	useTimeout(hideFeedback, RESET_FEEDBACK_TIME)

	const handleOnClick = async () => {
		const isCopied = await copyToClipboard(DRESAN_EMAIL)
		setDisplayFeedback(isCopied)
	}

	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles.toast, { [styles.show]: displayFeedback })}>
				¡Espero saber pronto de ti!
			</div>
			<button
				className={styles.button}
				onClick={handleOnClick}
				type="button"
			>
				<span>{DRESAN_EMAIL}</span>
				<div className={styles.hintMessage}>Click para copiar</div>
			</button>
		</div>
	)
}
