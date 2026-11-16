import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Language, PROFILE_COPY } from "../i18n/profileCopy";

const STORAGE_KEY = "portfolio_lang";

function getInitialLanguage(): Language {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get("lang");
  if (queryLang === "id" || queryLang === "en") {
    return queryLang;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "id" || saved === "en") {
    return saved;
  }

  return "en";
}

export const LanguageContextProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const copy = PROFILE_COPY[language];

  const setLanguage = useCallback((nextLang: Language) => {
    setLanguageState(nextLang);
    window.localStorage.setItem(STORAGE_KEY, nextLang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLang);
    window.history.replaceState({}, "", url.toString());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.seo.title;

    const metaUpdates: ReadonlyArray<[string, string]> = [
      ['meta[name="description"]', copy.seo.description],
      ['meta[property="og:title"]', copy.seo.title],
      ['meta[property="og:description"]', copy.seo.description],
      ['meta[name="twitter:title"]', copy.seo.title],
      ['meta[name="twitter:description"]', copy.seo.description],
    ];

    for (const [selector, content] of metaUpdates) {
      document.querySelector(selector)?.setAttribute("content", content);
    }
  }, [language, copy]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy }}>
      {children}
    </LanguageContext.Provider>
  );
};
