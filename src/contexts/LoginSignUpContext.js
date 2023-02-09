//react
import { createContext } from "react";

//custom hook
import useLoginSignupReducer from "../hooks/useLoginSignupReducer";
import useBackdrop from "../hooks/useBackdrop";

//creating the context
export const LoginSignupContext = createContext();

//creating the context provider component
export function LoginSignupContextProvider({ children }) {
  const {
    loginSignupFinalState,
    openForm,
    closeForm,
    collectData,
    changeFormType,
    checkData,
    checkDatabaseData,
    dispatch,
  } = useLoginSignupReducer();

  const { backdropOpen, setBackdropOpen } = useBackdrop();

  return (
    <LoginSignupContext.Provider
      value={{
        loginSignupFinalState,
        backdropOpen,
        setBackdropOpen,
        openForm,
        closeForm,
        collectData,
        changeFormType,
        checkData,
        checkDatabaseData,
        dispatch,
      }}
    >
      {children}
    </LoginSignupContext.Provider>
  );
}
