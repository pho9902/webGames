import { useState } from "react";
import { Wrap } from "./style";
import Before from "./Before";
import After from "./After";

export default function Ladder() {
  const [count, setCount] = useState<number>(2);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  return (
    <Wrap>
      {isPlay ? (
        // <After count={count} />
        <div>사다리</div>
      ) : (
        <Before count={count} setCount={setCount} setIsPlay={setIsPlay} />
      )}
    </Wrap>
  );
}
