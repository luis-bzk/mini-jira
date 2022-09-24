import { FC, useReducer } from 'react';

import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

// interface constructor -> state
export interface EntriesState {
  entries: Array<Entry>;
}

// initial state
const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'PENDING: Irure officia consectetur non ex amet laborum in sint laboris ex deserunt.',
      createdAt: Date.now(),
      status: 'pending',
    },
    {
      _id: uuidv4(),
      description: 'IN-PROGRESS: Ad consectetur exercitation et reprehenderit ad sint culpa est.',
      createdAt: Date.now() - 1000000,
      status: 'in-progress',
    },
    {
      _id: uuidv4(),
      description:
        'FINISHED: Laboris nostrud aliqua aute proident cupidatat excepteur laboris quis exercitation non ex anim.',
      createdAt: Date.now() - 2000000,
      status: 'finished',
    },
  ],
};

// props provider
interface props {
  children: JSX.Element;
}

// provider
export const EntriesProvider: FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
  const { entries } = state;

  // methods
  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description: description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: 'ADD_NEW_ENTRY', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: 'ENTRY_UPDATE', payload: entry });
  };

  const valuesProvider = {
    entries,

    // methods
    addNewEntry,
    updateEntry,
  };

  return <EntriesContext.Provider value={valuesProvider}>{children}</EntriesContext.Provider>;
};
