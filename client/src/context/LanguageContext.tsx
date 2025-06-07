import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationKeys } from "@/lib/i18n";
import { Language } from "@/lib/types";

interface LanguageContextType {
  language: Language;
  t: TranslationKeys;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "sr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const switchLanguage = (lang: Language) => setLanguage(lang);

  const value = {
    language,
    t: translations[language],
    switchLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
