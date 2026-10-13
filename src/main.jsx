import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Font self-hosted (nessuna richiesta a Google Fonts): variabili, subset caricati solo se serve
import "@fontsource-variable/inter"; // stand-in di Neue Montreal
import "@fontsource-variable/eb-garamond"; // stand-in di Garamond
import "@fontsource-variable/eb-garamond/wght-italic.css";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
