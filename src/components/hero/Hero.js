//react
import { useContext } from "react";

//components
import HeadingDescBtn from "../headingDescBtn/HeadingDescBtn";

//context
import { MediaQueryContext } from "../../contexts/MediaQueryContext";

//styles
import styles from "./Hero.module.css";

export default function Hero({
  imageSource = "",
  buttonInfoArray = [],
  buttonText = "",
  button = undefined,
  group = false,
  heading = "",
  subheading = "",
  shortIntroduction = "",
}) {
  const { mediaQueryState } = useContext(MediaQueryContext);
  return (
    <div className={styles["hero-container"]}>
      {(mediaQueryState.mobileMatches ||
        mediaQueryState.smallTabletMatches) && (
        <div
          style={{
            backgroundImage: `linear-gradient(
            to bottom,
            transparent 35%,
            rgba(0, 0, 0, 0.65) 65%), url(${imageSource})`,
          }}
          className={styles["hero-background-image"]}
        ></div>
      )}

      {(mediaQueryState.computerScreenMatches ||
        mediaQueryState.largeTabletMatches) && (
        <div
          style={{
            backgroundImage: `url(${imageSource})`,
          }}
          className={styles["hero-background-image"]}
        ></div>
      )}

      <HeadingDescBtn
        shortIntroduction={shortIntroduction}
        heading={heading}
        subheading={subheading}
        group={group}
        button={button}
        buttonText={buttonText}
        buttonInfoArray={buttonInfoArray}
      />
    </div>
  );
}
