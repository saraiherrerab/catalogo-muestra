'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    setFormData({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">CONTÁCTANOS</h1>
          <p className="text-xl text-green-100">
            Estamos aquí para ayudarte con tu proyecto
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Envíanos un mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@productospetroleros.com</p>
                    <p className="text-gray-600">ventas@productospetroleros.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+51 999 999 999</p>
                    <p className="text-gray-600">+51 888 888 888</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Dirección</h4>
                    <p className="text-gray-600">Lima, Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Horario</h4>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Respuesta en menos de 24 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Asesoría técnica especializada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Productos certificados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Entrega a nivel nacional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
