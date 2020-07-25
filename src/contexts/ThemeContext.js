import React, { createContext, useState } from 'react';

const colors = {
  black: '',
  white: '',
  buttonColor: '',
  theme: '',
};

export const ThemeContext = createContext(colors);

export const ThemeProvider = ({ children }) => {
  const [themeCtx, setThemeCtx] = useState(colors);
  return (
    <ThemeContext.Provider value={{ themeCtx, setThemeCtx }}>
      {children}
    </ThemeContext.Provider>
  );
};
