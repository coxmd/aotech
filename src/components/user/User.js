//styles
import styles from "./User.module.css";

//image source
import userIcon from "./image/user.svg";

export default function User({
  username = "",
  extraClass = undefined,
  imageSource = undefined,
  hasImage = true,
}) {
  return (
    <div
      className={`${styles["user-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      <div className={styles["user-main__container"]}>
        {hasImage && (
          <img
            className={styles["user-main__container__image"]}
            src={imageSource || userIcon}
            alt={"user profile icon"}
          />
        )}

        <p className={styles["user-main__container__username"]}>{username}</p>
      </div>
    </div>
  );
}
