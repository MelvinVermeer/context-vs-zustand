export const LanguageEmoji = () => {
  const language = "nl" as "nl" | "en";
  return <h1>{language === "nl" ? "🇳🇱" : "🇬🇧"}</h1>;
};
