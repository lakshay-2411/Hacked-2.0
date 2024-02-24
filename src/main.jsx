import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import ReactGA from "react-ga";
ReactGA.initialize("K6F7N5MR4K");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
