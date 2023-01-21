//components
import MobileNavigationInnerMenu from "../mobileNavigationInnerMenu/MobileNavigationInnerMenu";
import BackdropBlur from "../../backdropBlur/BackdropBlur";
import BrandName from "../../brandName/BrandName";
import HamburgerMenu from "../../hamburgerMenu/HamburgerMenu";

//styles
import styles from "./MobileNavigation.module.css";

//custom hooks
import useMobileNavigation from "../../../hooks/useMobileNavigation";
import useBackdrop from "../../../hooks/useBackdrop";

export default function MobileNavigation({
  navigationOptionsArray = [],
  brandName = "",
}) {
  const { backdropOpen, closeBackdrop, openBackdrop } = useBackdrop();
  const {
    state,
    handleCloseMobileNavigation,
    handleOpenMobileNavigation,
    goToNext,
    goToPrevious,
  } = useMobileNavigation({ closeBackdrop, openBackdrop });

  const closeBackdropAndEverything = () => {
    handleCloseMobileNavigation();
  };

  return (
    <nav className={styles["mobile-nav"]}>
      <div className={styles["mobile-nav__brand-and-toggles"]}>
        <BrandName title={brandName} />
        <HamburgerMenu clickHandler={handleOpenMobileNavigation} />
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
            />
          );
        })}
      </div>
    </nav>
  );
}
