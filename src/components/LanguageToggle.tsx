import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="px-3 py-1 rounded-lg bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
    >
      {language === 'en' ? 'PT' : 'EN'}
    </button>
  );
}