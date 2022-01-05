import styles from "styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span>Web Games!!</span>
        <span>games</span>
      </div>
    </div>
  );
}
