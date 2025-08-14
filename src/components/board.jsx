export const GameBoard = () => {
  return (
    <>
      <div className="mr-4 ml-4 flex flex-row justify-between">
        <div className="utility text-black">
          <b>X</b> Turn
        </div>
        <div className="utility text-red-600">Restart</div>
      </div>

      <div className="custom-responsive mt-4 aspect-square overflow-hidden rounded-lg bg-white shadow-2xl shadow-blue-300">
        <div className="flex flex-row items-center justify-center rounded-lg">
          <div className="cells flex rounded-tl-2xl">1</div>
          <div className="cells flex border-r-2 border-l-2">2</div>
          <div className="cells flex rounded-tr-2xl">3</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="cells flex border-t-2 border-b-2">4</div>
          <div className="cells flex border-t-2 border-r-2 border-b-2 border-l-2">
            5
          </div>
          <div className="cells flex border-t-2 border-b-2">6</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="cells flex rounded-bl-2xl">7</div>
          <div className="cells flex border-r-2 border-l-2">8</div>
          <div className="cells flex rounded-br-2xl">9</div>
        </div>
      </div>
    </>
  );
};
