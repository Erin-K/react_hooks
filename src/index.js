import React from "react";
import ReactDOM from "react-dom";

import App from "./Compare";
import HooksDefault from "./HooksDefault";
import HooksUtils from "./HooksUtils";
import UseEffect from "./UseEffect";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <br />
    <p>----------------------------------------------------------------------------------------------------</p>
    <br />
    <HooksDefault />
    <br />
    <p>----------------------------------------------------------------------------------------------------</p>
    <br />
    <HooksUtils />
    <br />
    <p>----------------------------------------------------------------------------------------------------</p>
    <br />
    <UseEffect />
  </React.StrictMode>,
  rootElement
);
