import { darkTheme } from '~/components/Theme';
import { Theme, ThemeName } from '~/types';

export const getTheme = (theme?: ThemeName): Theme => {
  switch (theme) {
    case 'dark':
      return darkTheme;
    default:
      return darkTheme;
  }
};
