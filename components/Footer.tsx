'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500 tracking-wide">
              PRODUCTOS PETROLEROS
            </h3>
            <p className="text-gray-400 text-sm">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 tracking-wide">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-amber-500">{t.nav.home}</a></li>
              <li><a href="/catalogo" className="hover:text-amber-500">{t.nav.catalog}</a></li>
              <li><a href="/nosotros" className="hover:text-amber-500">{t.nav.about}</a></li>
              <li><a href="/servicios" className="hover:text-amber-500">{t.nav.services}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 tracking-wide">{t.footer.services}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{t.services.technical}</li>
              <li>{t.services.delivery}</li>
              <li>{t.services.warranty}</li>
              <li>Soporte 24/7</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 tracking-wide">{t.footer.contact}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 info@productospetroleros.com</li>
              <li>📱 +51 999 999 999</li>
              <li>📍 Lima, Perú</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Catálogo de Productos Petroleros. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
