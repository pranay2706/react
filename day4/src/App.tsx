import React, { useState } from "react";

interface Position {
  x: number;
  y: number;
}

const App: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e: React.PointerEvent<HTMLDivElement>) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
};

export default App;
