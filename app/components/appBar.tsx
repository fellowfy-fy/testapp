import Image from "next/image";
import styles from '../styles/AppBar.module.css'; 

export default function AppBar() {
    return(
    <div className={styles.appbar}>
        <p className={styles.appbar_title}>Ray Driving Theory</p>
        <div className={styles.rightIcons}>
          <button className={styles.button1}>
            <Image
              priority
              src="/crown.svg"
              alt="crown"
              width={24}
              height={24}
              className={styles.icon}
            />
          </button>
          <button className={styles.button2}>
            <Image
              priority
              src="/fire.svg"
              alt="fire"
              width={24}
              height={24}
              className={styles.icon}
            />
            <span className={styles.fireText}>13</span>
          </button>
        </div>
      </div>
    );
};