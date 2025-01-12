import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
} from "~/components/Ui/Dialog"
import { X } from "~/components/Svg/X"
import { ContactForm } from "~/components/ContactForm"
import styles from "./ContactModal.module.css"

interface Props {
	trigger: React.ReactNode
}

export const ContactModal: React.FC<Props> = ({ trigger }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogPortal>
				<DialogOverlay />
				<DialogContent className={styles.content}>
					<DialogClose aria-label="Cerrar" className={styles.close}>
						<X />
					</DialogClose>
					<DialogTitle>Contactar</DialogTitle>
					<ContactForm />
				</DialogContent>
			</DialogPortal>
		</Dialog>
	)
}
