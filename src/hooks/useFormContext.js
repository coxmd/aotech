//react
import { useContext } from "react";

//context
import { FormContext } from "../contexts/FormContext";

//the hook
export default function useFormContext() {
  const formContextValue = useContext(FormContext);

  return formContextValue;
}
