import { useRouter } from "next/router";
import { Wrap, Level, Rule } from "./style";
import { CommonOutLineBtn } from "styles/button";

export default function WrongWord() {
  const router = useRouter();

  return (
    <Wrap>
      <h1>다른글자 찾기</h1>
      <Rule>
        <span>rule :</span>
        <br />
        <span>레벨을 선택하면 시간이 흐릅니다.</span>
        <br />
        <span>다른 나머지 글자와 다른 한 글자를 찾으면 승리</span>
      </Rule>
      <Level>
        <h3>레벨선택</h3>
        <div>
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <CommonOutLineBtn
                key={idx}
                onClick={() => router.push(`/wrongword/${idx + 1}`)}
              >
                레벨 {idx + 1}
              </CommonOutLineBtn>
            ))}
        </div>
      </Level>
    </Wrap>
  );
}
