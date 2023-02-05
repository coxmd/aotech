//react
import { useContext } from "react";

//context
import { LoginSignupContext } from "../contexts/LoginSignupContext";

//the hook
export default function useLoginSignupContext() {
  const loginSignupContextValue = useContext(LoginSignupContext);
  return loginSignupContextValue;
}
