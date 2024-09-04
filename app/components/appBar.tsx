import Image from "next/image";
import crown from "../public/crown.svg";
import fire from "../public/fire.svg";
import styles from './styles/AppBar.module.css'; 

export default function appBar() {
    return(
    <div className={styles.appbar}>
        <p className={styles.appbar_title}>Ray Driving Theory</p>
        <div className={styles.rightIcons}>
          <button className={styles.button1}>
            <Image
              priority
              src={crown}
              alt="crown"
              className={styles.icon}
            />
          </button>
          <button className={styles.button2}>
            <Image
              priority
              src={fire}
              alt="fire"
              className={styles.icon}
            />
            <span className={styles.fireText}>13</span>
          </button>
        </div>
      </div>
    )
}