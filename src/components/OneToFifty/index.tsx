import { useState } from "react";
import { CellContainer, Body, Wrap } from "./style";

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

  const onClickTd = (num: number) => {
    if (num === current) {
      if (num === 50) {
        console.log("Success");
        endGame();
      }
      const index = numbers.indexOf(num);
      console.log(nextNumbers);

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
  };
  const endGame = () => {
    setGameFlag(false);
  };

  return (
    <Wrap>
      <Body>
        {!gameFlag ? (
          <button onClick={() => startGame()}>start</button>
        ) : (
          numbers.map((num, idx) => {
            return (
              <CellContainer onClick={() => onClickTd(num)} key={idx}>
                {num !== 0 ? num : null}
              </CellContainer>
            );
          })
        )}
      </Body>
    </Wrap>
  );
}
