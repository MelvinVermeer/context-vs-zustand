import { useUserPreferences } from "./UserPreferencesContext";

export const LanguageEmoji = () => {
  const { language } = useUserPreferences();
  return <h1>{language === "nl" ? "🇳🇱" : "🇬🇧"}</h1>;
};
