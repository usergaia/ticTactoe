import { useState, useEffect } from 'react';

export function UpdateGameMode() {
  const [isPlayerMode, setIsPlayerMode] = useState(true);

  // useEffect(() => {
  //   //todo: change bg color based on game mode and add some designs ig
  // }, [isPlayerMode]);

  const toggleGameMode = () => {
    setIsPlayerMode((prev) => !prev);
  };

  return {
    isPlayerMode,
    toggleGameMode,
  };
}
