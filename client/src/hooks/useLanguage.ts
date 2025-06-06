import { useState, useEffect } from 'react';
import { Language } from '@/lib/types';
import { translations, TranslationKeys } from '@/lib/i18n';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'sr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return {
    language,
    t,
    switchLanguage,
  };
}
