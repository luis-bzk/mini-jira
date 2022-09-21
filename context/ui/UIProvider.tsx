import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from './';

// interface constructor -> state
export interface UIState {
  sideMenuOpen: boolean;
}

// initial state
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

// props provider
interface props {
  children: JSX.Element;
}

// provider
export const UIProvider: FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);
  const { sideMenuOpen } = state;

  const openSideMenu = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  const valuesProvider = {
    sideMenuOpen,

    // methods
    openSideMenu,
    closeSideMenu,
  };

  return <UIContext.Provider value={valuesProvider}>{children}</UIContext.Provider>;
};
