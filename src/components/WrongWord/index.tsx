import { useRouter } from "next/router";
import styles from "styles/WrongWord/WrongWord.module.scss";

export default function WrongWord() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <h2>다른글자 찾기</h2>
      <h3>레벨선택</h3>
      <div className={styles.levels}>
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <span
              key={idx}
              onClick={() => router.push(`/wrongword/${idx + 1}`)}
            >
              레벨 {idx + 1}
            </span>
          ))}
      </div>
    </div>
  );
}
