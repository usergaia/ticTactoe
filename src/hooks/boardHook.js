import { useState, useEffect } from 'react';
import { checkWin } from '../utils/winLogic';
import { getMove } from '../utils/botLogic';

export function UpdateBoard() {
  const [isXTurn, setisXTurn] = useState(true);
  const [boardVal, setBoardVal] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [winCell, setWinCell] = useState(null);
  const [isFull, setisFull] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const currentSymbol = isXTurn ? 'X' : 'O';

  // pvp mode
  const handleTurn = (idx) => {
    if (boardVal[idx] || winner) return;

    const newBoard = [...boardVal];
    newBoard[idx] = currentSymbol;
    setBoardVal(newBoard);
    setisXTurn((prev) => !prev);

    // check for winner
    const result = checkWin(newBoard);
    setWinner(result ? result.winner : null);
    setWinCell(result ? result.win_cell : null);

    if (!result && newBoard.every((cell) => cell !== null)) {
      setisFull(true);
    }
  };

  // bot mode
  const botMove = (idx) => {
    if (boardVal[idx] || winner || isThinking) return;

    setIsThinking(true);

    let newBoard = [...boardVal];
    newBoard[idx] = currentSymbol;
    setBoardVal(newBoard);
    setisXTurn((prev) => !prev);

    // add delay during recursion
    setTimeout(() => {
      const botSymbol = currentSymbol === 'X' ? 'O' : 'X';
      const botIdx = getMove(newBoard);
      let botBoard = [...newBoard];
      if (botIdx !== undefined && botIdx !== -1) {
        botBoard[botIdx] = botSymbol;
      }

      let botResult = checkWin(botBoard);
      setBoardVal(botBoard);
      setWinner(botResult ? botResult.winner : null);
      setWinCell(botResult ? botResult.win_cell : null);

      if (!botResult && botBoard.every((cell) => cell !== null)) {
        setisFull(true);
      }

      setisXTurn((prev) => !prev);
      setIsThinking(false);
    }, 650);
  };

  const clearBoard = () => {
    setBoardVal(Array(9).fill(null));
    setWinner(null);
    setWinCell(null);
    setisXTurn(true);
    setisFull(false);
  };

  useEffect(() => {
    if (!winner) setWinCell(null);
  }, [winner]);

  return {
    boardVal,
    handleTurn,
    isFull,
    clearBoard,
    currentSymbol,
    winner,
    botMove,
    isThinking,
    winCell,
  };
}
