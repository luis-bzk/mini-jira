import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

// interface constructor -> state
export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

// initial state
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

// props provider
interface props {
  children: JSX.Element;
}

// provider
export const UIProvider: FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const { sideMenuOpen, isAddingEntry, isDragging } = state;

  // functions | methods
  const openSideMenu = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  const toggleFormEntry = (isAdding: boolean) => {
    dispatch({ type: 'ADD_NEW_ENTRY', payload: isAdding });
  };

  const startDragging = () => {
    dispatch({ type: 'START_DRAGGING' });
  };

  const endDragging = () => {
    dispatch({ type: 'END_DRAGGING' });
  };

  // value
  const valuesProvider = {
    sideMenuOpen,
    isAddingEntry,
    isDragging,

    // methods
    openSideMenu,
    closeSideMenu,

    toggleFormEntry,

    startDragging,
    endDragging,
  };

  return <UIContext.Provider value={valuesProvider}>{children}</UIContext.Provider>;
};
