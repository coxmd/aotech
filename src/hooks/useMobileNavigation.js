//react
import { useReducer } from "react";

const mobileNavigation = {
  currentMenu: "",
  previousMenu: [],
  containerOpen: false,
};

const mobileNavigationReducer = (state, action) => {
  switch (action.type) {
    case "open-click":
      return { ...action.payload };
    case "close-click":
      return { ...action.payload };

    case "next": {
      state.previousMenu.push(state.currentMenu);
      return {
        ...state,
        ...action.payload,
      };
    }
    case "previous":
      state.currentMenu = state.previousMenu[state.previousMenu.length - 1];
      state.previousMenu.splice(state.previousMenu.length - 1, 1);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default function useMobileNavigation({ closeBackdrop, openBackdrop }) {
  const [mobileNavigationState, dispatch] = useReducer(
    mobileNavigationReducer,
    mobileNavigation
  );

  const handleOpenMobileNavigation = () => {
    dispatch({
      type: "open-click",
      payload: {
        currentMenu: "main",
        previousMenu: [],
        containerOpen: true,
      },
    });
    openBackdrop();
  };

  const handleCloseMobileNavigation = () => {
    dispatch({
      type: "close-click",
      payload: {
        currentMenu: "",
        previousMenu: [],
        containerOpen: false,
      },
    });
    closeBackdrop();
  };

  const goToNext = (option) => {
    dispatch({
      type: "next",
      payload: {
        currentMenu: option.nextMenu,
      },
    });
  };

  const goToPrevious = () => {
    dispatch({
      type: "previous",
    });
  };

  return {
    state: mobileNavigationState,
    handleCloseMobileNavigation,
    handleOpenMobileNavigation,
    goToNext,
    goToPrevious,
  };
}
