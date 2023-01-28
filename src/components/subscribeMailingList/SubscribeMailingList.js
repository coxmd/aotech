//react
import { useState } from "react";

//components
import InputBox from "../inputBox/InputBox";
import SubmitButton from "../submitButton/SubmitButton";

//styles
import styles from "./SubscribeMailingList.module.css";

export default function SubscribeMailingList({ imageSource = "" }) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const checkForErrors = () => {};

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles["subscribe-mailing-list-container"]}>
      <div
        className={styles["subscribe-mailing-list-container__img"]}
        style={{ background: `url(${imageSource})` }}
      >
        &nbsp;
      </div>

      <div className={styles["subscribe-mailing-list-container__textbox"]}>
        <h3
          className={
            styles["subscribe-mailing-list-container__textbox__heading"]
          }
        >
          Subscribe <br />
          To Our
          <br />
          Mailing List
        </h3>

        <p
          className={
            styles["subscribe-mailing-list-container__textbox__details"]
          }
        >
          Subscribe for our weekly update and be the first to know about our
          specials and promotions.
        </p>
        <form noValidate onSubmit={null}>
          <InputBox
            label={false}
            onChange={handleChange}
            value={email}
            placeholder={"Enter your email"}
          />
          {successMessage && (
            <p
              className={
                styles[
                  "subscribe-mailing-list-container__textbox__success-message"
                ]
              }
            >
              {successMessage}
            </p>
          )}
          <SubmitButton buttonText={"Subscribe"} />
        </form>
      </div>
    </div>
  );
}
