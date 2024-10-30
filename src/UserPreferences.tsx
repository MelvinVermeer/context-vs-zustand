import React, { useState } from "react";

const UserPreferences: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [language, setLanguage] = useState<"en" | "nl">("en");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "nl" : "en"));
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
