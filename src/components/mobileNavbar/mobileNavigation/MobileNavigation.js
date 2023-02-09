//components
import MobileNavigationInnerMenu from "../mobileNavigationInnerMenu/MobileNavigationInnerMenu";
import BackdropBlur from "../../backdropBlur/BackdropBlur";
import BrandName from "../../brandName/BrandName";
import HamburgerMenu from "../../hamburgerMenu/HamburgerMenu";
import User from "../../user/User";

//styles
import styles from "./MobileNavigation.module.css";

//custom hooks
import useMobileNavigation from "../../../hooks/useMobileNavigation";
import useBackdrop from "../../../hooks/useBackdrop";
import useNavbarThemeContext from "../../../hooks/useNavbarThemeContext";
import useAuthContext from "../../../hooks/useAuthContext";

export default function MobileNavigation({
  navigationOptionsArray = [],
  brandName = "",
  buttonInfoArray = undefined,
  textButtonWithImageInfoArray = undefined,
}) {
  const { backdropOpen, closeBackdrop, openBackdrop } = useBackdrop();
  const {
    state,
    handleCloseMobileNavigation,
    handleOpenMobileNavigation,
    goToNext,
    goToPrevious,
  } = useMobileNavigation({ closeBackdrop, openBackdrop });

  const { heroVisible } = useNavbarThemeContext();

  const { user, loggedIn } = useAuthContext();

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

        {loggedIn && <User username={user} />}

        <HamburgerMenu
          clickHandler={handleOpenMobileNavigation}
          dark={!heroVisible ? true : false}
        />
      </div>

      <BackdropBlur open={backdropOpen} onClick={closeBackdropAndEverything} />

      <div
        className={`${styles["mobile-nav__container"]} ${
          state.containerOpen ? styles["mobile-nav__container--open"] : ""
        }`}
      >
        {navigationOptionsArray.map((option) => {
          return (
            <MobileNavigationInnerMenu
              loggedIn={loggedIn}
              key={option.id}
              singleMenuOptions={option}
              handleCloseClick={handleCloseMobileNavigation}
              currentMenu={state.currentMenu}
              previousMenuArray={state.previousMenu}
              handleMenuChangeForward={goToNext}
              handleMenuChangeBackward={goToPrevious}
              buttonInfoArray={buttonInfoArray && buttonInfoArray}
              textButtonWithImageInfoArray={
                textButtonWithImageInfoArray && textButtonWithImageInfoArray
              }
            />
          );
        })}
      </div>
    </nav>
  );
}
