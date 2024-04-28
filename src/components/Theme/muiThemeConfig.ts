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
        'SFProText',
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
      },
      // Modal title
      h2: {
        fontSize: '2rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '150%',
      },
      h3: {
        fontSize: '1.6rem',
        lineHeight: '150%',
      },
    },
  });
};
