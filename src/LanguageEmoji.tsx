import { useUserPreferences } from "./useUserPreferences";

export const LanguageEmoji = () => {
  const language = useUserPreferences((state) => state.language);
  return <h1>{language === "nl" ? "🇳🇱" : "🇬🇧"}</h1>;
};
