//styles
import styles from "./InputBox.module.css";

export default function InputBox({
  labelText = "",
  label = true,
  type = "text",
  placeholder = "no placeholder provided",
  value = undefined,
  onChange = undefined,
  onFocus = undefined,
  errorText = undefined,
  successText = undefined,
  passRef = null,
}) {
  return (
    <div className={styles["inputbox-container"]}>
      <label>
        {label && (
          <span className={styles["inputbox-container__label"]}>
            {labelText}
          </span>
        )}
        <input
          ref={passRef}
          onFocus={onFocus}
          className={styles["inputbox-container__input"]}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
        />

        {errorText && (
          <p className={styles["inputbox-container__error"]}>* {errorText}</p>
        )}
        {successText && (
          <p className={styles["inputbox-container__success"]}>{successText}</p>
        )}
      </label>
    </div>
  );
}
