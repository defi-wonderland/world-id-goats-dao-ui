export type ThemeName = 'light' | 'dark';

export interface Theme {
  type: ThemeName;
  textPrimaryOpposite: string;
  textSecondary: string;
  textTertiary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundModal: string;
  textPrimary: string;
  titleFontFamily: string;
  textFontFamily: string;
  borderRadius: string;
  secondaryBorderRadius: string;
  border: string;
  boxShadow: string;
  primaryColor: string;
  accentColor: string;
  disabledColor: string;
  errorPrimary: string;
  warningPrimary: string;
  successPrimary: string;
}

export interface PropTheme {
  theme: Theme;
}
