import { useUserPreferences } from "./UserPreferencesContext";

export const ThemeEmoji = () => {
  const { theme } = useUserPreferences();

  // const theme = "dark" as "light" | "dark";
  return <h1>{theme === "light" ? "🌞" : "🌚"}</h1>;
};
