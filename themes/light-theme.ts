import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e7e5e4',
    },
    primary: {
      main: '#4E89FF',
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
            background: '#f9fafb',
          },

          '&.entry-card': {
            background: '#e2e8f0',
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
