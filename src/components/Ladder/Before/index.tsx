import { CommonFillBtn } from "styles/button";

interface Props {
  count: number;
  setCount: Function;
  setIsPlay: Function;
}
export default function Before({ count, setCount, setIsPlay }: Props) {
  return (
    <>
      <div>
        {count === 2 ? (
          <button>마이너스</button>
        ) : (
          <button onClick={() => setCount(count - 1)}>마이너스</button>
        )}

        <input value={count} onChange={e => setCount(Number(e.target.value))} />
        <button onClick={() => setCount(count + 1)}>플러스</button>
      </div>
      <CommonFillBtn background="orange" onClick={() => setIsPlay(true)}>
        Start!
      </CommonFillBtn>
    </>
  );
}
