//react
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

//styles
import styles from "./CollapsibleLinks.module.css";

//image source
import plusicon from "../../assets/plus.svg";
import minusicon from "../../assets/minus.svg";

export default function CollapsibleLinks({
  singleListObject = undefined,
  externalLinkHeading = false,
  externalLinkList = false,
}) {
  const [open, setOpen] = useState(false);
  const collapsibleRef = useRef();

  const handleClick = (e) => {
    setOpen((prevOpen) => {
      return !prevOpen;
    });

    if (open === false) {
      collapsibleRef.current.style.transition =
        "max-height 0.25s, opacity 0.25s 0.25s";
      collapsibleRef.current.style.maxHeight = `${collapsibleRef.current.scrollHeight}px`;
      collapsibleRef.current.style.opacity = "1";
    } else {
      collapsibleRef.current.style.transition =
        "opacity 0.25s, max-height 0.25s 0.25s";
      collapsibleRef.current.style.opacity = "0";
      collapsibleRef.current.style.maxHeight = "0";
    }
  };

  return (
    <div className={`${styles["collapsible"]} collapsible`}>
      {singleListObject.heading &&
        (singleListObject.heading.link === undefined ? (
          <p
            onClick={handleClick}
            className={styles["collapsible__text-heading"]}
          >
            {singleListObject.heading.text}
            <img src={open ? minusicon : plusicon} alt={"plus sign"} />
          </p>
        ) : externalLinkHeading ? (
          <a
            onClick={handleClick}
            className={styles["collapsible__link-heading"]}
            href={singleListObject.heading.link}
          >
            {singleListObject.heading.text}{" "}
            <img src={open ? minusicon : plusicon} alt={"plus sign"} />
          </a>
        ) : (
          <Link
            onClick={handleClick}
            className={styles["collapsible__link-heading"]}
            to={singleListObject.heading.link}
          >
            {singleListObject.heading.text}{" "}
            <img src={open ? minusicon : plusicon} alt={"plus sign"} />
          </Link>
        ))}

      <div
        ref={collapsibleRef}
        className={`${styles["collapsible__collapse-part"]} collapse-part`}
      >
        <ul className={styles["collapsible__collapse-part__list"]}>
          {singleListObject.options &&
            singleListObject.options.map((option) => {
              return (
                <li key={option.text}>
                  {externalLinkList ? (
                    <a
                      className={
                        styles["collapsible__collapse-part__list__link"]
                      }
                      href={option.link}
                    >
                      {option.text}
                    </a>
                  ) : (
                    <Link
                      className={
                        styles["collapsible__collapse-part__list__link"]
                      }
                      to={option.link}
                    >
                      {option.text}
                    </Link>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
