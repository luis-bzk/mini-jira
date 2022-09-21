import { UIState, UI_ACTION_TYPES } from './';

type UIActionType = { type: 'OPEN_SIDEBAR' } | { type: 'CLOSE_SIDEBAR' };

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  // const { type, payload } = action;

  switch (action.type) {
    case UI_ACTION_TYPES.OPEN_SIDEBAR:
      return { ...state, sideMenuOpen: true };

    case UI_ACTION_TYPES.CLOSE_SIDEBAR:
      return { ...state, sideMenuOpen: false };

    default:
      return state;
  }
};
