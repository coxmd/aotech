//react
import { createContext, useReducer } from "react";

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
    case "resetServiceError":
      return { ...state, serviceError: "" };
    case "changeTime":
      return { ...state, time: action.payload };
    case "resetTimeError":
      return { ...state, timeError: "" };

    case "checkInfo":
      if (state.processStage === "basic") {
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
            state.phone === "" ||
            isNaN(state.phone) ||
            state.phone.length !== 10
              ? "Please provide valid phone number"
              : "",
        };
      }
      if (state.processStage === "additional") {
        return {
          ...state,
          serviceError:
            state.service === "Please select" ? "Please choose a service" : "",
          timeError:
            state.time === "Please select" ? "Please choose a good time" : "",
        };
      }

    case "changeStage":
      if (state.processStage === "basic") {
        if (
          state.nameError === "" &&
          state.emailError === "" &&
          state.phoneError === ""
        ) {
          return { ...state, processStage: "additional" };
        }
      }
      if (state.processStage === "additional") {
        if (state.serviceError === "" && state.timeError === "") {
          return { ...state, processStage: "final" };
        }
      }

    case "reset":
      return { ...state, ...action.payload };

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
  processStage: "basic",
};

export const FormReducerContext = createContext();

export function FormReducerContextProvider({ children }) {
  const [formFinalState, dispatch] = useReducer(formReducer, formState);

  const selectBoxResetFunctions = [
    function () {
      dispatch({ type: "resetServiceError" });
    },
    function () {
      dispatch({ type: "resetTimeError" });
    },
  ];
  const selectBoxValues = [formFinalState.service, formFinalState.time];
  const selectBoxFunctions = [
    function (e) {
      dispatch({ type: "changeService", payload: e.target.value });
    },
    function (e) {
      dispatch({ type: "changeTime", payload: e.target.value });
    },
  ];
  const selectBoxErrors = [
    formFinalState.serviceError,
    formFinalState.timeError,
  ];

  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: "checkInfo",
    });
    dispatch({
      type: "changeStage",
    });
  };

  const reset = (e) => {
    e.preventDefault();
    dispatch({ type: "reset", payload: { ...formState } });
  };

  return (
    <FormReducerContext.Provider
      value={{
        formFinalState,
        dispatch,
        selectBoxErrors,
        selectBoxFunctions,
        selectBoxValues,
        selectBoxResetFunctions,
        submit,
        reset,
      }}
    >
      {children}
    </FormReducerContext.Provider>
  );
}
