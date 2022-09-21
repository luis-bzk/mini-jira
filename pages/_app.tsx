// packges next
import type { AppProps } from 'next/app';

// third part packages
import { CssBaseline, ThemeProvider } from '@mui/material';

// project components
import '../styles/globals.css';
import { UIProvider } from '../context/ui';
import { lightTheme, darkTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
