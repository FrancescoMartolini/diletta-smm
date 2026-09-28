import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Font self-hosted (nessuna richiesta a Google Fonts): variabili, subset caricati solo se serve
import "@fontsource-variable/fraunces";
import "@fontsource-variable/work-sans";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
