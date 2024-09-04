import Image from "next/image";
import Link from "next/link";
import styles from "../styles/testsBar.module.css";

export default function TestsBar() {
  return (
    <section>
      <div className={styles.appbar}>
        <Link href="/">
          <Image
            src="/arrowLeft.svg"
            alt="Arrow"
            width={19.5}
            height={15.5}
            className={styles.arrow}
          />
        </Link>
        <span className={styles.appbar_title}>Learning</span>
      </div>
      <div className={styles.tab}>
        <span>Tests</span>
        <div className={styles.tab_line}></div>
      </div>
    </section>
  );
}
