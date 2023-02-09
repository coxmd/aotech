//styles
import styles from "./SuccessMessage.module.css";

//component
import SuccessIcon from "../successIcon/SuccessIcon";

export default function SuccessMessage({
  imageSource = undefined,
  extraClass = undefined,
  message = "",
  hasImage = true,
}) {
  return (
    <div
      className={`${styles["success-message"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      {hasImage && <SuccessIcon imageSource={imageSource} />}
      <p className={styles["success-message__message"]}>{message}</p>
    </div>
  );
}
