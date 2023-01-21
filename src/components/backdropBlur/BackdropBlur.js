//react
import { useContext } from "react";

//context
import { MediaQueryContext } from "../../contexts/MediaQueryContext";
//styles
import styles from "./BackdropBlur.module.css";

export default function BackdropBlur({
  open = false,
  handleCloseClick = undefined,
}) {
  const { mediaQueryState } = useContext(MediaQueryContext);

  return (
    <div
      onClick={handleCloseClick}
      className={`${
        mediaQueryState.computerScreenMatches
          ? styles["backdrop-blur-short"]
          : styles["backdrop-blur-long"]
      }
     ${open ? styles["show"] : "hide"}
        `}
    ></div>
  );
}
