import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  function addFive(): number {
    setCount((count) => count + 5);
    return 0;
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={addFive}>+5</button>
    </>
  );
};

export default Counter;
