//react
import { useEffect, useRef } from "react";

//styles
import styles from "./Testimonial.module.css";

//custom hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Testimonial({
  imageSource = "",
  personName = "",
  oneLiner = "",
  details = "",
  extraClass = [],
  extraInlineStyle = {},
}) {
  const testimonialRef = useRef();
  const { entry, observer } = useIntersectionObserver(testimonialRef, 0.1);

  useEffect(() => {
    if (entry) {
      if (entry.isIntersecting === true) {
        entry.target.classList.add("show-testimonial-elements");
        observer.unobserve(entry.target);
      }
    }
  }, [entry, observer]);

  return (
    <div
      ref={testimonialRef}
      style={extraInlineStyle}
      className={`${styles["testimonial"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      <div
        className={styles["testimonial__img"]}
        style={{ background: `url(${imageSource})` }}
      ></div>

      <div className={styles["testimonial__text-container"]}>
        <p className={styles["testimonial__text-container__one-liner"]}>
          {`"${oneLiner}"`}
        </p>
        <p className={styles["testimonial__text-container__details"]}>
          {details}
        </p>
        <p
          className={styles["testimonial__text-container__person-name"]}
        >{`- ${personName}`}</p>
      </div>
    </div>
  );
}
