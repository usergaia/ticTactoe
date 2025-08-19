export function getMove(board) {
  console.log('Bot moved!');

  const availableCells = [];

  board.forEach((cell, idx) => {
    if (cell === null) {
      availableCells.push(idx);
    }
  });

  return availableCells[Math.floor(Math.random() * availableCells.length)];
}
