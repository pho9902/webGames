import { useState } from "react";
import { Wrap } from "./style";
import SettingGame from "./SettingGame";
import GameBoard from "./GameBoard";

export default function Ladder() {
  const [count, setCount] = useState<number>(2);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  return (
    <Wrap>
      {isPlay ? (
        <GameBoard count={count} />
      ) : (
        <SettingGame count={count} setCount={setCount} setIsPlay={setIsPlay} />
      )}
    </Wrap>
  );
}
