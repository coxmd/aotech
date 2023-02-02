//react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

//components
import MobileNavigation from "./components/mobileNavbar/mobileNavigation/MobileNavigation";
import Home from "./pages/Home/Home";
import MobileFooter from "./components/mobileFooter/MobileFooter";
import DesktopFooter from "./components/desktopFooter/DesktopFooter";

//styles
import "./basicStyles/App.css";

//context
import { NavbarThemeContextProvider } from "./contexts/NavbarThemeContext";
import { MediaQueryContext } from "./contexts/MediaQueryContext";

//image source
import buildingsSmall from "./assets/buildings-small.webp";
import buildingsLarge from "./assets/buildings.jpg";

//data
import { navigationOptions } from "./data/NavigationMenuData";
import {
  logoButtonDataPrimary,
  logoButtonDataDarktext,
  footerBottomOptions,
  collapsibleFooterData,
  addressData,
} from "./data/FooterData";

export default function App() {
  const { mediaQueryState } = useContext(MediaQueryContext);

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

          {(mediaQueryState.mobileMatches ||
            mediaQueryState.smallTabletMatches) && (
            <MobileFooter
              appName={"WebLab"}
              developer={"Nashiuz Zaman"}
              bottomOptionsArray={footerBottomOptions}
              logoButtonsArray={logoButtonDataPrimary}
              normalOptionsArray={collapsibleFooterData}
              addressData={addressData}
              imageSource={buildingsSmall}
              companyName={
                <>
                  Web<span className="highlighted">Lab</span>
                </>
              }
            />
          )}

          {(mediaQueryState.largeTabletMatches ||
            mediaQueryState.computerScreenMatches) && (
            <DesktopFooter
              appName={"WebLab"}
              developer={"Nashiuz Zaman"}
              bottomOptionsArray={footerBottomOptions}
              logoButtonsArray={logoButtonDataDarktext}
              normalOptionsArray={collapsibleFooterData}
              addressData={addressData}
              imageSource={buildingsLarge}
              companyName={
                <>
                  Web<span className="highlighted">Lab</span>
                </>
              }
            />
          )}
        </BrowserRouter>
      </div>
    </NavbarThemeContextProvider>
  );
}
