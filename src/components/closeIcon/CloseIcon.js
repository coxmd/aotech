//styles
import styles from "./CloseIcon.module.css";

//image source
import closeListIcon from "../../assets/closelisticon.svg";

export default function CloseIcon({ handleClick = null }) {
  return (
    <div className={styles["close-icon__container"]}>
      <button
        className={styles["close-icon__container__button"]}
        onClick={handleClick}
        style={{ background: `url(${closeListIcon})` }}
        aria-label={
          "button to close form or other elements that has a opened state"
        }
      >
        &nbsp;
      </button>
    </div>
  );
}
