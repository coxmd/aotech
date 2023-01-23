//styles
import styles from "./PlainDescriptionBox.module.css";

export default function PlainDescriptionBox({ description = "" }) {
  return (
    <div className={styles["plain-description-box"]}>
      <p className={styles["plain-description-box__description"]}>
        {description}
      </p>
    </div>
  );
}
