import { Cell, Tr, Wrap, Board, Numbers } from "./style";
import { useState } from "react";
import {
  isMovingKey,
  moveRight,
  moveLeft,
  moveTop,
  moveBottom,
  isGameOver,
  makeRandomNum,
} from "./logic";

const makeGameBoard = () => {
  const newBoard = Array.from(Array(4), () => Array(4).fill(0));
  makeRandomNum(newBoard);
  return newBoard;
};

export default function TZFE() {
  const [gameBoard, setGameBoard] = useState<number[][]>(makeGameBoard());

  const handleKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (isMovingKey(e.keyCode) === false) return; // 상하좌우 키 인지 체크
    let nextBoard = gameBoard;
    if (e.keyCode === 39) nextBoard = moveRight(gameBoard);
    else if (e.keyCode === 37) nextBoard = moveLeft(gameBoard);
    else if (e.keyCode === 38) nextBoard = moveTop(gameBoard);
    else if (e.keyCode === 40) nextBoard = moveBottom(gameBoard);
    setGameBoard(Array.from(nextBoard));
    if (isGameOver(gameBoard)) {
      alert("game over");
    }
  };

  return (
    <Wrap
      style={{ margin: "10px auto" }}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <Board>
        {gameBoard.map((row, r) => {
          return (
            <Tr key={`div__${r}`} style={{ margin: "0 auto" }}>
              {row.map((num, c) => {
                return (
                  <Cell key={`Cell__${r}_${c}`}>
                    <Numbers
                      len={num.toString().length}
                      key={`Numbers__${r}_${c}`}
                    >
                      {num !== 0 ? num : " "}
                    </Numbers>
                  </Cell>
                );
              })}
            </Tr>
          );
        })}
      </Board>
    </Wrap>
  );
}
