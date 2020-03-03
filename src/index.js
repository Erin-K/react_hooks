import React from "react";
import ReactDOM from "react-dom";

import App from "./Compare";
import HooksDefault from "./HooksDefault";
import HooksUtils from "./HooksUtils";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <br />
    <p>*************************</p>
    <br />
    <HooksDefault />
    <br />
    <p>*************************</p>
    <br />
    <HooksUtils />
  </React.StrictMode>,
  rootElement
);
