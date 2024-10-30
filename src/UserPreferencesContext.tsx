import React, { createContext, useContext, useState, ReactNode } from "react";

const UserPreferencesContext = createContext<
  UserPreferencesContext | undefined
>(undefined);

export const UserPreferencesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("nl");
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <UserPreferencesContext.Provider
      value={{ language, theme, setLanguage, setTheme }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = (): UserPreferencesContext => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(
      "useUserPreferences must be used within a UserPreferencesProvider"
    );
  }
  return context;
};
