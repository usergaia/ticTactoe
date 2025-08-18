import { useState } from 'react';
import { checkWin } from '../utils/winLogic';

export function UpdateBoard() {
  const [isXTurn, setisXTurn] = useState(true);
  const [boardVal, setBoardVal] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isFull, setisFull] = useState(false);

  const currentSymbol = isXTurn ? 'X' : 'O';

  const handleTurn = (idx) => {
    if (boardVal[idx] || winner) return;

    const newBoard = [...boardVal];
    newBoard[idx] = currentSymbol;
    setBoardVal(newBoard);
    setisXTurn((prev) => !prev);

    const result = checkWin(newBoard);
    setWinner(result);

    if (!result && newBoard.every((cell) => cell !== null)) {
      setisFull(true);
    }
  };

  const clearBoard = () => {
    setBoardVal(Array(9).fill(null));
    setWinner(null);
    setisXTurn(true);
    setisFull(false);
  };

  return {
    boardVal,
    handleTurn,
    isFull,
    clearBoard,
    currentSymbol,
    winner,
  };
}
