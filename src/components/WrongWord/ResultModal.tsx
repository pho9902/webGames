import { useRouter } from "next/router";

interface Props {
  result: boolean;
}

export default function ResultModal({ result }: Props) {
  const router = useRouter();
  return (
    <div>
      <div>성공</div>
      <div>걸린 시간 : {result}</div>
      <button onClick={() => router.push("/wrongword")}>난이도 재선택</button>
      <button onClick={() => router.reload()}>재도전</button>
      <button onClick={() => router.push("/")}>메인</button>
    </div>
  );
}
