//react
import { createContext, useEffect, useState } from "react";

//custom hook
import useLoginSignupContext from "../hooks/useLoginSignupContext";

//creating context
export const AuthContext = createContext();

//creating context provider component
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const { loginSignupFinalState } = useLoginSignupContext();

  useEffect(() => {
    if (
      loginSignupFinalState.formType === "login" &&
      loginSignupFinalState.isSuccess
    ) {
      setLoggedIn(true);
      if (loginSignupFinalState.employeeId === "111") {
        setUser("Nashiuz Zaman");
      }
    }
  }, [
    loginSignupFinalState.formType,
    loginSignupFinalState.isSuccess,
    loginSignupFinalState.employeeId,
  ]);

  return (
    <AuthContext.Provider value={{ user, loggedIn, setUser, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
