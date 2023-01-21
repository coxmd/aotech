//react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import MobileNavigation from "./components/mobileNavbar/mobileNavigation/MobileNavigation";
import Home from "./pages/Home/Home";

//styles
import "./basicStyles/App.css";

//custom hooks
import useImportNavigationMenuData from "./hooks/useImportNavigationMenuData";

export default function App() {
  const { navigationOptions } = useImportNavigationMenuData();
  return (
    <div className="App">
      <BrowserRouter>
        <MobileNavigation
          navigationOptionsArray={navigationOptions}
          brandName={"WebLab"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
