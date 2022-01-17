import { useRouter } from "next/router";
import { CommonOutLineBtn } from "styles/button";
import { Wrap, Body } from "./style";

export default function Main() {
  const router = useRouter();
  return (
    <Wrap>
      <Body>
        <CommonOutLineBtn border="red" onClick={() => router.push("/baseball")}>
          숫자야구(미완)
        </CommonOutLineBtn>
        <CommonOutLineBtn
          border="red"
          onClick={() => router.push("/wrongword")}
        >
          다른글자찾기
        </CommonOutLineBtn>
        <CommonOutLineBtn border="red" onClick={() => router.push("/quiz")}>
          퀴즈(미완)
        </CommonOutLineBtn>
        <CommonOutLineBtn
          border="red"
          onClick={() => router.push("/onetofifty")}
        >
          1 to 50
        </CommonOutLineBtn>
      </Body>
    </Wrap>
  );
}
