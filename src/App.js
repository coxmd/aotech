//react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import MobileNavigation from "./components/mobileNavbar/mobileNavigation/MobileNavigation";
import Home from "./pages/Home/Home";
import MobileFooter from "./components/mobileFooter/MobileFooter";

//styles
import "./basicStyles/App.css";

//custom hooks
import { NavbarThemeContextProvider } from "./contexts/NavbarThemeContext";

//data
import { navigationOptions } from "./data/NavigationMenuData";
import {
  logoButtonData,
  footerBottomOptions,
  collapsibleFooterData,
} from "./data/FooterData";

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
          <MobileFooter
            appName={"WebLab"}
            developer={"Nashiuz Zaman"}
            bottomOptionsArray={footerBottomOptions}
            logoButtonsArray={logoButtonData}
            normalOptionsArray={collapsibleFooterData}
          />
        </BrowserRouter>
      </div>
    </NavbarThemeContextProvider>
  );
}
