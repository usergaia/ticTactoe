import { UpdateBoard } from '../hooks/boardHook';
import { PlayerO } from './animO';
import { PlayerX } from './animX';
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
              <div
                className={`cells ${boardVal[0] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-tl-2xl ${winCell && winCell.includes(0) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(0) : botMove(0);
                  }
                }}
              >
                {boardVal[0] === 'O' ? (
                  <PlayerO key={`O-0-${boardVal[0]}`} />
                ) : boardVal[0] === 'X' ? (
                  <PlayerX key={`X-0-${boardVal[0]}`} />
                ) : (
                  boardVal[0]
                )}
              </div>
              <div
                className={`cells ${boardVal[1] == null ? 'cursor-pointer' : 'pointer-none'} flex border-r-2 border-l-2 ${winCell && winCell.includes(1) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(1) : botMove(1);
                  }
                }}
              >
                {boardVal[1] === 'O' ? (
                  <PlayerO key={`O-1-${boardVal[1]}`} />
                ) : boardVal[1] === 'X' ? (
                  <PlayerX key={`X-1-${boardVal[1]}`} />
                ) : (
                  boardVal[1]
                )}
              </div>
              <div
                className={`cells ${boardVal[2] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-tr-2xl ${winCell && winCell.includes(2) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(2) : botMove(2);
                  }
                }}
              >
                {boardVal[2] === 'O' ? (
                  <PlayerO key={`O-2-${boardVal[2]}`} />
                ) : boardVal[2] === 'X' ? (
                  <PlayerX key={`X-2-${boardVal[2]}`} />
                ) : (
                  boardVal[2]
                )}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center border-b-2 border-[rgba(136,136,136,0.3)]">
              <div
                className={`cells ${boardVal[3] == null ? 'cursor-pointer' : 'pointer-none'} flex ${winCell && winCell.includes(3) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(3) : botMove(3);
                  }
                }}
              >
                {boardVal[3] === 'O' ? (
                  <PlayerO key={`O-3-${boardVal[3]}`} />
                ) : boardVal[3] === 'X' ? (
                  <PlayerX key={`X-3-${boardVal[3]}`} />
                ) : (
                  boardVal[3]
                )}
              </div>
              <div
                className={`cells ${boardVal[4] == null ? 'cursor-pointer' : 'pointer-none'} flex border-r-2 border-l-2 ${winCell && winCell.includes(4) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(4) : botMove(4);
                  }
                }}
              >
                {boardVal[4] === 'O' ? (
                  <PlayerO key={`O-4-${boardVal[4]}`} />
                ) : boardVal[4] === 'X' ? (
                  <PlayerX key={`X-4-${boardVal[4]}`} />
                ) : (
                  boardVal[4]
                )}
              </div>
              <div
                className={`cells ${boardVal[5] == null ? 'cursor-pointer' : 'pointer-none'} flex ${winCell && winCell.includes(5) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(5) : botMove(5);
                  }
                }}
              >
                {boardVal[5] === 'O' ? (
                  <PlayerO key={`O-5-${boardVal[5]}`} />
                ) : boardVal[5] === 'X' ? (
                  <PlayerX key={`X-5-${boardVal[5]}`} />
                ) : (
                  boardVal[5]
                )}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div
                className={`cells ${boardVal[6] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-bl-2xl ${winCell && winCell.includes(6) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(6) : botMove(6);
                  }
                }}
              >
                {boardVal[6] === 'O' ? (
                  <PlayerO key={`O-6-${boardVal[6]}`} />
                ) : boardVal[6] === 'X' ? (
                  <PlayerX key={`X-6-${boardVal[6]}`} />
                ) : (
                  boardVal[6]
                )}
              </div>
              <div
                className={`cells ${boardVal[7] == null ? 'cursor-pointer' : 'pointer-none'} flex border-r-2 border-l-2 ${winCell && winCell.includes(7) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(7) : botMove(7);
                  }
                }}
              >
                {boardVal[7] === 'O' ? (
                  <PlayerO key={`O-7-${boardVal[7]}`} />
                ) : boardVal[7] === 'X' ? (
                  <PlayerX key={`X-7-${boardVal[7]}`} />
                ) : (
                  boardVal[7]
                )}
              </div>
              <div
                className={`cells ${boardVal[8] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-br-2xl ${winCell && winCell.includes(8) ? 'bg-green-200' : ''}`}
                onClick={() => {
                  if (!isThinking) {
                    isPlayerMode ? handleTurn(8) : botMove(8);
                  }
                }}
              >
                {boardVal[8] === 'O' ? (
                  <PlayerO key={`O-8-${boardVal[8]}`} />
                ) : boardVal[8] === 'X' ? (
                  <PlayerX key={`X-8-${boardVal[8]}`} />
                ) : (
                  boardVal[8]
                )}
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
