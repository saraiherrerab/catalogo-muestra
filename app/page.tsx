'use client';

import { useState } from 'react';
import { productos } from '@/data/productos';
import ProductoModal from '@/components/ProductoModal';
import type { Producto } from '@/data/productos';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white py-20 px-4 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pexels-jan-rune-smenes-reite-221584-3216911.jpg"
            alt="Petróleo"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/40 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center justify-center gap-5 md:gap-7 pt-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide drop-shadow-2xl">
            {t.home.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-amber-50/90 font-medium max-w-3xl mx-auto drop-shadow-lg">
            {t.home.hero.desc}
          </p>

          <button
            onClick={() => window.location.href = '/catalogo'}
            type="button"
            className="inline-flex items-center justify-center bg-transparent border border-amber-400/60 hover:border-amber-400 hover:bg-amber-400/10 text-amber-50 uppercase tracking-[0.2em] font-semibold text-xs md:text-base px-24 md:px-40 py-7 rounded-full transition-all duration-300 backdrop-blur-sm w-3xs focus:outline-none focus:ring-4 focus:ring-amber-400/40"
            aria-label={t.home.hero.explore}
            style={{ padding: '12px', marginBottom: '2rem'}}
          >
            {t.home.hero.explore}
          </button>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 text-xs md:text-base w-full">
            <div className="bg-amber-600/40 backdrop-blur-md rounded-xl border border-amber-500/50 shadow-2xl text-center"  style={{ padding: '6px' }}>
              {t.home.hero.subtitle1}
            </div>
            <div className="bg-amber-600/40 backdrop-blur-md rounded-xl border border-amber-500/50 shadow-2xl text-center"  style={{ padding: '6px' }}>
              {t.home.hero.subtitle2}
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 text-xs md:text-base">
            <div
              className="bg-amber-600/30 backdrop-blur-md rounded-lg border border-amber-500/40 shadow-xl text-center"
              style={{ padding: '6px' }}
            >
              {t.home.hero.certified}
            </div>
            <div
              className="bg-amber-600/30 backdrop-blur-md rounded-lg border border-amber-500/40 shadow-xl text-center"
              style={{ padding: '6px' }}
            >
              {t.home.hero.delivery}
            </div>
            <div
              className="bg-amber-600/30 backdrop-blur-md rounded-lg border border-amber-500/40 shadow-xl text-center"
              style={{ padding: '6px' }}
            >
              {t.home.hero.warranty}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {productoSeleccionado && (
        <ProductoModal
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
        />
      )}
    </main>
  );
}
