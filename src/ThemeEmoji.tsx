export const ThemeEmoji = () => {
  const theme = "dark" as "light" | "dark";
  return <h1>{theme === "light" ? "🌞" : "🌚"}</h1>;
};
