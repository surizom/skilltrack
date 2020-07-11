import { createMuiTheme } from '@material-ui/core/styles';
import { errorColor, primary, secondary, whiteBackground } from './palette';
import type { PaletteType } from '@material-ui/core';

const theme = (paletteType: PaletteType | null) =>
  createMuiTheme({
    palette: {
      type: paletteType ?? 'light',
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
