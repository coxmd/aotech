//react
import { Link } from "react-router-dom";

// styles
import styles from "./TextButtonWithImage.module.css";

export default function TextButtonWithImage({
  textButtonWithImageInfoArray = undefined,
  extraClass = [],
}) {
  return (
    <div
      className={`${styles["text-button-with-image__container"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      {textButtonWithImageInfoArray.map((single) => {
        return (
          <Link
            to={`/${single.toUrl}`}
            key={single.id}
            className={styles["text-button-with-image__button"]}
          >
            <img src={single.imageSource} alt={`A ${single.text} button`} />
            <span>{single.text}</span>
          </Link>
        );
      })}
    </div>
  );
}
