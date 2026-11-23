
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = [
  { name: "Lime", color: "#B7F000" },
  { name: "Purple", color: "#A855F7" },
  { name: "Blue", color: "#00A3FF" },
  { name: "Red", color: "#EF4444" },
  { name: "Orange", color: "#FF7A00" },
  { name: "Pink", color: "#EC4899" },
  { name: "Cyan", color: "#06B6D4" },
  { name: "Green", color: "#22C55E" },
];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("gym-theme") || "#B7F000";
  });

  useEffect(() => {
    const rgb = theme
      .replace("#", "")
      .match(/.{2}/g)
      .map((value) => parseInt(value, 16))
      .join(", ");

    document.documentElement.style.setProperty("--accent", theme);
    document.documentElement.style.setProperty("--accent-rgb", rgb);

    localStorage.setItem("gym-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
