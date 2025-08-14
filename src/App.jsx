import './styles/App.css';
import { GameBoard } from './components/board';
import { Players } from './components/players';

function App() {
  return (
    <>
      <div class="flex flex-col items-end gap-6">
        <div class="relative inline-flex gap-2">
          <div class="h-5 w-11">
            <input
              id="switch-component-ripple-on"
              type="checkbox"
              class="peer h-5 w-11 cursor-pointer appearance-none rounded-full bg-blue-500 transition-colors duration-300 checked:bg-slate-800"
            />

            {/* toggle button */}
            <label
              for="switch-component-ripple-on"
              class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-green-300 bg-red-400 shadow-sm transition-all duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
            >
              <div
                class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>

          <label
            for="switch-component-ripple-on"
            class="cursor-pointer text-sm text-slate-600"
          ></label>
        </div>
      </div>

      <h1 className="relative bottom-11 mt-8 mb-2 size-0.5 font-serif text-black">
        ticTactoe
      </h1>
      <GameBoard />
      <Players />
    </>
  );
}

export default App;
