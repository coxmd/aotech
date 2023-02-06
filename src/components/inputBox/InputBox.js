//react
import React from "react";

//styles
import styles from "./InputBox.module.css";

function InputBox(
  {
    labelText = "",
    label = true,
    type = "text",
    placeholder = "no placeholder provided",
    value = undefined,
    onChange = null,
    onFocus = null,
    errorText = undefined,
    successText = undefined,
    extraClass = undefined,
  },
  ref
) {
  return (
    <div
      className={`${styles["inputbox-container"]} ${
        extraClass && extraClass.join(" ")
      }`}
    >
      <label>
        {label && (
          <span className={styles["inputbox-container__label"]}>
            {labelText}
          </span>
        )}
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          ref={ref}
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

export default React.forwardRef(InputBox);
