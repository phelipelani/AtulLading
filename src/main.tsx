import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";


import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>
);
