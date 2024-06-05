import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./store/ContextProvider";
import "./shared/lib/i18n/i18n.js";
import { Disclaimer } from "./entities/Layout/ui/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Disclaimer />
      <App />
    </ContextProvider>
  </React.StrictMode>
);
