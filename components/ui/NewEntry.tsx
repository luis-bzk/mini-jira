import { ChangeEvent, Fragment, useState, useContext } from 'react';

import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, toggleFormEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  // Methods

  const onChangeTextField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSaveTask = () => {
    if (inputValue.length <= 0) return;

    addNewEntry(inputValue);

    toggleFormEntry(false);
    setInputValue('');
    setTouched(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <Fragment>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder='Enter your new task. ej: Nulla minim nostrud...'
            autoFocus
            multiline
            label='New task'
            helperText={inputValue.length <= 0 && touched && 'Enter a value'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onChangeTextField}
            onBlur={() => setTouched(true)}
          />

          <Box
            display={'flex'}
            justifyContent='space-between'
          >
            <Button
              variant='outlined'
              onClick={() => toggleFormEntry(false)}
            >
              Cancel
            </Button>

            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlinedIcon />}
              onClick={handleSaveTask}
            >
              Save
            </Button>
          </Box>
        </Fragment>
      ) : (
        <Button
          startIcon={<PlaylistAddOutlinedIcon />}
          fullWidth
          variant='contained'
          onClick={() => toggleFormEntry(true)}
        >
          Add new task
        </Button>
      )}
    </Box>
  );
};
