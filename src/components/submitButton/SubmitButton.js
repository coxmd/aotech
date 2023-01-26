//styles
import styles from "./SubmitButton.module.css";

export default function SubmitButton({
  buttonText = "",
  type = undefined,
  onClick = null,
}) {
  return (
    <div className={styles["submit-button"]}>
      {type !== undefined && (
        <button
          onClick={onClick}
          className={styles["submit-button__button"]}
          type="submit"
        >
          {buttonText}
        </button>
      )}

      {type === undefined && (
        <button onClick={onClick} className={styles["submit-button__button"]}>
          {buttonText}
        </button>
      )}
    </div>
  );
}
