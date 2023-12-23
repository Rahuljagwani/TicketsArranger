"use client"

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

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
  const [theme, setTheme] = useState<string>("light");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === "dark");

  useEffect(() => {
    setTheme(localStorage.getItem('theme') === null ? "light" : localStorage.getItem('theme') as string);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

