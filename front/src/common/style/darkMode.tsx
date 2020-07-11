import React, { createContext, ReactNode, useState } from 'react';
import type { PaletteType } from '@material-ui/core';

interface Props {
  children?: ReactNode;
}

interface ModalContextProps {
  themeColor: PaletteType | null;
  switchThemeColor: () => void;
}

const DEFAULT_CALLBACK = (param?: any) => {};

const INITIAL_CONTEXT_VALUE: ModalContextProps = {
  themeColor: 'light',
  switchThemeColor: DEFAULT_CALLBACK,
};

export const DarkModeContext = createContext<ModalContextProps>(
  INITIAL_CONTEXT_VALUE,
);

const DarkModeProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [themeColor, setThemeColor] = useState<PaletteType>('light');

  const switchThemeColor = () => {
    switch (themeColor) {
      case 'dark':
        setThemeColor('light');
        break;
      case 'light':
        setThemeColor('dark');
        break;
    }
  };

  return (
    <DarkModeContext.Provider value={{ themeColor, switchThemeColor }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
