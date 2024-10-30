import { create } from "zustand";

export const useUserPreferences = create<{
  theme: "light" | "dark";
  language: "nl" | "en";
  setTheme: (theme: "light" | "dark") => void;
  setLanguage: (language: "nl" | "en") => void;
}>((set) => ({
  theme: "light",
  language: "nl",
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}));
