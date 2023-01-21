//react
import { Link } from "react-router-dom";

//styles
import styles from "./BrandName.module.css";

export default function BrandName({ title = "" }) {
  return (
    <Link className={styles["brand-name"]} to={"/"}>
      {title}
    </Link>
  );
}
