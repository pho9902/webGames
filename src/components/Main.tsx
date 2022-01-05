import Header from "./common/Header";
import { useRouter } from "next/router";
import styles from "styles/Main.module.scss";

export default function Main() {
  const router = useRouter();
  return (
    <div className={styles.wrap}>
      <Header />
      <div>
        <span onClick={() => router.push("/baseball")}>숫자야구</span> <br />
        <span onClick={() => router.push("/wrongword")}>다른글자찾기</span>{" "}
        <br />
        <span>다른그림찾기</span>
      </div>
    </div>
  );
}
