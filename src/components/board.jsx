import { UpdateBoard } from '../hooks/boardHook';

export const GameBoard = () => {
  const { boardVal, handleTurn, resetBoard, currentSymbol } = UpdateBoard();
  return (
    <>
      <div className="mr-4 ml-4 flex flex-row justify-between">
        <div className="utility text-black">
          <b>{currentSymbol}</b> Turn
        </div>
        <div
          className="utility cursor-pointer text-red-600"
          onClick={resetBoard}
        >
          Restart
        </div>
      </div>

      <div className="custom-responsive mt-4 aspect-square overflow-hidden rounded-lg bg-white shadow-2xl shadow-blue-300">
        <div className="flex flex-row items-center justify-center rounded-lg">
          <div
            className={`cells ${boardVal[0] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-tl-2xl`}
            onClick={() => handleTurn(0)}
          >
            {boardVal[0]}
          </div>
          <div
            className={`cells ${boardVal[1] == null ? 'cursor-pointer' : 'pointer-none'} flex border-r-2 border-l-2`}
            onClick={() => handleTurn(1)}
          >
            {boardVal[1]}
          </div>
          <div
            className={`cells ${boardVal[2] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-tr-2xl`}
            onClick={() => handleTurn(2)}
          >
            {boardVal[2]}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div
            className={`cells ${boardVal[3] == null ? 'cursor-pointer' : 'pointer-none'} flex border-t-2 border-b-2`}
            onClick={() => handleTurn(3)}
          >
            {boardVal[3]}
          </div>
          <div
            className={`cells ${boardVal[4] == null ? 'cursor-pointer' : 'pointer-none'} flex border-t-2 border-r-2 border-b-2 border-l-2`}
            onClick={() => handleTurn(4)}
          >
            {boardVal[4]}
          </div>
          <div
            className={`cells ${boardVal[5] == null ? 'cursor-pointer' : 'pointer-none'} flex border-t-2 border-b-2`}
            onClick={() => handleTurn(5)}
          >
            {boardVal[5]}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div
            className={`cells ${boardVal[6] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-bl-2xl`}
            onClick={() => handleTurn(6)}
          >
            {boardVal[6]}
          </div>
          <div
            className={`cells ${boardVal[7] == null ? 'cursor-pointer' : 'pointer-none'} flex border-r-2 border-l-2`}
            onClick={() => handleTurn(7)}
          >
            {boardVal[7]}
          </div>
          <div
            className={`cells ${boardVal[8] == null ? 'cursor-pointer' : 'pointer-none'} flex rounded-br-2xl`}
            onClick={() => handleTurn(8)}
          >
            {boardVal[8]}
          </div>
        </div>
      </div>
    </>
  );
};
