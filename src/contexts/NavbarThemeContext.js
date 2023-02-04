import { useState, createContext } from "react";

export const NavbarThemeContext = createContext();

export function NavbarThemeContextProvider({ children }) {
  const [heroVisible, setHeroVisible] = useState(null);

  return (
    <NavbarThemeContext.Provider value={{ heroVisible, setHeroVisible }}>
      {children}
    </NavbarThemeContext.Provider>
  );
}
