export const Players = ({ scoreX, scoreO, tieScore }) => {
  return (
    <>
      {/* player container */}
      <div className="players mt-10">
        <div className="flex flex-row rounded-lg">
          <div className="player-cont inset-2 border-2 border-l-8 border-red-700/10 border-l-red-700 bg-[#ff8a5c4d] text-left font-mono font-bold shadow-lg">
            Player <span className="text-red-600">X</span>
          </div>
          <div className="player-cont inset-2 ml-8 border-2 border-l-8 border-blue-700/10 border-l-cyan-400 bg-cyan-300/20 text-left font-mono font-bold shadow-xl">
            Player <span className="text-cyan-600">Ｏ</span>
          </div>
        </div>

        {/* score container */}
        <div className="flex flex-row rounded-lg">
          <div className="score-cont-x">
            <span className="score text-rose-600">{scoreX}</span>
          </div>
          <div className="score-cont-o">
            <span className="score text-cyan-600">{scoreO}</span>
          </div>
        </div>
        <div className="text-black">
          <span className="font-mono font-bold text-black">
            Tie: {tieScore}
          </span>
        </div>
      </div>
    </>
  );
};
