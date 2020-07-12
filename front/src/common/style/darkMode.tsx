import React, { createContext, ReactNode, useEffect, useState } from 'react';
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

const THEME_LOCAL_STORAGE_KEY = 'theme';

const DarkModeProvider: React.FunctionComponent<Props> = ({ children }) => {
  const initialTheme =
    localStorage.getItem(THEME_LOCAL_STORAGE_KEY) === 'dark' ? 'dark' : 'light';

  const [themeColor, setThemeColor] = useState<PaletteType>(initialTheme);

  useEffect(() => localStorage.setItem(THEME_LOCAL_STORAGE_KEY, themeColor), [
    themeColor,
  ]);

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
