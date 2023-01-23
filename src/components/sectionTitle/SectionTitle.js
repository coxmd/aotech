//styles
import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title = undefined }) {
  return (
    <h2 className={styles["section-title"]}>{title ?? "Title Undefined"}</h2>
  );
}
