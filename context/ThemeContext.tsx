"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react';

type ThemeContextProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface StateGlobalProviderProps {
    children: ReactNode
}


export const ThemeProvider: React.FC<StateGlobalProviderProps> = ({ children }: StateGlobalProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
