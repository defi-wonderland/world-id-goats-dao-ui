export type ThemeName = 'light' | 'dark';

export interface Theme {
  type: ThemeName;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  titleColor: string;
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
