
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-switcher">
      <button
        className="theme-toggle"
        onClick={() => setOpen(!open)}
      >
        <span
          className="current-color"
          style={{ background: theme }}
        />
        Theme
      </button>

      {open && (
        <div className="theme-popup">
          <p>Choose Theme</p>

          <div className="theme-colors">
            {themes.map((item) => (
              <button
                key={item.name}
                title={item.name}
                onClick={() => {
                  setTheme(item.color);
                  setOpen(false);
                }}
                className={`theme-color ${
                  theme === item.color ? "active" : ""
                }`}
                style={{ backgroundColor: item.color }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
