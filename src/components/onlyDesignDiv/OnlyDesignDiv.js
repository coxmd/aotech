//styles
import styles from "./OnlyDesignDiv.module.css";

export default function OnlyDesignDiv({ color }) {
  return (
    <div className={styles["only-design-div"]}>
      <div
        className={styles["only-design-div__core"]}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}
