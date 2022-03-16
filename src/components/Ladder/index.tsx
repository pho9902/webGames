import { useState } from "react";
import { Wrap } from "./style";
import Before from "./Before";

export default function Ladder() {
  const [count, setCount] = useState<number>(2);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  return (
    <Wrap>
      {isPlay ? (
        <div>{count}</div>
      ) : (
        <Before count={count} setCount={setCount} setIsPlay={setIsPlay} />
      )}
    </Wrap>
  );
}
