//react
import { Link } from "react-router-dom";

//styles
import styles from "./LinkGroup.module.css";

export default function LinkGroup({ singleListObject }) {
  return (
    <div className={styles["link-group"]}>
      {singleListObject.heading && (
        <h3 className={styles["link-group__heading"]}>
          {singleListObject.heading.link === undefined ? (
            singleListObject.heading.text
          ) : (
            <Link
              className={styles["link-group__heading-link"]}
              to={`/${singleListObject.heading.link}`}
            >
              {singleListObject.heading.text}
            </Link>
          )}
        </h3>
      )}
      {singleListObject.options.length > 0 && (
        <ul className={styles["link-group__list"]}>
          {singleListObject.options.map((option) => {
            return (
              <li key={option.text} className={styles["link-group__list-item"]}>
                <Link
                  className={styles["link-group__list-item-link"]}
                  to={`/${option.link}`}
                >
                  {option.text}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
