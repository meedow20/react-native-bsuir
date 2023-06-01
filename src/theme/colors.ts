import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';

export const colors = {
  white: '#fff',
  black: '#000',
  gray: 'gray',
  violet: 'rgba(103, 80, 164, 1)',
};

export const navigationTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: colors.violet,
  },
};
