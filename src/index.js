import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import planets from "./data/data.json";

// 3: Render the container component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App planets={planets.planets} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
