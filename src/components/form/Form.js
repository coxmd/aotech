//react
import { useContext } from "react";

//components
import InputBox from "../../components/inputBox/InputBox";
import SelectBox from "../selectBox/SelectBox";
import SubmitButton from "../submitButton/SubmitButton";

//styles
import styles from "./Form.module.css";

//context
import { FormReducerContext } from "../../contexts/FormReducerContext";

export default function Form({ imageSource = "", additionalData = undefined }) {
  const {
    formFinalState,
    dispatch,
    selectBoxErrors,
    selectBoxFunctions,
    selectBoxValues,
  } = useContext(FormReducerContext);

  return (
    <div
      className={styles["form-container"]}
      style={{
        background: `url(${imageSource})`,
      }}
    >
      <form
        noValidate
        className={styles["form-container__form"]}
        onSubmit={null}
      >
        <div
          className={`${styles["form-container__form__basic-information"]} ${
            formFinalState.processStage === 0
              ? styles["visible"]
              : styles["hidden"]
          }`}
        >
          <InputBox
            onFocus={() => {
              dispatch({ type: "resetNameError" });
            }}
            onChange={(e) => {
              dispatch({ type: "changeName", payload: e.target.value });
            }}
            labelText={"Full name"}
            placeholder={"i.e. Vanessa Smith"}
            errorText={formFinalState.nameError}
          />
          <InputBox
            onFocus={() => {
              dispatch({ type: "resetEmailError" });
            }}
            onChange={(e) => {
              dispatch({ type: "changeEmail", payload: e.target.value });
            }}
            type={"email"}
            labelText={"Email"}
            placeholder={"i.e. vanessa.smith@gmail.com"}
            errorText={formFinalState.emailError}
          />
          <InputBox
            onFocus={() => {
              dispatch({ type: "resetPhoneError" });
            }}
            onChange={(e) => {
              dispatch({ type: "changePhone", payload: e.target.value });
            }}
            type={"tel"}
            labelText={"Phone"}
            placeholder={"i.e. 9001234567"}
            errorText={formFinalState.phoneError}
          />
          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "checkInfo",
              });
              dispatch({
                type: "changeStage",
              });
            }}
            buttonText={"Get Started"}
          />
        </div>

        <div
          className={`${
            styles["form-container__form__additional-information"]
          } ${
            formFinalState.processStage === 1
              ? styles["visible"]
              : styles["hidden"]
          }`}
        >
          {additionalData.selectBoxData &&
            additionalData.selectBoxData.map((single, i) => {
              return (
                <SelectBox
                  onChange={selectBoxFunctions[i]}
                  value={selectBoxValues[i]}
                  key={single.id}
                  labelText={single.labelText}
                  optionsArray={single.options}
                  errorText={selectBoxErrors[i]}
                />
              );
            })}

          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "checkInfo",
              });
              dispatch({
                type: "changeStage",
              });
            }}
            buttonText={"Submit"}
          />
        </div>

        <div
          className={`${styles["form-container__form__success-message"]} ${
            formFinalState.processStage === 2
              ? styles["visible"]
              : styles["hidden"]
          }`}
        >
          <p
            className={styles["form-container__form__success-message__heading"]}
          >
            {
              <>
                <span className="highlighted-secondary">Thank you</span> <br />
                {formFinalState.name}
              </>
            }
          </p>
          <p
            className={styles["form-container__form__success-message__details"]}
          >
            We have received your request for a free consultation and will reach
            out to you tomorrow between {formFinalState.time}.
          </p>
        </div>
      </form>
    </div>
  );
}
