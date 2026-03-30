'use client';

import { Producto } from '@/data/productos';
import { useEffect } from 'react';

interface ProductoModalProps {
  producto: Producto;
  onClose: () => void;
}

export default function ProductoModal({ producto, onClose }: ProductoModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con imagen */}
        <div className="relative h-80 bg-gradient-to-br from-blue-50 to-blue-100">
          <img 
            src={producto.imagen} 
            alt={producto.nombre}
            className="w-full h-full object-cover"
          />
          
          {/* Badges */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            {producto.certificado && (
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                CERTIFICADO
              </span>
            )}
            {producto.nuevo && (
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                NUEVO PRODUCTO
              </span>
            )}
          </div>

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-lg hover:shadow-xl transition-all"
          >
            ×
          </button>
        </div>

        {/* Contenido */}
        <div className="p-8 lg:p-12">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
            {producto.categoria}
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {producto.nombre}
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-blue-600 pl-4">
            {producto.descripcionLarga}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-blue-50 rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">A1</div>
              <div className="text-sm text-gray-600">Calidad</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Soporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Garantía</div>
            </div>
          </div>

          {/* Características y Aplicaciones */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Características */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Características Técnicas
                </h3>
              </div>
              <ul className="space-y-3">
                {producto.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aplicaciones */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Aplicaciones
                </h3>
              </div>
              <div className="space-y-3">
                {producto.aplicaciones.map((aplicacion, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 px-4 py-3 rounded-lg"
                  >
                    <span className="text-gray-800 font-medium">{aplicacion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
              Solicitar Cotización
            </button>
            <button 
              onClick={onClose}
              className="bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-bold hover:bg-gray-200 transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
