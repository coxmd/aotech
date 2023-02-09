//react
import { useReducer, useCallback } from "react";
import useCapitalizeStr from "./useCapitalizeStr";

// All error states start as NULL and then after every check (initial and replicated database checks) they are either "" (an empty string) or the error message as a string. They start as NULL because then when they become either of those two values then I can understand that the checks have happened for the data and now either they passed or failed WHICH MEANS THEY ARE IN A DIFFERENT STAGE.
const loginSignupStartState = {
  formOpen: false,
  formType: "login",
  isPending: false,
  isSuccess: false,
  email: "",
  emailError: null,
  password: "",
  passwordError: null,
  confirmedPassword: "",
  confirmedPasswordError: null,
  employeeId: "",
  employeeIdError: null,
  username: "",
  usernameError: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openForm":
      return { ...state, formOpen: true };
    case "closeForm":
      return { ...state, formOpen: false };
    case "changeFormType":
      return { ...state, formType: action.payload };
    case "changeEmail":
      return { ...state, email: action.payload };
    case "changePassword":
      return { ...state, password: action.payload };
    case "changeConfirmedPassword":
      return { ...state, confirmedPassword: action.payload };
    case "changeEmployeeId":
      return { ...state, employeeId: action.payload };
    case "changeUsername":
      return { ...state, username: action.payload };

    case "changeIsPending":
      return { ...state, isPending: action.payload };

    // All error states start as NULL and then after every check (initial and replicated database checks) they are either "" (an empty string) or the error message as a string. They start as NULL because then when they become either of those two values then I can understand that the checks have happened for the data and now either they passed or failed WHICH MEANS THEY ARE IN A DIFFERENT STAGE.

    //  PLEASE NOTE THESE DATA CHECKS ARE JUST EXAMPLE DATA CHECKS PERFORMED TO REPLICATE A FETCH TO THE DATABASE
    case "checkLoginInitialInfo":
      return {
        ...state,
        employeeIdError: state.employeeId === "" ? "Required" : "",
        passwordError:
          (state.password === "" ? "Required" : "") ||
          (state.password.length < 6
            ? "Passwords are at least 6 characters long"
            : ""),
      };

    case "checkSignupInitialInfo":
      return {
        ...state,
        emailError:
          state.email === "" ||
          !state.email.includes("@") ||
          !state.email.includes(".com")
            ? "Required"
            : "",
        usernameError: state.username === "" ? "Required" : "",
        passwordError:
          (state.password === "" ? "Required" : "") ||
          (state.password.length < 6
            ? "Password should be at least 6 characters long"
            : ""),
        confirmedPasswordError:
          (state.confirmedPassword === "" ? "Required" : "") ||
          (state.confirmedPassword !== "" &&
          state.confirmedPassword !== state.password
            ? "Passwords do not match"
            : ""),
      };

    case "checkRecoverAccountInitialInfo":
      return {
        ...state,
        emailError:
          state.email === "" ||
          !state.email.includes("@") ||
          !state.email.includes(".com")
            ? "Required"
            : "",
      };

    // All error states start as NULL and then after every check (initial and replicated database checks) they are either "" (an empty string) or the error message as a string. They start as NULL because then when they become either of those two values then I can understand that the checks have happened for the data and now either they passed or failed WHICH MEANS THEY ARE IN A DIFFERENT STAGE.

    //  PLEASE NOTE THESE DATA CHECKS ARE JUST EXAMPLE DATA CHECKS PERFORMED TO REPLICATE A FETCH TO THE DATABASE
    case "checkLoginFormDatabaseErrors":
      return {
        ...state,
        employeeIdError:
          state.employeeId !== "111" ? "Incorrect Employee ID" : "",
        passwordError: state.password !== "123456" ? "Incorrect password" : "",
      };

    case "checkSignupFormDatabaseErrors":
      return {
        ...state,
        usernameError:
          state.username === "Test User"
            ? "Username alredy exists, try another one"
            : "",
      };

    case "checkRecoverAccountFormDatabaseErrors":
      return {
        ...state,
        emailError:
          state.email !== "test@example.com"
            ? "No email address found, try again"
            : "",
      };

    // Change to pending state if no basic errors
    case "changeToPendingWhenNoError":
      if (state.formType === "login") {
        if (state.employeeIdError === "" && state.passwordError === "") {
          return { ...state, isPending: true };
        }
      }

      if (state.formType === "signup") {
        if (
          state.emailError === "" &&
          state.usernameError === "" &&
          state.passwordError === "" &&
          state.confirmedPasswordError === ""
        ) {
          return { ...state, isPending: true };
        }
      }

      if (state.formType === "recoverAccount") {
        if (state.emailError === "") {
          return { ...state, isPending: true };
        }
      }

      return state;

    // Change to success state if no database errors
    case "changeToSuccessWhenNoFinalError":
      if (state.formType === "login") {
        if (state.employeeIdError === "" && state.passwordError === "") {
          return { ...state, isSuccess: true };
        }
      }

      if (state.formType === "signup") {
        if (
          state.emailError === "" &&
          state.usernameError === "" &&
          state.passwordError === "" &&
          state.confirmedPasswordError === ""
        ) {
          return { ...state, isSuccess: true };
        }
      }

      if (state.formType === "recoverAccount") {
        if (state.emailError === "") {
          return { ...state, isSuccess: true };
        }
      }

      return state;

    case "resetData":
      return {
        ...state,
        email: "",
        password: "",
        confirmedPassword: "",
        employeeId: "",
        username: "",
      };

    case "resetFormProgressState":
      return { ...state, isPending: false, isSuccess: false };

    case "resetErrorData":
      return {
        ...state,
        emailError: null,
        passwordError: null,
        confirmedPasswordError: null,
        employeeIdError: null,
        usernameError: null,
      };

    case "resetFormType":
      return {
        ...state,
        formType: "login",
      };

    case "resetAllStates":
      return {
        ...loginSignupStartState,
      };
    default:
      return state;
  }
};

export default function useLoginSignupReducer() {
  const [loginSignupFinalState, dispatch] = useReducer(
    reducer,
    loginSignupStartState
  );
  const { capitalizeStr } = useCapitalizeStr();

  // function to open the form
  const openForm = () => {
    dispatch({ type: "openForm" });
  };

  // function to close the form
  const closeForm = () => {
    dispatch({ type: "resetAllStates" });
  };

  // function to change the form type
  const changeFormType = (formType) => {
    dispatch({ type: "resetFormProgressState" });
    dispatch({ type: "resetData" });
    dispatch({ type: "resetErrorData" });
    dispatch({
      type: "changeFormType",
      payload: formType,
    });
  };

  // function to collect data
  const collectData = (e, actionType) => {
    dispatch({
      type: actionType,
      payload: e.target.value,
    });
  };

  //function to check form data
  const checkData = (formType) => {
    dispatch({ type: `check${capitalizeStr(formType)}InitialInfo` });
  };

  const checkDatabaseData = useCallback(
    (formType) => {
      dispatch({ type: `check${capitalizeStr(formType)}FormDatabaseErrors` });
    },
    [capitalizeStr]
  );

  return {
    loginSignupFinalState,
    dispatch,
    openForm,
    closeForm,
    collectData,
    changeFormType,
    checkData,
    checkDatabaseData,
  };
}
