import React from "react";
import { useState } from "react";
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <button onClick={() => setCount(count - 1)}>👎🏼</button>
      <h2 className="number">{count}</h2>
      <button onClick={() => setCount(count + 1)}>👍🏼</button>
    </div>
  )
};

export default Counter;