//react
import { createContext, useState } from "react";

//creating the context
export const LoginSignupContext = createContext();

//creating the context provider component
export function LoginSignupContextProvider({ children }) {
  const [formType, setFormType] = useState("login");
  return (
    <LoginSignupContext.Provider value={{ formType, setFormType }}>
      {children}
    </LoginSignupContext.Provider>
  );
}
