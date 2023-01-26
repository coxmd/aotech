//styles
import styles from "./InputBox.module.css";

export default function InputBox({
  labelText = "",
  type = "text",
  placeholder = "no placeholder provided",
  value = undefined,
  onChange = undefined,
  onFocus = undefined,
  errorText = undefined,
}) {
  return (
    <div className={styles["inputbox-container"]}>
      <label>
        <span>{labelText}</span>
        <input
          onFocus={onFocus}
          className={styles["inputbox-container__input"]}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
        />
        {errorText && (
          <p className={styles["inputbox-container__error"]}>
            {
              <>
                <span className={"highlighted-secondary"}>*</span> {errorText}
              </>
            }
          </p>
        )}
      </label>
    </div>
  );
}
