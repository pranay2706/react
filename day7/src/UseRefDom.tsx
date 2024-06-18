import React, { useRef } from "react";

export default function UseRefDom() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick(): void {
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => handleClick()}>Focus the input</button>
    </>
  );
}
