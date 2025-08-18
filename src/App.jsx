import './styles/App.css';
import { GameBoard } from './components/board';
// import { UpdateMode } from './hooks/toggleBtn';

function App() {
  return (
    <>
      <div className="flex flex-col items-end gap-6">
        <div className="relative inline-flex gap-2">
          <div className="h-5 w-11">
            <input
              id="switch-component-ripple-on"
              type="checkbox"
              className="peer h-5 w-11 cursor-pointer appearance-none rounded-full bg-blue-500 transition-colors duration-300 checked:bg-slate-800"
            />

            {/* toggle button */}
            <label
              htmlFor="switch-component-ripple-on"
              className="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-green-300 bg-red-400 shadow-sm transition-all duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
            >
              <div
                className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>

          <label
            htmlFor="switch-component-ripple-on"
            className="cursor-pointer text-sm text-slate-600"
          ></label>
        </div>
      </div>

      <h1 className="relative bottom-11 mt-8 mb-2 size-0.5 font-serif text-black">
        ticTactoe
      </h1>
      <GameBoard />
    </>
  );
}

export default App;
