import { useState } from "react";
import { CommonOutLineBtn } from "styles/button";
import { Wrap } from "./styles";

export default function WordCarpet() {
  const [isGaming, setIsGaming] = useState(false);

  return (
    <Wrap>
      {!isGaming ? (
        <div>
          <span>룰 설명 </span>
          <span>주제가 주어집니다.</span>
          <span>주제에 맞는 단어를 입력합니다.</span>
          <span>
            입력한 단어가 주제에 포함된다면 단어의 글자수 만큼 발판이
            추가됩니다.
          </span>
          <span>발판은 매 라운드 마다 레벨별로 다른 갯수 줄어듭니다.</span>

          <CommonOutLineBtn onClick={() => setIsGaming(true)}>
            시작
          </CommonOutLineBtn>
        </div>
      ) : (
        <div>하이</div>
      )}
    </Wrap>
  );
}
