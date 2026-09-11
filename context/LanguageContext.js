"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import dict from "@/lib/i18n";

const LanguageContext = createContext(null);

function lookup(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time sync from an external system (localStorage) on mount — kept as
    // an effect rather than a lazy useState initializer so the server-rendered
    // "en"/ltr markup always matches the client's first render, avoiding a
    // hydration mismatch; the real language is applied right after mount.
    try {
      const stored = window.localStorage.getItem("mai-lang");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === "en" || stored === "ar") setLang(stored);
    } catch {
      // localStorage unavailable — fall back to default language
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem("mai-lang", lang);
    } catch {
      // ignore write failures (private browsing, quota, etc.)
    }
  }, [lang, hydrated]);

  const value = useMemo(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    const t = (key) => {
      const result = lookup(dict[lang], key);
      return result ?? key;
    };
    const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
    return { lang, setLang, toggleLang, t, dir };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
