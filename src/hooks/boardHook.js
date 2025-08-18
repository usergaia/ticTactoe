import { useState } from 'react';

export function UpdateBoard() {
  const [isXTurn, setisXTurn] = useState(true);
  const [boardVal, setBoardVal] = useState(Array(9).fill(null));

  const handleTurn = (idx) => {
    if (boardVal.every((cell) => cell !== null)) resetBoard();
    if (boardVal[idx]) return;
    const newBoard = [...boardVal];
    newBoard[idx] = currentSymbol;
    setBoardVal(newBoard);
    setisXTurn((prev) => !prev);
  };

  const resetBoard = () => {
    setBoardVal(Array(9).fill(null));
    setisXTurn(true);
  };

  const currentSymbol = isXTurn ? 'X' : 'O';

  return { boardVal, handleTurn, resetBoard };
}
