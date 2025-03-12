import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./style.css"; // Ensure this file exists for Tailwind styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
