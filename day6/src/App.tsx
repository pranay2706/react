import React from "react";
import "./App.css";
import UseReducerUse from "./UseReducerUse";
import ContextComponent from "./ContextComponent";

function App() {
  return (
    <>
      <h1>Data passing using reducer</h1>
      <UseReducerUse />
      <h1>Data passing using context</h1>
      <ContextComponent />
    </>
  );
}

export default App;
