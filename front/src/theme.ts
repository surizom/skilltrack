import { createMuiTheme } from '@material-ui/core/styles';
import {
  errorColor,
  primary,
  secondary,
  whiteBackground,
} from './common/style/palette';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: errorColor,
    },
    background: {
      default: whiteBackground,
    },
  },
});

export default theme;
