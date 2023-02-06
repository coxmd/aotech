//styles
import styles from "./BackdropBlur.module.css";

export default function BackdropBlur({ open = false, onClick = undefined }) {
  return (
    <div
      onClick={onClick}
      className={`${styles["backdrop-blur-long"]}
     ${open ? styles["show"] : "hide"}
        `}
    ></div>
  );
}
