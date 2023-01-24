//react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import MobileNavigation from "./components/mobileNavbar/mobileNavigation/MobileNavigation";
import Home from "./pages/Home/Home";

//styles
import "./basicStyles/App.css";

//custom hooks
import { NavbarThemeContextProvider } from "./contexts/NavbarThemeContext";

//data
import { navigationOptions } from "./data/NavigationMenuData";

export default function App() {
  return (
    <NavbarThemeContextProvider>
      <div className="App">
        <BrowserRouter>
          <MobileNavigation
            navigationOptionsArray={navigationOptions}
            brandName={
              <>
                Web<span className="highlighted">Lab</span>
              </>
            }
          />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NavbarThemeContextProvider>
  );
}
