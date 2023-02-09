//components
import HeadingDescBtn from "../headingDescBtn/HeadingDescBtn";

//custom hooks
import useMediaQueryContext from "../../hooks/useMediaQueryContext";

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
  const { mediaQueryFinalState } = useMediaQueryContext();
  return (
    <div className={styles["hero-container"]}>
      {(mediaQueryFinalState.mobileMatches ||
        mediaQueryFinalState.smallTabletMatches) && (
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

      {(mediaQueryFinalState.computerScreenMatches ||
        mediaQueryFinalState.largeTabletMatches) && (
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
