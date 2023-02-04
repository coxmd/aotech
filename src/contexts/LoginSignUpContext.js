import { createContext, useState } from "react";

export const LoginSignupContext = createContext();

export function LoginSignupContextProvider({ children }) {
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  return (
    <LoginSignupContext.Provider
      value={{ loginVisible, setLoginVisible, signupVisible, setSignupVisible }}
    >
      {children}
    </LoginSignupContext.Provider>
  );
}
