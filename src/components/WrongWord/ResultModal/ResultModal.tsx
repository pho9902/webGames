import { useRouter } from "next/router";
import { Modal, Wrap, ButtonContainer } from "./style";
import { CommonOutLineBtn } from "../../../styles/button";

interface Props {
  result: string;
}

export default function ResultModal({ result }: Props) {
  const router = useRouter();
  return (
    <Wrap>
      <Modal>
        <div>성공</div>
        <div>걸린 시간 : {result}</div>
        <ButtonContainer>
          <CommonOutLineBtn onClick={() => router.push("/wrongword")}>
            난이도 재선택
          </CommonOutLineBtn>
          <CommonOutLineBtn onClick={() => router.reload()}>
            재도전
          </CommonOutLineBtn>
          <CommonOutLineBtn onClick={() => router.push("/")}>
            메인
          </CommonOutLineBtn>
        </ButtonContainer>
      </Modal>
    </Wrap>
  );
}
