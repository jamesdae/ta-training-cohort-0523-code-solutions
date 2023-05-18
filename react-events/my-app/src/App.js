import CustomButton from './CustomButton';
import './App.css';

function App() {
  function handleClick(text) {
    window.alert(`Clicked ${text}`);
  }

  return (
    <div className="App">
      <CustomButton color="green" text="One" onCustomClick={handleClick} />
      <CustomButton color="pink" text="Two" onCustomClick={handleClick} />
      <CustomButton color="blue" text="Three" onCustomClick={handleClick} />
    </div>
  );
}

export default App;
