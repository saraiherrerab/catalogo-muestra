'use client';

import { useState } from 'react';
import { productos } from '@/data/productos';
import ProductoModal from '@/components/ProductoModal';
import type { Producto } from '@/data/productos';

export default function Home() {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Catálogo de Productos Petroleros
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Calidad comprobada, productos homologados
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              ✓ Productos Certificados
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              ✓ Entrega Nacional
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              ✓ Garantía de Calidad
            </div>
          </div>
        </div>
      </section>

      {/* Productos Grid */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Nuestros Productos
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
                    <span className="text-sm text-blue-600 font-semibold uppercase">
                      {producto.categoria}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {producto.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {producto.descripcionCorta}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold group-hover:underline">
                        Ver detalles →
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
            ¿Necesitas más información?
          </h2>
          <p className="text-gray-600 mb-8">
            Contáctanos para cotizaciones y asesoría técnica especializada
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contactar Ahora
          </button>
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
