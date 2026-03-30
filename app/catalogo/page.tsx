'use client';

import { useState } from 'react';
import { productos } from '@/data/productos';
import ProductoModal from '@/components/ProductoModal';
import type { Producto } from '@/data/productos';

export default function CatalogoPage() {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('Todos');

  const categorias = ['Todos', ...Array.from(new Set(productos.map(p => p.categoria)))];
  
  const productosFiltrados = categoriaFiltro === 'Todos' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaFiltro);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">CATÁLOGO DE PRODUCTOS</h1>
          <p className="text-xl text-amber-100">
            Explora nuestra línea completa de productos petroleros certificados
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaFiltro(categoria)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                categoriaFiltro === categoria
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
        <p className="text-center mt-4 text-gray-600">
          Mostrando {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''}
        </p>
      </section>

      {/* Grid de productos */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
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
                  {producto.certificado && (
                    <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ✓ CERTIFICADO
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
                    <span className="text-orange-600 font-semibold group-hover:underline">
                      Ver detalles →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
