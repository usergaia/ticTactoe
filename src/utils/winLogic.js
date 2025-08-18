export function checkWin(board) {
  const winningCombos = [
    //column
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //row
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  console.log(board);

  for (const combo of winningCombos) {
    let a = combo[0];
    let b = combo[1];
    let c = combo[2];

    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
