import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount((currcount) => {
      return currcount + 1;
    });
    setCount((currcount) => {
      return currcount + 1;
    });
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase count</button>
    </div>
  );
}
