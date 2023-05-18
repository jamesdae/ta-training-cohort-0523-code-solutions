import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Button 1" color="orange" />
      <ToggleButton text="Button 2" color="blue" />
      <ToggleButton text="Button 3" color="green" />
    </div>
  );
}

export default App;
