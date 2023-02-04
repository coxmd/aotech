import React from "react";
import ReactDOM from "react-dom/client";
import "./basicStyles/index.css";
import App from "./App";

// context
import { MediaQueryContextProvider } from "./contexts/MediaQueryContext";
import { NavbarThemeContextProvider } from "./contexts/NavbarThemeContext";
import { LoginSignupContextProvider } from "./contexts/LoginSignUpContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediaQueryContextProvider>
      <LoginSignupContextProvider>
        <NavbarThemeContextProvider>
          <App />
        </NavbarThemeContextProvider>
      </LoginSignupContextProvider>
    </MediaQueryContextProvider>
  </React.StrictMode>
);
