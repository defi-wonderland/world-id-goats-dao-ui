import { createContext, useMemo } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { getMuiThemeConfig, darkTheme } from '~/components';
import { Theme, ThemeName } from '~/types';

type ContextType = {
  theme: ThemeName;
  darkTheme: Theme;
};

interface StateProps {
  children: React.ReactElement;
}

export const ThemeContext = createContext({} as ContextType);

export const ThemeProvider = ({ children }: StateProps) => {
  const theme = 'dark';

  const muiTheme = useMemo(() => getMuiThemeConfig(darkTheme, theme), [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        darkTheme,
      }}
    >
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
