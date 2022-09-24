import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionType = { type: 'ADD_NEW_ENTRY'; payload: Entry } | { type: 'ENTRY_UPDATE'; payload: Entry };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_NEW_ENTRY':
      return { ...state, entries: [...state.entries, payload] };

    case 'ENTRY_UPDATE':
      return {
        ...state,

        entries: state.entries.map((entry) => {
          if (entry._id === payload._id) {
            (entry.status = payload.status), (entry.description = payload.description);
          }
          return entry;
        }),
      };

    default:
      return state;
  }
};
