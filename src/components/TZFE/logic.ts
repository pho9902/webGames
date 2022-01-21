export const makeRandomNum = (board: number[][]): number[][] => {
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

export const makeGameBoard = (): number[][] => {
  const newBoard = Array.from(Array(4), () => Array(4).fill(0));
  makeRandomNum(newBoard);
  return newBoard;
};

export const pipe =
  (...functions: any) =>
  (input: any) =>
    functions.reduce((acc: Function, fn: Function) => fn(acc), input);

export const slideRight = (board: number[][]) => {
  const version = board.length;
  const newBoard = board.map((row, r) => {
    let remain = row.filter(n => n != 0);
    let zero_cnt = version - remain.length;
    let newRow = Array(zero_cnt).fill(0).concat(remain);
    return newRow;
  });
  return newBoard;
};

export const slideLeft = (board: number[][]) => {
  const version = board.length;
  return board.map((row, r) => {
    let remain = row.filter(n => n != 0);
    let zero_cnt = version - remain.length;
    let newRow = remain.concat(Array(zero_cnt).fill(0));
    return newRow;
  });
};

export const mergeNum = (board: number[][]) => {
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

export const isSameBoard = (
  board1: number[][],
  board2: number[][]
): boolean => {
  return board1.every((row, r) => {
    return row.every((n, c) => {
      return board2[r][c] === n;
    });
  });
};

export function transposeCCW(board: number[][]): number[][] {
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

export function transposeCW(board: number[][]): number[][] {
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

export const moveRight = (board: number[][]) => {
  const nextBoard = pipe(slideRight, mergeNum, slideRight)(board);
  if (isSameBoard(board, nextBoard)) return board; // 변화 없으면 그대로
  return makeRandomNum(nextBoard); // 변화 있으면 숫자 생성
};

export const moveLeft = (board: number[][]) => {
  const nextBoard = pipe(slideLeft, mergeNum, slideLeft)(board);
  if (isSameBoard(board, nextBoard)) return board; // 변화 없으면 그대로
  return makeRandomNum(nextBoard); // 변화 있으면 숫자 생성
};

export const moveTop = (board: number[][]) => {
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

export const moveBottom = (board: number[][]) => {
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

export const isMovingKey = (keycode: number) => {
  return KEYCODE.find((element: number) => element === keycode) !== undefined;
};

export const isGenerateAvailable = (board: number[][]): boolean => {
  let check = false;
  board.forEach(row =>
    row.forEach(n => {
      if (n === 0) check = true;
    })
  );
  return check;
};

export const isGameOver = (board: number[][]) => {
  if (moveLeft(board) !== board) return false;
  if (moveRight(board) !== board) return false;
  if (moveTop(board) !== board) return false;
  if (moveBottom(board) !== board) return false;
  return true;
};
