"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: string;
};

const initialContext: ThemeContextProps = {
  isDarkMode: false,
  toggleTheme: () => {},
  theme: "light"
}
export const ThemeContext = createContext<ThemeContextProps>(initialContext);

interface StateGlobalProviderProps {
    children: ReactNode
}


export const ThemeProvider: React.FC<StateGlobalProviderProps> = ({ children }: StateGlobalProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

