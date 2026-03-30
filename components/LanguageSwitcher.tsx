'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3 bg-white/30 backdrop-blur-md rounded-2xl p-3 md:p-4 border-2 border-amber-300/40 shadow-xl transition-all duration-300 min-w-[140px] md:min-w-[200px] w-full max-w-xs">
      <button
        onClick={() => setLanguage('es')}
        className={`flex-1 flex items-center justify-center gap-2 px-0 py-2 rounded-lg text-base font-bold transition-all duration-200 ${
          language === 'es'
            ? 'bg-white/80 text-blue-700 shadow ring-2 ring-amber-300/60'
            : 'text-gray-700 hover:bg-white/40 hover:text-blue-900'
        }`}
        title="Español"
      >
        <span className="text-xl leading-none">🇪🇸</span>
        <span className="hidden sm:inline">ES</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`flex-1 flex items-center justify-center gap-2 px-0 py-2 rounded-lg text-base font-bold transition-all duration-200 ${
          language === 'en'
            ? 'bg-white/80 text-blue-700 shadow ring-2 ring-amber-300/60'
            : 'text-gray-700 hover:bg-white/40 hover:text-blue-900'
        }`}
        title="English"
      >
        <span className="text-xl leading-none">🇺🇸</span>
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
}
