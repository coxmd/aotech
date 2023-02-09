//styles
import styles from "./Loading.module.css";

export default function Loading({
  loadingImage = undefined,
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles["loading-container"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      {loadingImage && <img src={loadingImage} alt={"loading spinner"} />}
      {!loadingImage && (
        <div className={styles["loading-container__spinner"]}>&nbsp;</div>
      )}
    </div>
  );
}
