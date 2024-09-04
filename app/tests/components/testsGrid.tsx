import styles from "../styles/testsGrid.module.css";

export default function TestsGrid() {
  const tests = 28;

  return (
    <div className={styles.grid_container}>
      {Array.from({ length: tests }, (_, i) => (
        <div key={i} className={styles.grid_item}>
          {i + 1}
        </div>
      ))}
    </div>
  );
}
