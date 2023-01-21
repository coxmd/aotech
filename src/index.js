import React from "react";
import ReactDOM from "react-dom/client";
import "./basicStyles/index.css";
import App from "./App";
import { MediaQueryProvider } from "./contexts/MediaQueryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediaQueryProvider>
      <App />
    </MediaQueryProvider>
  </React.StrictMode>
);
