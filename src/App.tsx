import "./App.css";
import UserPreferences from "./UserPreferences";
import { ThemeEmoji } from "./ThemeEmoji";
import { LanguageEmoji } from "./LanguageEmoji";

function App() {
  return (
    <div>
      <UserPreferences />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ThemeEmoji />
        <LanguageEmoji />
      </div>
    </div>
  );
}

export default App;
