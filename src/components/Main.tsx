import Header from "./common/Header";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  return (
    <div>
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
