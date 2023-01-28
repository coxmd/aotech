//react
import { Link } from "react-router-dom";

//styles
import styles from "./ImageButton.module.css";

export default function ImageButton({
  title = "",
  extraClass = [],
  imageSource = undefined,
  externalLink = false,
}) {
  return imageSource.source === undefined ? (
    <p>Please provide button image</p>
  ) : (
    <div
      title={imageSource.title}
      className={`${styles["image-button"]}  ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      {externalLink && (
        <a
          aria-label={imageSource.title}
          href={imageSource.link ?? "No url provided"}
          className={`${styles["image-button__link"]}`}
          style={{
            background: `url(${imageSource.source})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          &nbsp;
        </a>
      )}

      {!externalLink && (
        <Link
          aria-label={imageSource.title}
          to={imageSource.link ?? "No url provided"}
          className={`${styles["image-button__link"]}`}
          style={{
            background: `url(${imageSource.source})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      )}
    </div>
  );
}
