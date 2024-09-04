import styles from "../styles/testsGrid.module.css";
import Image from "next/image";

export default function TestsGrid() {
  const tests: number = 28;

  return (
    <div className={styles.grid_container}>
      {Array.from({ length: tests }, (_, i) => (
        <div key={i} className={styles.grid_item}>
          <div className={styles.checked}>
            <Image
              src="/checked.svg"
              alt="Arrow"
              width={19.5}
              height={15.5}
              className={styles.arrow}
            />
          </div>
          {i + 1}
        </div>
      ))}
    </div>
  );
}
