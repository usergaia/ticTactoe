import { useState, useEffect, useRef } from 'react';

export function UpdateScore(winner, isFull) {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [tieScore, setTieScore] = useState(0);
  const lastRound = useRef({ winner: null, isFull: false });

  useEffect(() => {
    if (winner && lastRound.current.winner !== winner) {
      if (winner === 'X') setScoreX((s) => s + 1);
      if (winner === 'O') setScoreO((s) => s + 1);
      lastRound.current = { winner, isFull };
    } else if (
      !winner &&
      isFull &&
      (!lastRound.current.isFull || lastRound.current.winner)
    ) {
      setTieScore((s) => s + 1);
      lastRound.current = { winner: null, isFull };
    } else if (!winner && !isFull) {
      lastRound.current = { winner: null, isFull: false };
    }
  }, [winner, isFull]);

  const clearScore = () => {
    setScoreX(0);
    setScoreO(0);
    setTieScore(0);
  };

  return { scoreX, scoreO, tieScore, clearScore };
}
