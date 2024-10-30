import "./App.css";
import UserPreferences from "./UserPreferences";
import { ThemeEmoji } from "./ThemeEmoji";
import { LanguageEmoji } from "./LanguageEmoji";
import { UserPreferencesProvider } from "./UserPreferencesContext";

function App() {
  return (
    <UserPreferencesProvider>
      <UserPreferences />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ThemeEmoji />
        <LanguageEmoji />
      </div>
    </UserPreferencesProvider>
  );
}

export default App;
