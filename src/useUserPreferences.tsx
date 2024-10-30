import { create } from "zustand";

export const useUserPreferences = create<UserPreferencesContext>((set) => ({
  theme: "light",
  language: "nl",
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}));
