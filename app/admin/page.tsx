'use client';

import { useState } from 'react';
import { productos as productosIniciales } from '@/data/productos';
import type { Producto } from '@/data/productos';

export default function AdminPage() {
  const [productos, setProductos] = useState<Producto[]>(productosIniciales);
  const [editando, setEditando] = useState<string | null>(null);
  const [nuevoProducto, setNuevoProducto] = useState(false);

  const [formData, setFormData] = useState<Partial<Producto>>({
    nombre: '',
    categoria: '',
    descripcionCorta: '',
    descripcionLarga: '',
    imagen: '',
    caracteristicas: [],
    aplicaciones: [],
    nuevo: false,
    certificado: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (nuevoProducto) {
      const id = (productos.length + 1).toString();
      setProductos([...productos, { ...formData, id } as Producto]);
      setNuevoProducto(false);
    } else if (editando) {
      setProductos(productos.map(p => 
        p.id === editando ? { ...formData, id: editando } as Producto : p
      ));
      setEditando(null);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      categoria: '',
      descripcionCorta: '',
      descripcionLarga: '',
      imagen: '',
      caracteristicas: [],
      aplicaciones: [],
      nuevo: false,
      certificado: false,
    });
  };

  const handleEditar = (producto: Producto) => {
    setFormData(producto);
    setEditando(producto.id);
    setNuevoProducto(false);
  };

  const handleEliminar = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  const handleNuevo = () => {
    resetForm();
    setNuevoProducto(true);
    setEditando(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Administrar Productos
          </h1>
          <button
            onClick={handleNuevo}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
            disabled={productos.length >= 30}
          >
            + Nuevo Producto
          </button>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-800">
            <strong>Productos: {productos.length}/30</strong> - 
            {productos.length >= 30 ? ' Límite alcanzado' : ` Puedes agregar ${30 - productos.length} más`}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          {(nuevoProducto || editando) && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-4">
                  {nuevoProducto ? 'Nuevo Producto' : 'Editar Producto'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nombre</label>
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Categoría</label>
                    <input
                      type="text"
                      value={formData.categoria}
                      onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Descripción Corta</label>
                    <textarea
                      value={formData.descripcionCorta}
                      onChange={(e) => setFormData({...formData, descripcionCorta: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg"
                      rows={2}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Descripción Larga</label>
                    <textarea
                      value={formData.descripcionLarga}
                      onChange={(e) => setFormData({...formData, descripcionLarga: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">URL Imagen</label>
                    <input
                      type="url"
                      value={formData.imagen}
                      onChange={(e) => setFormData({...formData, imagen: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Características (separadas por coma)
                    </label>
                    <textarea
                      value={formData.caracteristicas?.join(', ')}
                      onChange={(e) => setFormData({
                        ...formData, 
                        caracteristicas: e.target.value.split(',').map(s => s.trim())
                      })}
                      className="w-full px-3 py-2 border rounded-lg"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Aplicaciones (separadas por coma)
                    </label>
                    <textarea
                      value={formData.aplicaciones?.join(', ')}
                      onChange={(e) => setFormData({
                        ...formData, 
                        aplicaciones: e.target.value.split(',').map(s => s.trim())
                      })}
                      className="w-full px-3 py-2 border rounded-lg"
                      rows={2}
                    />
                  </div>

                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.nuevo}
                        onChange={(e) => setFormData({...formData, nuevo: e.target.checked})}
                        className="mr-2"
                      />
                      Nuevo
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.certificado}
                        onChange={(e) => setFormData({...formData, certificado: e.target.checked})}
                        className="mr-2"
                      />
                      Certificado
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                      {nuevoProducto ? 'Crear' : 'Guardar'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setNuevoProducto(false);
                        setEditando(null);
                        resetForm();
                      }}
                      className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Lista de productos */}
          <div className={nuevoProducto || editando ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <div className="grid gap-4">
              {productos.map((producto) => (
                <div 
                  key={producto.id}
                  className="bg-white rounded-lg shadow-md p-6 flex gap-4"
                >
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {producto.nombre}
                        </h3>
                        <p className="text-sm text-blue-600 font-medium">
                          {producto.categoria}
                        </p>
                        <p className="text-gray-600 mt-2">
                          {producto.descripcionCorta}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditar(producto)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleEliminar(producto.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
