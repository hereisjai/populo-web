import React, { createContext, useContext } from "react";
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from "styled-components";

// Default Theme (your library's default colors)
const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    danger: "#dc3545",
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
};

// Create a context to allow theme overriding
const ThemeContext = createContext(defaultTheme);

// Custom ThemeProvider that consumers can use
export const ThemeProvider: React.FC<{ theme?: DefaultTheme; children: React.ReactNode }> = ({ theme, children }) => {
  const mergedTheme = { ...defaultTheme, ...theme }; // Merge consumer-provided theme with defaults

  return (
    <ThemeContext.Provider value={mergedTheme}>
      <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook to get the theme inside your components
export const useTheme = () => useContext(ThemeContext);
