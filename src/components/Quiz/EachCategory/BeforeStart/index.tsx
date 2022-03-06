import { CommonOutLineBtn } from "styles/button";

interface Props {
  setIsGaming: Function;
}
export default function BeforeStart({ setIsGaming }: Props) {
  return (
    <>
      <div>
        <span>룰 설명</span>
        <span>객관식 주관식 섞여서 문제가 나옵니다.</span>
        <span>
          문제가 나타나는 순서는 무작위 이며, 틀릴 시 게임이 종료됩니다.
        </span>
      </div>
      <CommonOutLineBtn onClick={() => setIsGaming(true)}>
        start
      </CommonOutLineBtn>
    </>
  );
}
