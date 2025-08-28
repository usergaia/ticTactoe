import { UpdateBoard } from '../hooks/boardHook';
import { Cell } from './cell';
import { Players } from './players';
import { UpdateScore } from '../hooks/scoreHook';
import { UpdateGameMode } from '../hooks/toggleHook';
import { BsRobot } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';

export const GameBoard = () => {
  const {
    boardVal,
    handleTurn,
    isFull,
    clearBoard,
    botMove,
    currentSymbol,
    winner,
    isThinking,
    winCell,
  } = UpdateBoard();

  const { scoreX, scoreO, tieScore, clearScore } = UpdateScore(winner, isFull);

  const { isPlayerMode, toggleGameMode } = UpdateGameMode();

  const handleReset = () => {
    clearBoard();
    clearScore();
  };

  const handleToggle = () => {
    clearBoard();
    toggleGameMode();
  };

  return (
    <>
      {/* ------------- toggle btn ------------- */}
      <div className="center relative top-8 flex items-center justify-center gap-2 select-none">
        <label
          className={
            'relative m-0 block h-[30px] w-[70px] cursor-pointer overflow-hidden rounded-[5px] border-0 border-solid border-[#CCC]'
          }
        >
          <input
            type="checkbox"
            className="sr-only"
            checked={isPlayerMode}
            onChange={handleToggle}
          />
          <span
            className={`absolute top-0 left-0 block h-full w-[200%] transition-[margin] duration-300 ease-in before:float-left before:box-border before:block before:h-full before:w-[50%] before:bg-[#FFE5E5] before:pl-[10px] before:content-[''] after:float-left after:box-border after:block after:h-full after:w-[50%] after:bg-[#E9EFFF] after:pr-[10px] after:content-[''] ${isPlayerMode ? 'ml-[-100%]' : 'ml-0'}`}
          ></span>
          <span
            className={`absolute top-0 bottom-0 grid h-[30px] w-[30px] place-items-center rounded-[5px] border-0 border-solid border-[#CCC] transition-all duration-300 ${isPlayerMode ? 'right-[40px] bg-[#85A0FF] shadow-[0px_0px_4px_#CFF4FF]' : 'right-0 bg-[#FF8888] shadow-[0px_0px_4px_#FECFFF]'}`}
          >
            <span className="font-bold text-white">
              {isPlayerMode ? <FaUserFriends /> : <BsRobot />}
            </span>
          </span>
        </label>
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
          className="utility [transition-timing-function:cubic-bezier(0.17 5,0.885,0.32,1.275)] relative ml-2 cursor-pointer text-red-600 transition-transform duration-300 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-red-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100 active:translate-y-1 active:scale-x-[1.1] active:scale-y-[0.9]"
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
        {/* ------------- board cells ------------- */}
        {!isFull && (
          <>
            <div className="flex flex-row items-center justify-center border-b-2 border-[rgba(136,136,136,0.3)]">
              <Cell
                index={0}
                value={boardVal[0]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(0)}
                extraClass="rounded-tl-2xl"
              />
              <Cell
                index={1}
                value={boardVal[1]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(1)}
                extraClass="border-r-2 border-l-2"
              />
              <Cell
                index={2}
                value={boardVal[2]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(2)}
                extraClass="rounded-tr-2xl"
              />
            </div>
            <div className="flex flex-row items-center justify-center border-b-2 border-[rgba(136,136,136,0.3)]">
              <Cell
                index={3}
                value={boardVal[3]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(3)}
              />
              <Cell
                index={4}
                value={boardVal[4]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(4)}
                extraClass="border-r-2 border-l-2"
              />
              <Cell
                index={5}
                value={boardVal[5]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(5)}
              />
            </div>
            <div className="flex flex-row items-center justify-center">
              <Cell
                index={6}
                value={boardVal[6]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(6)}
                extraClass="rounded-bl-2xl"
              />
              <Cell
                index={7}
                value={boardVal[7]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(7)}
                extraClass="border-r-2 border-l-2"
              />
              <Cell
                index={8}
                value={boardVal[8]}
                onClick={isPlayerMode ? handleTurn : botMove}
                disabled={isThinking}
                isWinning={winCell && winCell.includes(8)}
                extraClass="rounded-br-2xl"
              />
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
              <div className="text-3xl font-bold text-black">
                <span
                  className={`font-serif ${
                    winner === 'O' ? 'text-cyan-400' : 'text-red-500'
                  }`}
                >
                  {winner}
                </span>{' '}
                wins!
              </div>
            ) : (
              <div className="win-blur bg-white/80 text-3xl font-bold text-black backdrop-blur-sm">
                <span className="text-gray-500">It's a tie!</span>
              </div>
            )}

            <span className="relative mt-8 block text-sm text-black">
              Continue?
            </span>
          </div>
        )}
      </div>
      {/* pass scores to players.jsx for score tracking and display */}
      <Players scoreX={scoreX} scoreO={scoreO} tieScore={tieScore} />
    </>
  );
};
