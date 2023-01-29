import React from "react";
import ReactDOM from "react-dom/client";
import "./basicStyles/index.css";
import App from "./App";
import { MediaQueryContextProvider } from "./contexts/MediaQueryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediaQueryContextProvider>
      <App />
    </MediaQueryContextProvider>
  </React.StrictMode>
);
