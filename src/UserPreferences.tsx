import React from "react";
import { useUserPreferences } from "./UserPreferencesContext";

const UserPreferences: React.FC = () => {
  const { theme, setTheme, language, setLanguage } = useUserPreferences();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en");
  };

  return (
    <div>
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <div>
        <p>Current Language: {language}</p>
        <button onClick={toggleLanguage}>Toggle Language</button>
      </div>
    </div>
  );
};

export default UserPreferences;
