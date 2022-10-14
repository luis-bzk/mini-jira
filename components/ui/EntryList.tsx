import { FC, useContext, useMemo, DragEvent } from 'react';

import { Paper, List } from '@mui/material';

import styles from './EntryList.module.css';

import { EntriesContext } from '../../context/entries/';
import { UIContext } from '../../context/ui';

import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries, status]);

  // drop functionallity
  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('id');

    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;

    updateEntry(entry);
    endDragging();
  };

  return (
    // TODO: Drop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 210px)',
          backgroundColor: 'transparent',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          padding: '5px',
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.5 : 1,
            transition: 'all 0.3s',
          }}
        >
          {entriesByStatus.map((entry) => (
            <EntryCard
              key={entry._id}
              entry={entry}
            />
          ))}
        </List>
      </Paper>
    </div>
  );
};
