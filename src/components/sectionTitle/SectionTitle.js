//styles
import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title }) {
  return (
    <div className={styles["section-title-box"]}>
      <h2 className={styles["section-title-box__section-title"]}>
        {title ?? "Title Undefined"}
      </h2>
    </div>
  );
}
