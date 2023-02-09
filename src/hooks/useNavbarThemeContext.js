//react
import { useContext } from "react";

//context
import { NavbarThemeContext } from "../contexts/NavbarThemeContext";

//the hook
export default function useNavbarThemeContext() {
  const navbarThemeContextValue = useContext(NavbarThemeContext);

  return navbarThemeContextValue;
}
