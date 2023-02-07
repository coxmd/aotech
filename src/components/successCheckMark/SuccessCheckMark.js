// styles
import styles from "./SuccessCheckMark.module.css";

//image source
import checkmark from "./image/check.svg";

export default function SuccessCheckMark({ extraClass = undefined }) {
  return (
    <div
      className={`${styles["success-checkmark-container"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      <img src={checkmark} alt={"check mark"} />
    </div>
  );
}
