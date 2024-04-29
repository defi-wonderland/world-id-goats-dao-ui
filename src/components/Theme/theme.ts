import { Theme } from '~/types';

export const darkTheme: Theme = {
  type: 'dark',
  textPrimary: '#000000',
  textPrimaryOpposite: '#FFFFFF',
  textSecondary: '#99A4B8',
  textTertiary: '#625CBF',
  backgroundPrimary: '#0e152c',
  backgroundSecondary: '#0e152c',
  backgroundModal: '#FFFFFF',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '0.8rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(153, 164, 184, 0.1)',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',

  primaryColor: 'rgba(0, 115, 230, 0.8)',
  accentColor: '#ececec',
  disabledColor: '#94969c',

  errorPrimary: '#D92D20',
  warningPrimary: '#FFD27A',
  successPrimary: '#4aa16c',
};
