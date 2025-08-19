import { useState } from 'react';

export function UpdateGameMode() {
  const [isPlayerMode, setIsPlayerMode] = useState(true);

  const toggleGameMode = () => {
    setIsPlayerMode((prev) => !prev);
  };

  return {
    isPlayerMode,
    toggleGameMode,
  };
}
