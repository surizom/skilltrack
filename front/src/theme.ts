import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { primary, secondary, whiteBackground } from './common/style/palette';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: whiteBackground,
    },
  },
});

export default theme;
