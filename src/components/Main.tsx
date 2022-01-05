import { useRouter } from "next/router";
import styles from "styles/Main.module.scss";

export default function Main() {
  const router = useRouter();
  return (
    <div className={styles.wrap}>
      <div className={styles.body}>
        <span
          className={styles.gameTitles}
          onClick={() => router.push("/baseball")}
        >
          숫자야구(미완)
        </span>
        <span
          className={styles.gameTitles}
          onClick={() => router.push("/wrongword")}
        >
          다른글자찾기
        </span>
        <span
          className={styles.gameTitles}
          onClick={() => router.push("/quiz")}
        >
          퀴즈(미완)
        </span>
      </div>
    </div>
  );
}
