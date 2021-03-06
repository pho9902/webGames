import { useState } from "react";
import {
  CellContainer,
  Body,
  Wrap,
  H2,
  Btn,
  TimerContainer,
  Restart,
  Rule,
} from "./style";
import Timer from "./Timer";

let array: number[] = [];
const secondData: number[] = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
  secondData.push(51 - i);
}

function shuffle(array: number[]): number[] {
  return array.sort(() => Math.random() - 0.5);
}

shuffle(secondData);

export default function OneToFifty() {
  const [numbers, setNumbers] = useState<number[]>(array);
  const [nextNumbers, setNextNumbers] = useState<number[]>(secondData);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);
  const [time, setTime] = useState<number>(0);

  const onClickTd = (num: number) => {
    if (num === current) {
      if (num === 50) {
        endGame();
        alert(`걸린시간 ${time}초`);
      }
      const index = numbers.indexOf(num);

      setNumbers(numbers => [
        ...numbers.slice(0, index),
        num < 26 ? nextNumbers[index] : 0,
        ...numbers.slice(index + 1),
      ]);
      setCurrent(current => current + 1);
    }
  };

  const startGame = () => {
    setNumbers(shuffle(array));
    setCurrent(1);
    setGameFlag(true);
    setTime(0);
  };
  const endGame = () => {
    setGameFlag(false);
  };

  return (
    <Wrap>
      {!gameFlag ? (
        <Rule>
          <span>rule : 1부터 50까지의 무작위 숫자를 빠르게 누르세요</span>
          <Btn onClick={() => startGame()}>start</Btn>
        </Rule>
      ) : (
        <Body>
          {numbers.map((num, idx) => {
            return (
              <CellContainer
                isBig={num > 25}
                onClick={() => onClickTd(num)}
                key={idx}
              >
                <H2>{num !== 0 ? num : null}</H2>
              </CellContainer>
            );
          })}
        </Body>
      )}
      <TimerContainer>
        {gameFlag && (
          <div>
            <Timer time={time} setTime={setTime} />
            <Restart onClick={() => setGameFlag(false)}>재시작</Restart>
          </div>
        )}
      </TimerContainer>
    </Wrap>
  );
}
