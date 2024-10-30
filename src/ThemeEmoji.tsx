import { useUserPreferences } from "./useUserPreferences";

export const ThemeEmoji = () => {
  const theme = useUserPreferences((state) => state.theme);
  return <h1>{theme === "light" ? "🌞" : "🌚"}</h1>;
};
