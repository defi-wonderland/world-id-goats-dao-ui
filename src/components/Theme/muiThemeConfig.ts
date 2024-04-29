import { createTheme } from '@mui/material';
import { Theme, ThemeName } from '~/types';

export const getMuiThemeConfig = (darkTheme: Theme, themeName: ThemeName) => {
  return createTheme({
    palette: {
      mode: themeName,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: darkTheme.backgroundPrimary,
            color: darkTheme.textPrimaryOpposite,
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
        '@media (max-width: 600px)': {
          fontSize: '1rem',
        },
      },
    },
  });
};
