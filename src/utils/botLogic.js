import { checkWin } from './winLogic';

export function getMove(board) {
  const botSymbol = 'O';
  const playerSymbol = 'X';
  const result = minimax(board, true, botSymbol, playerSymbol);
  return result.move;
}

function minimax(board, isMaximizing, botSymbol, playerSymbol) {
  // base cases: win/lose/draw
  const winResult = checkWin(board);
  const winner = winResult ? winResult.winner : null;
  if (winner === botSymbol) return { score: 1 };
  if (winner === playerSymbol) return { score: -1 };
  if (!board.includes(null)) return { score: 0 };

  // Minimax
  let bestScore = isMaximizing ? -Infinity : Infinity;
  let bestMove = null;

  // explore all possible board states recursively
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      const newBoard = [...board];
      newBoard[i] = isMaximizing ? botSymbol : playerSymbol;
      const result = minimax(newBoard, !isMaximizing, botSymbol, playerSymbol);
      if (isMaximizing) {
        if (result.score > bestScore) {
          bestScore = result.score;
          bestMove = i;
        }
      } else {
        if (result.score < bestScore) {
          bestScore = result.score;
          bestMove = i;
        }
      }
    }
  }
  return { score: bestScore, move: bestMove };
}
