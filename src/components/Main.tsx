import { useRouter } from "next/router";
import { Wrap, Body, GameTitles } from "./style";

export default function Main() {
  const router = useRouter();
  return (
    <Wrap>
      <Body>
        <GameTitles onClick={() => router.push("/baseball")}>
          숫자야구(미완)
        </GameTitles>
        <GameTitles onClick={() => router.push("/wrongword")}>
          다른글자찾기
        </GameTitles>
        <GameTitles onClick={() => router.push("/quiz")}>퀴즈(미완)</GameTitles>
      </Body>
    </Wrap>
  );
}
