//react
import { useReducer } from "react";

//reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case "changeEmail":
      return { ...state, email: action.payload };
    case "checkForErrors":
      return {
        ...state,
        emailError:
          state.email === "" ||
          !state.email.includes("@") ||
          !state.email.includes(".com")
            ? "Please provide email address"
            : "",
      };
    case "changeSuccess":
      if (state.emailError === "") {
        return {
          ...state,
          success: "Subscription successfully added",
          email: "",
        };
      }
    case "changeDisable":
      if (state.success !== "") {
        return { ...state, disabled: true };
      }

    case "reset":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialState = {
  email: "",
  emailError: "",
  success: "",
  disabled: false,
};

export default function useSubscribeMailingList() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return { state, dispatch, initialState };
}
