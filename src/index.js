import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./App/Store/";
import "./App/style/App.css";
ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);
