import React from "react";
import Toolbar from "./Toolbar.tsx";
import UseState from "./UseState.tsx";
import Counter from "./Counter.tsx";
import Form from "./Form.tsx";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function App() {
  return (
    <>
      <PlayButton movieName="Kiki's Delivery Service" />
      <h1>Event prapogation</h1>
      <Toolbar />
      <h1>Use State</h1>
      <UseState />
      <h1>Counter</h1>
      <Counter />
      <h1>Form with Object destructuring</h1>
      <Form />
    </>
  );
}

export default App;
