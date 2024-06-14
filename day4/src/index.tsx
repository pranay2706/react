import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AvoidRedudantState from "./AvoidRedudantState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>DAY4</h1>
    <App />
    <AvoidRedudantState />
  </React.StrictMode>
);
