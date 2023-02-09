// styles
import styles from "./SuccessIcon.module.css";

//image source
import checkmark from "./image/check.svg";

export default function SuccessIcon({
  imageSource = undefined,
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles["success-icon-container"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      {/* if custom imagesource present then that is the src or else the default image */}
      <img src={imageSource ?? checkmark} alt={"check mark"} />
    </div>
  );
}
