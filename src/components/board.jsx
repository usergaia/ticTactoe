import { UpdateBoard } from '../hooks/boardHook';
import { Players } from './players';
import { UpdateScore } from '../hooks/scoreHook';
import { UpdateGameMode } from '../hooks/toggleHook';

export const GameBoard = () => {
  const {
    boardVal,
    handleTurn,
    isFull,
    clearBoard,
    botMove,
    currentSymbol,
    winner,
  } = UpdateBoard();
  const { scoreX, scoreO, tieScore, clearScore } = UpdateScore(winner, isFull);

  const { isPlayerMode, toggleGameMode } = UpdateGameMode();

  const handleReset = () => {
    clearBoard();
    clearScore();
  };

  return (
    <>
      {/* ------------- toggle btn ------------- */}

      <div className="center relative top-8 flex items-center justify-center gap-2 select-none">
        <span className="mr-1 text-sm text-slate-600">AI</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isPlayerMode}
            onChange={() => toggleGameMode()}
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-300 transition-colors duration-300 peer-checked:bg-blue-500"></div>
          <div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full border border-gray-300 bg-white shadow transition-transform duration-300 peer-checked:translate-x-5"></div>
        </label>
        <span className="ml-1 text-sm text-slate-600">Player</span>
      </div>

      {/* ------------- header game utils and stuff ------------- */}
      <div className="mr-4 ml-4 flex flex-row justify-between">
        {winner ? (
          <div className="utility text-black">
            <b>{winner}</b> wins!
          </div>
        ) : (
          <div className="utility text-black">
            <b>{currentSymbol}</b> Turn
          </div>
        )}
        <div
          className="utility cursor-pointer text-red-600"
          onClick={handleReset}
        >
          Restart
        </div>
      </div>
      <div
        className={`custom-responsive relative mt-4 aspect-square overflow-hidden rounded-lg bg-white shadow-2xl ${
          winner
            ? winner === 'O'
              ? 'shadow-cyan-400'
              : 'shadow-red-500'
            : 'shadow-lime-300'
        }`}
      >
        {/* ------------- board grid ------------- */}
        {!isFull && (
          <>
            <div className="flex flex-row items-center justify-center border-b-2 border-[rgba(136,136,136,0.3)]">
              <div
                className={`cells ${boardVal[0] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-tl-2xl`}
                onClick={() => ` ${isPlayerMode ? handleTurn(0) : botMove(0)}`}
              >
                {boardVal[0]}
              </div>
              <div
                className={`cells ${boardVal[1] == null ? 'cursor-pointer' : 'pointer-none'} flex border-r-2 border-l-2`}
                onClick={() => ` ${isPlayerMode ? handleTurn(1) : botMove(1)}`}
              >
                {boardVal[1]}
              </div>
              <div
                className={`cells ${boardVal[2] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-tr-2xl`}
                onClick={() => ` ${isPlayerMode ? handleTurn(2) : botMove(2)}`}
              >
                {boardVal[2]}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center border-b-2 border-[rgba(136,136,136,0.3)]">
              <div
                className={`cells ${boardVal[3] == null ? 'cursor-pointer' : 'pointer-none'} flex`}
                onClick={() => ` ${isPlayerMode ? handleTurn(3) : botMove(3)}`}
              >
                {boardVal[3]}
              </div>
              <div
                className={`cells ${boardVal[4] == null ? 'cursor-pointer' : 'pointer-none'} flex border-r-2 border-l-2`}
                onClick={() => ` ${isPlayerMode ? handleTurn(4) : botMove(4)}`}
              >
                {boardVal[4]}
              </div>
              <div
                className={`cells ${boardVal[5] == null ? 'cursor-pointer' : 'pointer-none'} flex`}
                onClick={() => ` ${isPlayerMode ? handleTurn(5) : botMove(5)}`}
              >
                {boardVal[5]}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div
                className={`cells ${boardVal[6] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-bl-2xl`}
                onClick={() => ` ${isPlayerMode ? handleTurn(6) : botMove(6)}`}
              >
                {boardVal[6]}
              </div>
              <div
                className={`cells ${boardVal[7] == null ? 'cursor-pointer' : 'pointer-none'} flex border-r-2 border-l-2`}
                onClick={() => ` ${isPlayerMode ? handleTurn(7) : botMove(7)}`}
              >
                {boardVal[7]}
              </div>
              <div
                className={`cells ${boardVal[8] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-br-2xl`}
                onClick={() => ` ${isPlayerMode ? handleTurn(8) : botMove(8)}`}
              >
                {boardVal[8]}
              </div>
            </div>
          </>
        )}

        {/* ------------- result overlay ------------- */}
        {(winner || isFull) && (
          <div
            className={`win-blur absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-white/80 backdrop-blur-sm`}
            onClick={clearBoard}
          >
            {winner ? (
              <div className="font-serif text-3xl text-black">
                <span
                  className={`${
                    winner === 'O' ? 'text-cyan-400' : 'text-red-500'
                  }`}
                >
                  {winner}
                </span>{' '}
                wins!
              </div>
            ) : (
              <div className="font-serif text-3xl text-black">
                <span className="text-gray-500">It's a tie!</span>
              </div>
            )}

            <span className="relative mt-8 block font-serif text-sm text-black">
              Click here to continue!
            </span>
          </div>
        )}
      </div>
      {/* pass scores to Players for display */}
      <Players scoreX={scoreX} scoreO={scoreO} tieScore={tieScore} />
    </>
  );
};
