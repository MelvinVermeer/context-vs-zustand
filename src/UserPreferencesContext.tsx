import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserPreferencesContextProps {
  language: "en" | "nl";
  theme: "light" | "dark";
  setLanguage: (language: "en" | "nl") => void;
  setTheme: (theme: "light" | "dark") => void;
}

const UserPreferencesContext = createContext<
  UserPreferencesContextProps | undefined
>(undefined);

export const UserPreferencesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"en" | "nl">("nl");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <UserPreferencesContext.Provider
      value={{ language, theme, setLanguage, setTheme }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = (): UserPreferencesContextProps => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(
      "useUserPreferences must be used within a UserPreferencesProvider"
    );
  }
  return context;
};
