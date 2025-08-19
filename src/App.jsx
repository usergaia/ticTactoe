import './styles/App.css';
import { GameBoard } from './components/board';

function App() {
  return (
    <>
      <h1 className="relative bottom-11 mt-8 mb-2 size-0.5 font-serif text-black">
        ticTactoe
      </h1>

      <GameBoard />
    </>
  );
}

export default App;
