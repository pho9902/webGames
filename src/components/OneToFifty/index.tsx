import { useState } from "react";
import { CellContainer, Body, Wrap, H2, Btn } from "./style";

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
          <Btn onClick={() => startGame()}>start</Btn>
        ) : (
          numbers.map((num, idx) => {
            return (
              <CellContainer
                isBig={num > 25}
                onClick={() => onClickTd(num)}
                key={idx}
              >
                <H2>{num !== 0 ? num : null}</H2>
              </CellContainer>
            );
          })
        )}
      </Body>
    </Wrap>
  );
}
