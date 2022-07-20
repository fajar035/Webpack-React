import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./MainRouter";
import "../src/index.css";

// ReactDOM.render(<MainRouter />, document.getElementById('root'));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
