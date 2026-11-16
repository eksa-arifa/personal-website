import { createContext } from "react";
import { Language, ProfileCopy } from "../i18n/profileCopy";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  copy: ProfileCopy;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
