//react
import { useContext } from "react";

//context
import { MediaQueryContext } from "../contexts/MediaQueryContext";

//the hook
export default function useMediaQueryContext() {
  const mediaQueryContextValue = useContext(MediaQueryContext);

  return mediaQueryContextValue;
}
