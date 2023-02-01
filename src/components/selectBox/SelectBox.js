//styles
import styles from "./SelectBox.module.css";

export default function SelectBox({
  labelText = "",
  value = undefined,
  onChange = null,
  optionsArray = [],
  errorText = undefined,
  onFocus = null,
}) {
  return (
    <div className={styles["selectbox-container"]}>
      <label>
        <span className={styles["selectbox-container__label"]}>
          {labelText}
        </span>
        <select value={value} onChange={onChange} onFocus={onFocus} required>
          {optionsArray.map((single) => {
            return <option key={single}>{single}</option>;
          })}
        </select>
        {errorText && (
          <p className={styles["selectbox-container__error"]}>{errorText}</p>
        )}
      </label>
    </div>
  );
}
