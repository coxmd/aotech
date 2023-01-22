import React from "react";
import styles from "./HeadingDescBtn.module.css";

export default function HeadingDescBtn({
  heading = "",
  subheading = "",
  shortIntroduction = "",
  extraClass = [],
  button = undefined,
  buttonInfoArray = [],
  group = false,
}) {
  return (
    <div
      className={`${styles["heading-desc-btn-textbox"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "Default class"
      }`}
    >
      {shortIntroduction && (
        <p className={styles["heading-desc-btn-textbox__short-introduction"]}>
          {shortIntroduction}
        </p>
      )}
      {heading && (
        <h3 className={styles["heading-desc-btn-textbox__heading"]}>
          {heading}
        </h3>
      )}
      {subheading && (
        <p className={styles["heading-desc-btn-textbox__subheading"]}>
          {subheading}
        </p>
      )}

      {button && !group && button}

      {button && group && (
        <div className={styles["button-group"]}>
          {buttonInfoArray.map((single) => {
            return React.cloneElement(button, {
              key: single.id,
              toUrl: single.link,
              buttonText: `${
                single.buttonText === ""
                  ? "Please provide text for button"
                  : single.buttonText
              }`,
            });
          })}
        </div>
      )}
    </div>
  );
}
