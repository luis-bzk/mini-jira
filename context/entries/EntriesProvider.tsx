import { FC, useEffect, useReducer } from 'react';

import { EntriesContext, entriesReducer } from './';

import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';

// interface constructor -> state
export interface EntriesState {
  entries: Array<Entry>;
}

// initial state
const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

// props provider
interface props {
  children: JSX.Element;
}

// PROVIDER
export const EntriesProvider: FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
  const { entries } = state;

  // methods
  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', {
      description: description,
    });
    dispatch({ type: 'ADD_NEW_ENTRY', payload: data });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: 'ENTRY_UPDATE', payload: entry });
  };

  const refreshEntries = async () => {
    const response = await entriesApi.get<Array<Entry>>('/entries');
    const { data } = response;

    dispatch({ type: 'REFRRESH_ENTRIES_DATA', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  // values
  const valuesProvider = {
    entries,

    // methods
    addNewEntry,
    updateEntry,
  };

  return <EntriesContext.Provider value={valuesProvider}>{children}</EntriesContext.Provider>;
};
