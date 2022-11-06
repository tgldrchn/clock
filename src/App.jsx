import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [work, setWork] = useState(false);
  useEffect(() => {
    let timer;
    if (work) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [work]);
  return (
    <div className="body">
      <div className="container">
        <div className="clock">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button onClick={() => setWork(true)}>Start</button>
          <button onClick={() => setWork(false)}>Stop</button>
          <button onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
