import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`toggle-switch ${isClicked ? 'is-on' : ''}`}
      onClick={() => setIsClicked(!isClicked)}>
      <div className="slider">
        <div className="switch" />
      </div>
      <div className="state-label">{isClicked ? 'On' : 'Off'}</div>
    </div>
  );
}
