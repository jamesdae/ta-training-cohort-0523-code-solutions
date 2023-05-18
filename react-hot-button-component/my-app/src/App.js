import HotButton from './HotButton';
import './App.css';

function App() {
  function getTemperature(count) {
    if (count < 4) return 'cold';
    if (count < 7) return 'cool';
    if (count < 10) return 'tepid';
    if (count < 13) return 'warm';
    if (count < 16) return 'hot';
    else return 'nuclear';
  }

  return (
    <div className="App">
      <HotButton text="Hot Button" getTemperature={getTemperature} />
    </div>
  );
}

export default App;
