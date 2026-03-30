'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'es'
            ? 'bg-amber-600 text-white'
            : 'text-gray-700 hover:bg-gray-200'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-amber-600 text-white'
            : 'text-gray-700 hover:bg-gray-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}
