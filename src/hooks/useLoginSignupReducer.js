//react
import { useReducer } from "react";

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
    case "checkRecoverFormInfo":
      return {
        ...state,
        emailError:
          state.email === "" ||
          !state.email.includes("@") ||
          !state.email.includes(".com")
            ? "Please provide email address"
            : "",
      };

    case "checkLoginFormInfo":
      return { ...state };

    case "resetData":
      return {
        ...state,
        email: "",
        password: "",
        confirmedPassword: "",
        employeeId: "",
        username: "",
        emailError: "",
        passwordError: "",
        confirmedPasswordError: "",
        employeeIdError: "",
        usernameError: "",
      };

    case "resetFormType":
      return {
        ...state,
        formType: "login",
      };
    default:
      return state;
  }
};

const loginSignupStartState = {
  formOpen: false,
  formType: "login",
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  confirmedPassword: "",
  confirmedPasswordError: "",
  employeeId: "",
  employeeIdError: "",
  username: "",
  usernameError: "",
};

export default function useLoginSignupReducer() {
  const [loginSignupFinalState, dispatch] = useReducer(
    reducer,
    loginSignupStartState
  );

  // function to open the form

  const openForm = () => {
    dispatch({ type: "openForm" });
  };

  // function to close the form
  const closeForm = () => {
    dispatch({ type: "resetData" });
    dispatch({ type: "resetFormType" });
    dispatch({ type: "closeForm" });
  };

  // function to change the form type
  const changeFormType = (formType) => {
    dispatch({ type: "resetData" });
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

  return {
    loginSignupFinalState,
    dispatch,
    openForm,
    closeForm,
    collectData,
    changeFormType,
  };
}
