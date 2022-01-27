import { Cell, Tr, Wrap, Board, Numbers, Buttons } from "./style";
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
import ArrowButton from "public/ArrowButton";

const makeGameBoard = () => {
  const newBoard = Array.from(Array(4), () => Array(4).fill(0));
  makeRandomNum(newBoard);
  return newBoard;
};

export default function TZFE() {
  const [gameBoard, setGameBoard] = useState<number[][]>(makeGameBoard());

  function handleKeyPress(e?: React.KeyboardEvent, direction?: string) {
    let nextBoard = gameBoard;
    if (!e) {
      switch (direction) {
        case "up":
          nextBoard = moveTop(gameBoard);
          break;
        case "down":
          nextBoard = moveBottom(gameBoard);
          break;
        case "left":
          nextBoard = moveLeft(gameBoard);
          break;
        default:
          nextBoard = moveRight(gameBoard);
          break;
      }
    } else {
      e.preventDefault();
      if (isMovingKey(e.keyCode) === false) return;
      switch (e.keyCode) {
        case 38:
          nextBoard = moveTop(gameBoard);
          break;
        case 40:
          nextBoard = moveBottom(gameBoard);
          break;
        case 37:
          nextBoard = moveLeft(gameBoard);
          break;
        default:
          nextBoard = moveRight(gameBoard);
          break;
      }
    }
    setGameBoard(Array.from(nextBoard));
    if (isGameOver(gameBoard)) {
      alert("game over");
    }
  }

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
        <Buttons>
          <ArrowButton
            direction="up"
            onClick={() => handleKeyPress(undefined, "up")}
          />
          <div>
            <ArrowButton
              direction="left"
              onClick={() => handleKeyPress(undefined, "left")}
            />
            <ArrowButton
              direction="right"
              onClick={() => handleKeyPress(undefined, "right")}
            />
          </div>
          <ArrowButton
            direction="down"
            onClick={() => handleKeyPress(undefined, "down")}
          />
        </Buttons>
      </Board>
    </Wrap>
  );
}
