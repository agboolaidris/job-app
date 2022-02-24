import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  colors: {
    main: {},
  },
});
declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      primary: {
        main: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      primary?: {
        main?;
      };
    };
  }
}

export default theme;
