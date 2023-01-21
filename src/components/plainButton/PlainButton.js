//react
import { Link } from "react-router-dom";

//styles
import styles from "./PlainButton.module.css";

export default function PlainButton({
  buttonText = "",
  toUrl = "#",
  rightArrow = true,
  external = false,
}) {
  return (
    <div className={styles["plain-button"]}>
      {/* If they are external link then use the normal html <a> tag */}
      {external && (
        <a href={toUrl} className={styles["plain-button__button"]}>
          {buttonText === "" ? "Please provide text for button" : buttonText}{" "}
          {rightArrow && <>&rarr;</>}
        </a>
      )}
      {/* If not external link then use the React Link Component */}
      {!external && (
        <Link to={`/${toUrl}`} className={styles["plain-button__button"]}>
          {buttonText === "" ? "Please provide text for button" : buttonText}{" "}
          {rightArrow && <>&rarr;</>}
        </Link>
      )}
    </div>
  );
}
