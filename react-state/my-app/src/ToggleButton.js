import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);

  console.log('this is the value of isClicked state:', isClicked);

  function handleClick() {
    console.log(
      'this is the value of isClicked state before calling setter:',
      isClicked
    );
    setIsClicked(!isClicked);
    console.log(
      'this is the value of isClicked state after calling setter:',
      isClicked
    );
  }

  if (!isClicked) {
    return (
      <button style={{ backgroundColor: 'white' }} onClick={handleClick}>
        {text}
      </button>
    );
  } else {
    return (
      <button style={{ backgroundColor: color }} onClick={handleClick}>
        {text}
      </button>
    );
  }
}
