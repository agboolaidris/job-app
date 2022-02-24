import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Overpass Mono', ' monospace', 'sans-serif'].join(','),
  },
  colors: {
    primary: {
      dark: '#F4F3F3',
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
      light: '#222831',
    },
  },
});
declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      primary: {
        main: string;
        dark?: string;
      };
      secondary?: {
        main?: string;
        light?: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      primary?: {
        main?: string;
        dark?: string;
      };
      secondary?: {
        main?: string;
        light?: string;
      };
    };
  }
}

export default theme;
