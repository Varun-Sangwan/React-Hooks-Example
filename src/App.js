import "./App.css";
import { useEffect, useState } from "react";
import { randomColor } from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(randomColor());

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function square() {
    setCount((prevCount) => prevCount * prevCount);
  }

  function cube() {
    setCount((prevCount) => prevCount * prevCount * prevCount);
  }

  function reset() {
    setCount(0);
  }

  useEffect(() => {
    setColor(randomColor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment!</button>
      <button onClick={decrement}>Decrement!</button>
      <button onClick={square}>Square!</button>
      <button onClick={cube}>Cube!</button>
      <button onClick={reset}>Reset!</button>
    </div>
  );
}

export default App;
