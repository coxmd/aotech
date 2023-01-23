//react
import { Link } from "react-router-dom";

//styles
import styles from "./ImageDescBtn.module.css";

export default function ImageDescBtn({
  imageSource = "",
  description = undefined,
  buttonText = "",
  toUrl = "#",
  rightArrow = true,
  external = false,
  buttonPresent = false,
}) {
  return (
    <div className={styles["image-description-button__container"]}>
      <div
        className={
          styles["image-description-button__container__background-img"]
        }
        style={{ background: `url(${imageSource})` }}
      >
        {description && (
          <p
            className={
              styles["image-description-button__container__description"]
            }
          >
            {description}
          </p>
        )}
      </div>

      {buttonPresent && (
        <div
          className={
            styles["image-description-button__container__button-container"]
          }
        >
          {external && (
            <a
              href={toUrl}
              className={
                styles[
                  "image-description-button__container__button-container__button"
                ]
              }
            >
              {buttonText === ""
                ? "Please provide text for button"
                : buttonText}{" "}
              {rightArrow && <>&rarr;</>}
            </a>
          )}
          {!external && (
            <Link
              to={`/${toUrl}`}
              className={
                styles[
                  "image-description-button__container__button-container__button"
                ]
              }
            >
              {buttonText === ""
                ? "Please provide text for button"
                : buttonText}{" "}
              {rightArrow && <>&rarr;</>}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
