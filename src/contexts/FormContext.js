//react
import { createContext } from "react";

// custom hook
import useFormReducer from "../hooks/useFormReducer";

export const FormContext = createContext();

export function FormContextProvider({ children }) {
  const {
    formFinalState,
    dispatch,
    selectBoxErrors,
    selectBoxFunctions,
    selectBoxValues,
    selectBoxResetFunctions,
    submit,
    reset,
  } = useFormReducer();

  return (
    <FormContext.Provider
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
    </FormContext.Provider>
  );
}
