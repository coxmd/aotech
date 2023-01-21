//react
import { Link } from "react-router-dom";

//image source
import closelisticon from "../../../assets/closelisticon.svg";
import rightcaret from "../../../assets/caret-right.svg";
import leftcaret from "../../../assets/caret-left.svg";

//styles
import styles from "./MobileNavigationInnerMenu.module.css";

export default function MobileNavigationInnerMenu({
  singleMenuOptions = [],
  handleCloseClick,
  currentMenu,
  handleMenuChangeForward,
  handleMenuChangeBackward,
  previousMenuArray,
}) {
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
          <button
            onClick={handleCloseClick}
            className={styles["closelisticon"]}
          >
            <img src={closelisticon} alt={"mobile nav close icon"} />
          </button>
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
            <img src={leftcaret} alt={"mobile nav left caret icon"} />
            <span>Back</span>
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
            <Link to={`/${singleMenuOptions.heading.link}`}>
              {singleMenuOptions.heading.text}
            </Link>
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
    </div>
  );
}
