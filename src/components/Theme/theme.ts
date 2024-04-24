import { Theme } from '~/types';

export const darkTheme: Theme = {
  type: 'dark',
  titleColor: '#000000',
  textPrimary: '#ffffff',
  textSecondary: '#99A4B8',
  textTertiary: '#66B2FF',
  backgroundPrimary: '#000000',
  backgroundSecondary: '#1E1E1E',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '0.8rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(153, 164, 184, 0.1)',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',

  primaryColor: 'rgba(0, 115, 230, 0.8)',
  accentColor: '#ececec',
  disabledColor: '#85888E',

  errorPrimary: '#F04438',
  warningPrimary: '#FFD27A',
  successPrimary: '#86D5A5',
};

export const lightTheme: Theme = {
  type: 'light',
  titleColor: '#000000',
  textPrimary: '#000000',
  textSecondary: '#717171',
  textTertiary: '#0073E6',
  backgroundPrimary: '#f8f8f8',
  backgroundSecondary: '#ffffff',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '0.8rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(183, 183, 183, 0.3)',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',

  primaryColor: 'rgba(0, 115, 230, 0.8)',
  accentColor: '#ececec',
  disabledColor: '#85888E',

  errorPrimary: '#F04438',
  warningPrimary: '#FFD27A',
  successPrimary: '#86D5A5',
};
