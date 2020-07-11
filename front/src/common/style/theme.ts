import { createMuiTheme, Theme } from '@material-ui/core/styles';
import type { PaletteType } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const primary = '#264653';
const secondary = '#2a9d8f';
const tertiary = '#e9c46a';
const quartenary = '#f4a261';
const quintary = '#e76f51';
const whiteBackground = '#f8f8fb';
const blackBackground = '#2e2e2e';
const errorColor = red.A400;

const theme = (paletteType: PaletteType | null) =>
  createMuiTheme({
    palette: {
      type: paletteType ?? 'light',

      error: {
        main: errorColor,
      },
      background: {
        default: paletteType === 'light' ? whiteBackground : blackBackground,
      },
    },
  });

export default theme;
