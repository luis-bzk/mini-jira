import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionType =
  | { type: 'ADD_NEW_ENTRY'; payload: Entry }
  | { type: 'ENTRY_UPDATE'; payload: Entry }
  | { type: 'REFRRESH_ENTRIES_DATA'; payload: Array<Entry> }
  | { type: 'DELETE_ENTRY'; payload: string };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'ADD_NEW_ENTRY':
      return { ...state, entries: [...state.entries, action.payload] };

    case 'ENTRY_UPDATE':
      return {
        ...state,

        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            (entry.status = action.payload.status), (entry.description = action.payload.description);
          }
          return entry;
        }),
      };

    case 'REFRRESH_ENTRIES_DATA':
      return {
        ...state,
        entries: [...action.payload],
      };

    case 'DELETE_ENTRY':
      return {
        ...state,

        entries: state.entries.filter((entry) => {
          if (entry._id !== action.payload) {
            return entry;
          }
        }),
      };

    default:
      return state;
  }
};
