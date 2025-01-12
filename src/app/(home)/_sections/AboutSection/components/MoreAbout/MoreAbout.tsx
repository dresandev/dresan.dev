import { ColombiaFlagIcon } from "~/components/Svg/ColombiaFlagIcon"
import { ReactIcon } from "~/components/Svg/ReactIcon"
import { VueJsIcon } from "~/components/Svg/VueJsIcon"
import styles from "./MoreAbout.module.css"

export const MoreAbout = () => {
  return (
    <div data-name="moreAbout">
      <h3>Un poco más</h3>
      <p className={styles.text}>
        Soy de Colombia <ColombiaFlagIcon /> y disfruto aprender sobre el mundo del desarrollo de software, valoro los pequeños detalles y soy gran fan de CSS (¡el mejor lenguaje de programación! 🙂).
      </p>
      <p className={styles.text}>
        En mi tiempo libre suelo consumir contenido sobre tecnología, jugar videojuegos, mejorar mi creatividad y habilidades de comunicación, solucionar problemas o generar ideas para mis proyectos.
      </p>

      <p className={styles.text}>
        Me gusta mucho trabajar en la web, hacer que sea un lugar accesible, agradable y eficiente para todo tipo de usuarios.
      </p>

      <p className={styles.text}>
        Actualmente, estoy profundizando mi conocimiento en el ecosistema de React <ReactIcon />, pero siempre estoy dispuesto a aprender nuevas tecnologías (Vue.js <VueJsIcon />).
      </p>
    </div>
  )
}
