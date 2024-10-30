type Language = "en" | "nl";
type Theme = "light" | "dark";

type UserPreferencesContext = {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
};
