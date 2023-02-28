import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <button onClick={() => setCount(
        count + 1
      )}>👍🏼</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(
        count - 1
      )}>👎🏼</button>
    </div>
  )
};

export default Counter;