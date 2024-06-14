import React, { useState } from "react";
import Counter from "./Counter";

const Scoreboard: React.FC = () => {
  const [isPlayerA, setIsPlayerA] = useState<boolean>(true);

  return (
    <div>
      {isPlayerA && <Counter person="Taylor" />}
      {!isPlayerA && <Counter person="Sarah" />}
      <button onClick={() => setIsPlayerA(!isPlayerA)}>Next player!</button>
    </div>
  );
};

export default Scoreboard;
