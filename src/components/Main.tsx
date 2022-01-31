import { useRouter } from "next/router";
import { CommonOutLineBtn } from "styles/button";
import { Wrap, Body } from "./style";

export default function Main() {
  const router = useRouter();
  return (
    <Wrap>
      <h2>Web Games!!</h2>
      <Body>
        <div>
          <h3>pc</h3>
          <CommonOutLineBtn border="red">테트리스</CommonOutLineBtn>
          <CommonOutLineBtn border="red">snake Game</CommonOutLineBtn>

          <h3>mobile</h3>

          <CommonOutLineBtn
            border="red"
            onClick={() => router.push("/onetofifty")}
          >
            1 to 50
          </CommonOutLineBtn>

          <h3>pc, mobile</h3>
          <CommonOutLineBtn
            border="red"
            onClick={() => router.push("/baseball")}
          >
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

          <CommonOutLineBtn border="red" onClick={() => router.push("/tzfe")}>
            2048(미완)
          </CommonOutLineBtn>
        </div>
      </Body>
    </Wrap>
  );
}
