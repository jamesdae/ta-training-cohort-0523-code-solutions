import './App.css';
import CustomButton from './CustomButton';
import './CustomButton.css';

function App() {
  return (
    <div>
      <CustomButton text={'I'} color="light-green" />
      <CustomButton text={'know'} color="aqua" />
      <CustomButton text={'React!'} color="light-pink" />
    </div>
  );
}

export default App;
