//image source
import hamburgerIcon from "../../assets/hamburgerIcon.svg";

//styles
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu({ clickHandler = undefined }) {
  return (
    <div onClick={clickHandler} className={styles["hamburger-menu"]}>
      <button
        aria-label="Mobile Navigation Button to toggle navigation menu on and off"
        className={styles["hamburger-menu__button"]}
        style={{
          background: `url(${hamburgerIcon})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        &nbsp;
      </button>
    </div>
  );
}
