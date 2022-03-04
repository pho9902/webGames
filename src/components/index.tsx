import { useRouter } from "next/router";
import { CommonFillBtn } from "styles/button";
import { Wrap, Body, Category, Title } from "./style";

export default function Main() {
  const router = useRouter();
  return (
    <Wrap>
      <Title>Web Games~!</Title>
      <Body>
        <Category>
          <h3>pc</h3>
          <CommonFillBtn background="#6660FF">테트리스(미완)</CommonFillBtn>
          <CommonFillBtn background="#6660FF">snake Game(미완)</CommonFillBtn>
        </Category>
        <Category>
          <h3>mobile</h3>
          <CommonFillBtn
            background="#9F7EFF"
            onClick={() => router.push("/onetofifty")}
          >
            1 to 50
          </CommonFillBtn>
        </Category>

        <Category>
          <h3>pc, mobile</h3>
          <CommonFillBtn
            background="#0063F7"
            onClick={() => router.push("/baseball")}
          >
            숫자야구(미완)
          </CommonFillBtn>

          <CommonFillBtn
            background="#0063F7"
            onClick={() => router.push("/wrongword")}
          >
            다른글자찾기
          </CommonFillBtn>

          <CommonFillBtn
            background="#0063F7"
            onClick={() => router.push("/quiz")}
          >
            퀴즈(미완)
          </CommonFillBtn>

          <CommonFillBtn
            background="#0063F7"
            onClick={() => router.push("/tzfe")}
          >
            2048
          </CommonFillBtn>
        </Category>
      </Body>
    </Wrap>
  );
}