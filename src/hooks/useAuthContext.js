//react
import { useContext } from "react";

//context
import { AuthContext } from "../contexts/AuthContext";

//the hook
export default function useAuthContext() {
  const authContextValue = useContext(AuthContext);

  return authContextValue;
}
