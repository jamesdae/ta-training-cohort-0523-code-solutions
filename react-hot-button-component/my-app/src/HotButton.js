import { useState } from 'react';
import './HotButton.css';

export default function HotButton({ text, getTemperature }) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className={`hot-button ${getTemperature(count)}`}>
      {text}
    </button>
  );
}
