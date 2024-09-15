import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incCount() {
    console.log(count+1);
    setCount(count + 1);
  }

  return (
    <div>
      <h2>count = {count}</h2>
      <button onClick={incCount}>Increase count</button>
    </div>
  );
}
