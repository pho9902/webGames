import Header from "./common/Header";
import { useRouter } from "next/router";
import styles from "styles/Main.module.scss";

export default function Main() {
  const router = useRouter();
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.body}>
        <span
          className={styles.gameTitles}
          onClick={() => router.push("/baseball")}
        >
          숫자야구
        </span>{" "}
        <br />
        <span
          className={styles.gameTitles}
          onClick={() => router.push("/wrongword")}
        >
          다른글자찾기
        </span>
        <br />
      </div>
    </div>
  );
}
