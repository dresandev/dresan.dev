"use client"

import { useRef, useState, useTransition } from "react"
import { sendEmail } from "~/actions/send-message"
import { useTimeout } from "~/hooks/use-timeout"
import { Button } from "~/components/Ui/Button"
import { Label } from "~/components/Ui/Label"
import { TextField } from "~/components/Ui/TextField"
import { MessageCard } from "~/components/MessageCard"
import styles from "./ContactForm.module.css"

const RESET_MESSAGE_TIME = 6000

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null)
	const [isPending, startTransition] = useTransition()
	const [responseMessage, setResponseMessage] = useState<null | string>(null)
	const [hasError, setHasError] = useState(false)

	useTimeout(() => {
		setResponseMessage(null)
	}, RESET_MESSAGE_TIME)

	const formAction = async (formData: FormData) => {
		startTransition(async () => {
			const response = await sendEmail(formData)

			if (response.error) {
				setResponseMessage(response.error)
				setHasError(true)
				return
			}

			setResponseMessage("Gracias por tu mensaje ❤️, responderé lo antes posible.")
			setHasError(false)
			formRef.current?.reset()
		})
	}

	return (
		<form ref={formRef} className={styles.form} action={formAction}>
			<Label>
				<span className={styles.labelWrapper}>Nombre</span>
				<TextField placeholder="Pepito Perez Pepian" name="name" autoComplete="name" required />
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Correo</span>
				<TextField
					placeholder="pepito@perez.com"
					type="email"
					name="email"
					autoComplete="email"
					required
				/>
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Mensaje</span>
				<TextField
					multiline
					placeholder="Hola Dresan, (Tu bonito mensaje)"
					name="message"
					required
				/>
			</Label>
			<Button disabled={isPending} size="medium">
				Enviar
			</Button>
			{responseMessage && (
				<MessageCard variant={hasError ? "error" : "success"}>
					{responseMessage}
				</MessageCard>
			)}
		</form>
	)
}
