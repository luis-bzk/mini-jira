import { FC, useEffect, useReducer } from 'react';

import { useSnackbar } from 'notistack';

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

  const { enqueueSnackbar } = useSnackbar();

  // methods
  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', {
      description: description,
    });
    dispatch({ type: 'ADD_NEW_ENTRY', payload: data });
  };

  const updateEntry = async (entry: Entry, showSnackBar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
        description: entry.description,
        status: entry.status,
      });

      dispatch({ type: 'ENTRY_UPDATE', payload: data });

      if (showSnackBar) {
        enqueueSnackbar('Entry updated successfully', {
          variant: 'success',
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEntry = async (id: string) => {
    try {
      await entriesApi.delete(`/entries/${id}`);

      dispatch({ type: 'DELETE_ENTRY', payload: id });
    } catch (error) {
      console.log(error);
    }
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
    deleteEntry,
  };

  return <EntriesContext.Provider value={valuesProvider}>{children}</EntriesContext.Provider>;
};
