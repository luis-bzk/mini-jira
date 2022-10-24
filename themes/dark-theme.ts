import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d1d5db',
    },
    secondary: {
      main: '#19874b',
    },
    error: {
      main: '#ef4444',
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          background: '#292C32',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          '&.entries-list-container': {
            background: '#262626',
          },

          '&.entry-card': {
            background: '#404040',
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.delete-button': {
            background: '#C62B2B',
            color: 'white',
            ':hover': {
              background: '#AA1A1A',
              // color: 'white',
            },
          },
        },
      },
    },
  },
});
