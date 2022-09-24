import { UIState } from './';

type UIActionType =
  | { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }
  | { type: 'ADD_NEW_ENTRY'; payload: boolean }
  | { type: 'START_DRAGGING' }
  | { type: 'END_DRAGGING' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return { ...state, sideMenuOpen: true };

    case 'CLOSE_SIDEBAR':
      return { ...state, sideMenuOpen: false };

    case 'ADD_NEW_ENTRY':
      return { ...state, isAddingEntry: action.payload };

    case 'START_DRAGGING':
      return { ...state, isDragging: true };

    case 'END_DRAGGING':
      return { ...state, isDragging: false };

    default:
      return state;
  }
};
