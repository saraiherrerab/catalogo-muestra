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
      <section className="relative bg-gray-900 text-white py-20 px-4 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/petroleo.jpg" 
            alt="Petróleo" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/40 to-gray-900/60"></div>
        </div>
        
        {/* Contenido */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide drop-shadow-2xl">
            {t.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 drop-shadow-lg">
            {t.home.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="bg-amber-600/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-amber-500/30">
              ✓ {t.home.hero.certified}
            </div>
            <div className="bg-amber-600/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-amber-500/30">
              ✓ {t.home.hero.delivery}
            </div>
            <div className="bg-amber-600/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-amber-500/30">
              ✓ {t.home.hero.warranty}
            </div>
          </div>
        </div>
      </section>

      {/* Productos Grid */}
      <section className="bg-gradient-to-b from-gray-950 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">
            {t.home.products.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <div 
                key={producto.id}
                className="group cursor-pointer"
                onClick={() => setProductoSeleccionado(producto)}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {producto.nuevo && (
                      <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        NUEVO
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <span className="text-sm text-orange-600 font-semibold uppercase">
                      {producto.categoria}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                      {producto.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {producto.descripcionCorta}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-amber-700 font-semibold group-hover:underline">
                        {t.home.products.viewDetails} →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {t.home.cta.title}
          </h2>
          <p className="text-gray-600 mb-8">
            {t.home.cta.subtitle}
          </p>
          <a 
            href="/contacto"
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
          >
            {t.home.cta.button}
          </a>
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
