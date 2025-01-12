import styles from "./Greeting.module.css"

export const Greeting = () => {
  return (
    <div data-name="greeting" className={styles.wrapper}>
      <img
        className={styles.backgroundImage}
        src="/assets/images/skin.webp"
        width={388}
        height={548}
        alt=""
      />
      <div className={styles.messageList}>
        <div className={styles.message}>
          ¡Hola! 🖖🏼
        </div>
        <div className={styles.message}>
          Me llamo Javier Andrés
        </div>
        <div className={styles.message}>
          ¡Pero puedes decirme Dresan!
        </div>
        <div className={styles.message}>
          Te dejo mi <a className={styles.emailLink} href="mailto:dresan.dev@gmail.com" target="_blank">correo</a> para ponernos en contacto 🫱🏼
        </div>
      </div>
    </div>
  )
}
