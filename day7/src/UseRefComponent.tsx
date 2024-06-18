import React, { useRef, useState } from "react";

export default function UseRefComponent() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  let intervalRef = useRef<NodeJS.Timeout | null>(null);

  function handleStart(): void {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current!);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
    console.log(typeof intervalRef);
  }

  function handleStop() {
    clearInterval(intervalRef.current!);
  }

  let secondsPassed: number = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
