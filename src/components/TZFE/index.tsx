import { Tr } from "./style";

export default function TZFE() {
  const table: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const pipe =
    (...functions: any) =>
    (input: any) =>
      functions.reduce((acc: Function, fn: Function) => fn(acc), input);

  const slideRight = (board: number[][]) => {
    const version = board.length;
    const newBoard = board.map((row, r) => {
      let remain = row.filter(n => n != 0);
      let zero_cnt = version - remain.length;
      let newRow = Array(zero_cnt).fill(0).concat(remain);
      return newRow;
    });
    return newBoard;
  };

  const slideLeft = (board: number[][]) => {
    const version = board.length;
    return board.map((row, r) => {
      let remain = row.filter(n => n != 0);
      let zero_cnt = version - remain.length;
      let newRow = remain.concat(Array(zero_cnt).fill(0));
      return newRow;
    });
  };

  const mergeNum = (board: number[][]) => {
    const version = board.length;
    const newBoard = Array.from(board);
    for (let row = 0; row < version; row++) {
      for (let col = 0; col < version - 1; col++) {
        if (newBoard[row][col] === newBoard[row][col + 1]) {
          newBoard[row][col] = newBoard[row][col] + newBoard[row][col + 1];
          newBoard[row][col + 1] = 0;
        }
      }
    }
    return newBoard;
  };

  const isSameBoard = (board1: number[][], board2: number[][]): boolean => {
    return board1.every((row, r) => {
      return row.every((n, c) => {
        return board2[r][c] === n;
      });
    });
  };

  function transposeCCW(board: number[][]): number[][] {
    let version = board.length || 0;
    let newBoard = Array.from(Array(version), () => Array(version).fill(0));
    for (let i = 0; i < version; i++) {
      newBoard[i] = [];
      for (let j = 0; j < version; j++) {
        newBoard[i][j] = board[j][version - i - 1];
      }
    }
    return newBoard;
  }

  function transposeCW(board: number[][]): number[][] {
    let version = board.length || 0;
    let newBoard = Array.from(Array(version), () => Array(version).fill(0));
    for (let i = 0; i < version; i++) {
      newBoard[i] = [];
      for (let j = 0; j < version; j++) {
        newBoard[i][version - j - 1] = board[j][i];
      }
    }
    return newBoard;
  }

  const moveRight = (board: number[][]) => {
    const nextBoard = pipe(slideRight, mergeNum, slideRight)(board);
    if (isSameBoard(board, nextBoard)) return board; // 변화 없으면 그대로
    return makeRandomNum(nextBoard); // 변화 있으면 숫자 생성
  };

  const moveLeft = (board: number[][]) => {
    const nextBoard = pipe(slideLeft, mergeNum, slideLeft)(board);
    if (isSameBoard(board, nextBoard)) return board; // 변화 없으면 그대로
    return makeRandomNum(nextBoard); // 변화 있으면 숫자 생성
  };

  const moveTop = (board: number[][]) => {
    const nextBoard = pipe(
      transposeCCW,
      slideLeft,
      mergeNum,
      slideLeft,
      transposeCW
    )(board);
    if (isSameBoard(board, nextBoard)) return board;
    return makeRandomNum(nextBoard);
  };

  const moveBottom = (board: number[][]) => {
    const nextBoard = pipe(
      transposeCCW,
      slideRight,
      mergeNum,
      slideRight,
      transposeCW
    )(board);
    if (isSameBoard(board, nextBoard)) return board;
    return makeRandomNum(nextBoard);
  };

  const KEYCODE = [37, 38, 39, 40];

  const isMovingKey = (keycode: number) => {
    return KEYCODE.find((element: number) => element === keycode) !== undefined;
  };

  const isGenerateAvailable = (board: number[][]): boolean => {
    let check = false;
    board.forEach(row =>
      row.forEach(n => {
        if (n === 0) check = true;
      })
    );
    return check;
  };

  const makeRandomNum = (board: number[][]): number[][] => {
    if (!isGenerateAvailable(board)) {
      return board;
    }
    const version = board.length;
    let ranNum = Math.floor(Math.random() * version * version);
    const row = Math.floor(ranNum / version);
    const column = ranNum % version;
    if (board[row][column] == 0) {
      board[row][column] = version !== 4 ? version : 2;
      return board;
    } else {
      return makeRandomNum(board);
    }
  };

  return (
    <div style={{ margin: "10px auto" }}>
      {/* <input
        style={{
          border: "none",
          cursor: "default",
          textAlign: "center",
          fontSize: "2.5vw",
          margin: "10px 0",
          color: "#4b4b4b",
        }}
        onKeyDown={handleKeyPress}
        onKeyUp={handleKeyUp}
        ref={gameDoing}
        value={text}
        readOnly
      ></input> */}
      {table.map((row, r) => {
        return (
          <Tr key={`div__${r}`} style={{ margin: "0 auto" }}>
            {row.map((num, c) => {
              return (
                <div
                  // version={version}
                  // value={num}
                  // customTheme={theme}
                  key={`div__${r}_${c}`}
                >
                  <h2 key={`H2__${r}_${c}`}>{num !== 0 ? num : "d"}</h2>
                </div>
              );
            })}
          </Tr>
        );
      })}
    </div>
  );
}
