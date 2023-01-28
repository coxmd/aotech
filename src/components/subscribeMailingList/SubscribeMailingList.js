//react
import { useEffect } from "react";

//components
import InputBox from "../inputBox/InputBox";
import SubmitButton from "../submitButton/SubmitButton";

//custom hooks
import useSubscribeMailingList from "../../hooks/useSubscribeMailingList";

//styles
import styles from "./SubscribeMailingList.module.css";

export default function SubscribeMailingList({ imageSource = "" }) {
  const { state, dispatch, initialState } = useSubscribeMailingList();

  useEffect(() => {
    let timer;
    if (state.success !== "") {
      timer = setTimeout(() => {
        dispatch({ type: "reset", payload: initialState });

        clearTimeout(timer);
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [state.success]);

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

        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "checkForErrors" });
            dispatch({ type: "changeSuccess" });
            dispatch({ type: "changeDisable" });
          }}
        >
          <InputBox
            label={false}
            onChange={(e) => {
              dispatch({ type: "changeEmail", payload: e.target.value });
            }}
            value={state.email}
            placeholder={"Enter your email"}
            errorText={state.emailError}
            successText={state.success && "Subscription added!"}
          />

          <SubmitButton
            disabledStatus={state.disabled}
            buttonText={"Subscribe"}
          />
        </form>
      </div>
    </div>
  );
}
