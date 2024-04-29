import { createTheme } from '@mui/material';
import { Theme, ThemeName } from '~/types';

export const getMuiThemeConfig = (currentTheme: Theme, themeName: ThemeName) => {
  return createTheme({
    palette: {
      mode: themeName,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: currentTheme.backgroundPrimary,
            color: currentTheme.textPrimary,
          },
        },
      },
    },
    typography: {
      // set your global font family here
      fontFamily: [
        'SharpGroteskMedium',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {
        fontSize: '1.2rem',
        letterSpacing: '0.125rem',
      },
    },
  });
};
