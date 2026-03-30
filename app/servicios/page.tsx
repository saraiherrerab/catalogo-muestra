export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">NUESTROS SERVICIOS</h1>
          <p className="text-xl text-green-100">
            Soluciones integrales para tu proyecto
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <div className="text-white text-6xl">🔧</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Asesoría Técnica</h3>
              <p className="text-gray-700 mb-4">
                Contamos con un equipo de expertos que te ayudarán a seleccionar los productos 
                adecuados para tu proyecto, considerando especificaciones técnicas, normativas 
                y presupuesto.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Análisis de requerimientos técnicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Recomendación de productos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Soporte en instalación</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <div className="text-white text-6xl">🚚</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Entrega Nacional</h3>
              <p className="text-gray-700 mb-4">
                Realizamos entregas a nivel nacional con logística coordinada para garantizar 
                que tus productos lleguen en tiempo y forma, sin importar la ubicación de tu proyecto.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Cobertura nacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Seguimiento de pedidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Entregas programadas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-6xl">📋</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cotizaciones Rápidas</h3>
              <p className="text-gray-700 mb-4">
                Cotiza fácil, cotiza rápido. Procesamos tus solicitudes de cotización de manera 
                ágil para que puedas tomar decisiones informadas en tu proyecto.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Respuesta en 24 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Precios competitivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Descuentos por volumen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <div className="text-white text-6xl">🛡️</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Garantía de Calidad</h3>
              <p className="text-gray-700 mb-4">
                Todos nuestros productos cuentan con garantía y están respaldados por 
                certificaciones internacionales que aseguran su calidad y durabilidad.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Productos certificados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Garantía extendida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Soporte post-venta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">¿Listo para tu proyecto?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contáctanos y descubre cómo podemos ayudarte
          </p>
          <a 
            href="/contacto"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Solicitar Información
          </a>
        </div>
      </section>
    </main>
  );
}
