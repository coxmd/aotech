//react
import { Link } from "react-router-dom";

//components
import CloseIcon from "../../closeIcon/CloseIcon";
import TextButtonWithImage from "../../textButtonWithImage/TextButtonWithImage";

//image source
import rightcaret from "../../../assets/caret-right.svg";
import leftcaret from "../../../assets/caret-left.svg";

//hooks
import useLoginSignupContext from "../../../hooks/useLoginSignupContext";
import useAuthContext from "../../../hooks/useAuthContext";

//styles
import styles from "./MobileNavigationInnerMenu.module.css";

export default function MobileNavigationInnerMenu({
  singleMenuOptions = [],
  handleCloseClick,
  currentMenu,
  handleMenuChangeForward,
  handleMenuChangeBackward,
  previousMenuArray,
  buttonInfoArray = undefined,
  textButtonWithImageInfoArray = undefined,
}) {
  const { openForm, setBackdropOpen } = useLoginSignupContext();
  const { loggedIn, setUser, setLoggedIn } = useAuthContext();

  return (
    <div
      className={`${styles["mobile-navigation-innermenu"]} ${
        currentMenu === singleMenuOptions.id ? styles["show"] : ""
      } ${
        previousMenuArray.includes(singleMenuOptions.id)
          ? styles["previously-shown"]
          : ""
      }`}
    >
      {singleMenuOptions.id === "main" && (
        <div
          className={
            styles["mobile-navigation-innermenu__closelisticon-container"]
          }
        >
          <CloseIcon handleClick={handleCloseClick} />
        </div>
      )}

      {singleMenuOptions.id !== "main" && (
        <div
          className={
            styles["mobile-navigation-innermenu__leftcareticon-container"]
          }
        >
          <button
            onClick={handleMenuChangeBackward}
            className={styles["leftcareticon"]}
          >
            <img src={leftcaret} alt={"mobile nav left caret icon"} /> Back
          </button>
        </div>
      )}

      <ul className={styles["mobile-navigation-innermenu__list-of-options"]}>
        {singleMenuOptions.heading !== undefined && (
          <li
            onClick={() => {
              if (singleMenuOptions.heading.link) {
                handleCloseClick();
              }
            }}
            className={
              styles["mobile-navigation-innermenu__list-of-options__heading"]
            }
          >
            {/* if it is not a link, a span tag is output */}
            {singleMenuOptions.heading.link === undefined && (
              <span>{singleMenuOptions.heading.text}</span>
            )}

            {/* if it is a link, a LINK or a tag is output */}
            {singleMenuOptions.heading.link !== undefined && (
              <Link to={`/${singleMenuOptions.heading.link}`}>
                {singleMenuOptions.heading.text}
              </Link>
            )}
          </li>
        )}

        {singleMenuOptions.options.map((option) => {
          return singleMenuOptions.id === "main" ? (
            <li
              onClick={() => {
                option.link !== undefined
                  ? handleCloseClick()
                  : handleMenuChangeForward(option);
              }}
              key={option.id}
              className={
                styles[
                  "mobile-navigation-innermenu__list-of-options__single-option--main-list"
                ]
              }
            >
              {option.link !== undefined ? (
                <Link to={`/${option.link}`}>{option.text}</Link>
              ) : (
                <span>
                  {option.text}
                  <img src={rightcaret} alt={"right caret"} />
                </span>
              )}
            </li>
          ) : (
            <li
              onClick={() => {
                option.link !== undefined
                  ? handleCloseClick()
                  : handleMenuChangeForward(option);
              }}
              className={
                styles[
                  "mobile-navigation-innermenu__list-of-options__single-option"
                ]
              }
              key={option.id}
            >
              {option.link === undefined ? (
                <span>
                  {option.text}
                  <img src={""} alt={"right caret"} />
                </span>
              ) : (
                <Link to={`/${option.link}`}>{option.text}</Link>
              )}
            </li>
          );
        })}
      </ul>

      {/* Buttons for the main menu slide */}
      {singleMenuOptions.id === "main" && buttonInfoArray && (
        <div
          className={styles["mobile-navigation-innermenu__main-slide__buttons"]}
        >
          {buttonInfoArray.map((single) => {
            return (
              <button
                onClick={() => {
                  if (loggedIn) {
                    setUser("");
                    setLoggedIn(false);
                  } else {
                    handleCloseClick();
                    setBackdropOpen(true);
                    openForm();
                  }
                }}
                key={single.id}
              >
                {loggedIn ? "Logout" : single.buttonText}
              </button>
            );
          })}
        </div>
      )}

      {singleMenuOptions.id === "main" && textButtonWithImageInfoArray && (
        <TextButtonWithImage
          onClick={() => {
            handleCloseClick();
          }}
          textButtonWithImageInfoArray={textButtonWithImageInfoArray}
          extraClass={[
            styles["mobile-navigation-innermenu__text-image-buttons"],
          ]}
        />
      )}
    </div>
  );
}
