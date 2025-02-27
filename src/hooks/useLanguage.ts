import { useState, useEffect } from 'react';

type Language = 'en' | 'pt';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      return savedLanguage || 'pt';
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return { language, setLanguage };
}