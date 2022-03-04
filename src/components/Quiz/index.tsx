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
      <CommonOutLineBtn>cs</CommonOutLineBtn>
      <CommonOutLineBtn>넌센스</CommonOutLineBtn>
    </div>
  );
}
