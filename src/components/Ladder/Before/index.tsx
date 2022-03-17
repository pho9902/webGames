import { CommonFillBtn } from "styles/button";

interface Props {
  count: number;
  setCount: Function;
  setIsPlay: Function;
}
export default function Before({ count, setCount, setIsPlay }: Props) {
  const onClickStart = () => {
    if (count >= 18) {
      alert("최대 숫자는 17입니다.");
      return;
    }
    setIsPlay(true);
  };
  return (
    <>
      <div>
        {count === 2 ? (
          <button>마이너스</button>
        ) : (
          <button onClick={() => setCount(count - 1)}>마이너스</button>
        )}

        <input value={count} onChange={e => setCount(Number(e.target.value))} />
        {count === 17 ? (
          <button>플러스</button>
        ) : (
          <button onClick={() => setCount(count + 1)}>플러스</button>
        )}
      </div>
      <CommonFillBtn background="orange" onClick={() => onClickStart()}>
        Start!
      </CommonFillBtn>
    </>
  );
}
