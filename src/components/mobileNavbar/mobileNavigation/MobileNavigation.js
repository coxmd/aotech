//react
// import { useEffect, useState } from "react";

import { useContext } from "react";

//components
import MobileNavigationInnerMenu from "../mobileNavigationInnerMenu/MobileNavigationInnerMenu";
import BackdropBlur from "../../backdropBlur/BackdropBlur";
import BrandName from "../../brandName/BrandName";
import HamburgerMenu from "../../hamburgerMenu/HamburgerMenu";

//context
import { NavbarThemeContext } from "../../../contexts/NavbarThemeContext";

//styles
import styles from "./MobileNavigation.module.css";

//custom hooks
import useMobileNavigation from "../../../hooks/useMobileNavigation";
import useBackdrop from "../../../hooks/useBackdrop";

export default function MobileNavigation({
  navigationOptionsArray = [],
  brandName = "",
  buttonsInfoArray = undefined,
}) {
  const { backdropOpen, closeBackdrop, openBackdrop } = useBackdrop();
  const {
    state,
    handleCloseMobileNavigation,
    handleOpenMobileNavigation,
    goToNext,
    goToPrevious,
  } = useMobileNavigation({ closeBackdrop, openBackdrop });

  const { heroVisible } = useContext(NavbarThemeContext);

  const closeBackdropAndEverything = () => {
    handleCloseMobileNavigation();
  };

  return (
    <nav
      className={`${styles["mobile-nav"]} ${
        heroVisible ? "" : styles["solid-white-navbar"]
      }`}
    >
      <div className={styles["mobile-nav__brand-and-toggles"]}>
        <BrandName title={brandName} toUrl={"/"} />
        <HamburgerMenu
          clickHandler={handleOpenMobileNavigation}
          dark={!heroVisible ? true : false}
        />
      </div>

      <BackdropBlur
        open={backdropOpen}
        handleCloseClick={closeBackdropAndEverything}
      />
      <div
        className={`${styles["mobile-nav__container"]} ${
          state.containerOpen ? styles["mobile-nav__container--open"] : ""
        }`}
      >
        {navigationOptionsArray.map((option) => {
          return (
            <MobileNavigationInnerMenu
              key={option.id}
              singleMenuOptions={option}
              handleCloseClick={handleCloseMobileNavigation}
              currentMenu={state.currentMenu}
              previousMenuArray={state.previousMenu}
              handleMenuChangeForward={goToNext}
              handleMenuChangeBackward={goToPrevious}
              buttonsInfoArray={buttonsInfoArray && buttonsInfoArray}
            />
          );
        })}
      </div>
    </nav>
  );
}
