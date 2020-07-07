import type CSS from 'csstype';
import { importanceToColor } from '../common/style/importanceColors';

export const skillListStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  height: '10vh',
  width: '60vh',
  borderRadius: '1vh',
  borderColor: 'black',
  borderWidth: '1vh',
  margin: '4vh',
  justifyContent: 'center',
  alignContent: 'center',
};

export const importanceStyle = (importance: number): CSS.Properties => {
  return {
    color: importanceToColor(importance),
  };
};

export const skillNameStyle: CSS.Properties = {
  fontSize: '4vh',
};
