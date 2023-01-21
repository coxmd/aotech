//react
import { createContext, useEffect, useReducer } from "react";

//create context
export const MediaQueryContext = createContext();

//media queries
const mobile = "(max-width: 480px)";
const mobileQuery = window.matchMedia(mobile);

const smallTablet = "(min-width: 481px) and (max-width: 768px)";
const smallTabletQuery = window.matchMedia(smallTablet);

const largeTablet = "(min-width: 769px) and (max-width: 1024px)";
const largeTabletQuery = window.matchMedia(largeTablet);

const computerScreen = "(min-width: 1025px)";
const computerScreenQuery = window.matchMedia(computerScreen);

//mediaquery reducer
const mediaQueryReducer = (state, action) => {
  switch (action.type) {
    case "mobileMatched":
      return { ...action.payload };

    case "smallTabletMatched":
      return { ...action.payload };

    case "largeTabletMatched":
      return { ...action.payload };

    case "computerScreenMatched":
      return { ...action.payload };

    default:
      return state;
  }
};

export function MediaQueryProvider({ children }) {
  const [mediaQueryState, dispatch] = useReducer(mediaQueryReducer, {
    mobileMatches: mobileQuery.matches,
    smallTabletMatches: smallTabletQuery.matches,
    largeTabletMatches: largeTabletQuery.matches,
    computerScreenMatches: computerScreenQuery.matches,
  });

  const setMobileMatched = (e) => {
    if (e.matches) {
      dispatch({
        type: "mobileMatched",
        payload: {
          mobileMatches: true,
          smallTabletMatches: false,
          largeTabletMatches: false,
          computerScreenMatches: false,
        },
      });
    }
  };

  const setSmallTabletMatched = (e) => {
    if (e.matches) {
      dispatch({
        type: "smallTabletMatched",
        payload: {
          mobileMatches: false,
          smallTabletMatches: true,
          largeTabletMatches: false,
          computerScreenMatches: false,
        },
      });
    }
  };

  const setLargeTabletMatched = (e) => {
    if (e.matches) {
      dispatch({
        type: "largeTabletMatched",
        payload: {
          mobileMatches: false,
          smallTabletMatches: false,
          largeTabletMatches: true,
          computerScreenMatches: false,
        },
      });
    }
  };

  const setComputerScreenMatched = (e) => {
    if (e.matches) {
      dispatch({
        type: "computerScreenMatched",
        payload: {
          mobileMatches: false,
          smallTabletMatches: false,
          largeTabletMatches: false,
          computerScreenMatches: true,
        },
      });
    }
  };

  useEffect(() => {
    mobileQuery.addEventListener("change", setMobileMatched);

    smallTabletQuery.addEventListener("change", setSmallTabletMatched);

    largeTabletQuery.addEventListener("change", setLargeTabletMatched);

    computerScreenQuery.addEventListener("change", setComputerScreenMatched);

    return () => {
      mobileQuery.removeEventListener("change", setMobileMatched);
      smallTabletQuery.removeEventListener("change", setSmallTabletMatched);
      largeTabletQuery.removeEventListener("change", setLargeTabletMatched);
      computerScreenQuery.removeEventListener(
        "change",
        setComputerScreenMatched
      );
    };
  }, []);

  return (
    <MediaQueryContext.Provider value={{ mediaQueryState: mediaQueryState }}>
      {children}
    </MediaQueryContext.Provider>
  );
}
