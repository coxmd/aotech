//react
import { useReducer } from "react";

//components
import InputBox from "../../components/inputBox/InputBox";
import SelectBox from "../selectBox/SelectBox";
import SubmitButton from "../submitButton/SubmitButton";

//styles
import styles from "./Form.module.css";

//reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.payload };
    case "changeEmail":
      return { ...state, email: action.payload };
    case "changePhone":
      return { ...state, phone: action.payload };
    case "resetNameError":
      return { ...state, nameError: "" };
    case "resetEmailError":
      return { ...state, emailError: "" };
    case "resetPhoneError":
      return { ...state, phoneError: "" };
    case "changeService":
      return { ...state, service: action.payload };
    case "changeTime":
      return { ...state, time: action.payload };

    case "checkInfo":
      if (state.processStage === 0) {
        return {
          ...state,
          nameError: state.name === "" ? "Please provide full name" : "",
          emailError:
            state.email === "" ||
            !state.email.includes("@") ||
            !state.email.includes(".com")
              ? "Please provide email address"
              : "",
          phoneError:
            state.phone === "" || isNaN(state.phone) || state.phone.length < 10
              ? "Please provide valid phone number"
              : "",
        };
      }

      if (state.processStage === 1) {
        return {
          ...state,
          serviceError:
            state.service === "Please select" ? "Please choose a service" : "",
          timeError:
            state.time === "Please select"
              ? "Please choose your preferred tme"
              : "",
        };
      }
      break;
    case "changeStage":
      if (state.processStage === 0) {
        if (
          state.nameError === "" &&
          state.emailError === "" &&
          state.phoneError === ""
        ) {
          return { ...state, processStage: 1 };
        }
      }
      if (state.processStage === 1) {
        if (state.serviceError === "" && state.timeError === "") {
          return { ...state, processStage: 2 };
        }
      }

      break;
    default:
      return state;
  }
};

const formState = {
  name: "",
  nameError: "",
  email: "",
  emailError: "",
  phone: "",
  phoneError: "",
  service: "Please select",
  serviceError: "",
  time: "Please select",
  timeError: "",
  processStage: 0,
};

export default function Form({ imageSource = "", additionalData = undefined }) {
  const [formStateFinal, dispatch] = useReducer(formReducer, formState);
  const selectBoxValues = [formStateFinal.service, formStateFinal.time];
  const selectBoxFunctions = [
    function (e) {
      dispatch({ type: "changeService", payload: e.target.value });
    },
    function (e) {
      dispatch({ type: "changeTime", payload: e.target.value });
    },
  ];
  const selectBoxErrors = [
    formStateFinal.serviceError,
    formStateFinal.timeError,
  ];

  console.log(formStateFinal.processStage);

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
            formStateFinal.processStage === 0
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
            errorText={formStateFinal.nameError}
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
            errorText={formStateFinal.emailError}
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
            errorText={formStateFinal.phoneError}
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
            formStateFinal.processStage === 1
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
            formStateFinal.processStage === 2
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
                {formStateFinal.name}
              </>
            }
          </p>
          <p
            className={styles["form-container__form__success-message__details"]}
          >
            We have received your request for a free consultation and will reach
            out to you tomorrow between {formStateFinal.time}.
          </p>
        </div>
      </form>
    </div>
  );
}
