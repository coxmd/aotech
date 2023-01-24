//image source
import hamburgerIcon from "../../assets/hamburgerIcon.svg";
import hamburgerIconDark from "../../assets/hamburgerIconDark.svg";

//styles
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu({
  clickHandler = undefined,
  dark = true,
}) {
  return (
    <div onClick={clickHandler} className={styles["hamburger-menu"]}>
      {dark && (
        <button
          aria-label="Mobile Navigation Button to toggle navigation menu on and off"
          className={styles["hamburger-menu__button"]}
          style={{
            background: `url(${hamburgerIconDark})`,
          }}
        >
          &nbsp;
        </button>
      )}

      {!dark && (
        <button
          aria-label="Mobile Navigation Button to toggle navigation menu on and off"
          className={styles["hamburger-menu__button"]}
          style={{
            background: `url(${hamburgerIcon})`,
          }}
        >
          &nbsp;
        </button>
      )}
    </div>
  );
}
