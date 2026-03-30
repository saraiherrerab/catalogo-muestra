'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gray-900 tracking-wider">
            PRODUCTOS PETROLEROS
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors tracking-wide">
              {t.nav.home}
            </a>
            <a href="/catalogo" className="text-gray-700 hover:text-amber-600 font-medium transition-colors tracking-wide">
              {t.nav.catalog}
            </a>
            <a href="/nosotros" className="text-gray-700 hover:text-amber-600 font-medium transition-colors tracking-wide">
              {t.nav.about}
            </a>
            <a href="/servicios" className="text-gray-700 hover:text-amber-600 font-medium transition-colors tracking-wide">
              {t.nav.services}
            </a>
            <a href="/contacto" className="text-gray-700 hover:text-amber-600 font-medium transition-colors tracking-wide">
              {t.nav.contact}
            </a>
            <LanguageSwitcher />
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
