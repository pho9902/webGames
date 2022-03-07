import { useRouter } from "next/router";
import { CommonOutLineBtn } from "styles/button";

export default function Quiz() {
  const router = useRouter();

  return (
    <div>
      <h2>주제</h2>
      <CommonOutLineBtn onClick={() => router.push("/quiz/javascript")}>
        javascript
      </CommonOutLineBtn>
      <CommonOutLineBtn onClick={() => router.push("/quiz/cs")}>
        cs
      </CommonOutLineBtn>
      <CommonOutLineBtn onClick={() => router.push("/quiz/nonsense")}>
        넌센스
      </CommonOutLineBtn>
    </div>
  );
}
