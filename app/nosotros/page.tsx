export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">NOSOTROS</h1>
          <p className="text-xl text-orange-100">
            Innovación, tecnología y experiencia
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Fiabilidad y Seguridad
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Somos una empresa importadora, distribuidora y comercializadora especializada en accesorios 
              y tuberías para los sectores industrial, agrícola, de construcción, saneamiento y tratamiento 
              de agua, entre otras.
            </p>
            <p>
              Atendemos a empresas mineras, agroindustriales, constructoras, tratadoras de agua, industrias 
              y ferreterías, adaptándonos a los requerimientos técnicos de cada sector. Líneas en HDPE / PVC / 
              PPR / PP / ABS / HD / PPH y más.
            </p>
            <p>
              Trabajamos únicamente con marcas reconocidas en el mercado, lo que nos permite ofrecer un 
              portafolio de productos de alto rendimiento, respaldados por el compromiso de brindar el mejor 
              precio del mercado sin comprometer la calidad.
            </p>
            <p>
              Nuestra prioridad es ser un socio estratégico para cada cliente, aportando seguridad y confianza 
              en cada etapa del proyecto, desde la selección de materiales hasta la entrega final.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Calidad</h3>
            <p className="text-gray-700">
              Productos certificados y homologados que cumplen con los más altos estándares
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Compromiso</h3>
            <p className="text-gray-700">
              Soporte técnico especializado y asesoría en cada proyecto
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Innovación</h3>
            <p className="text-gray-700">
              Tecnología de punta y soluciones adaptadas a cada necesidad
            </p>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Certificaciones y Garantías</h2>
          <p className="text-xl text-gray-300 mb-8">
            Todos nuestros productos cumplen con normas y especificaciones exigidas por las entidades 
            reguladoras y certificadoras, lo que garantiza calidad, durabilidad y confianza.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">✓</div>
              <div className="font-semibold">Certificación Internacional</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">📦</div>
              <div className="font-semibold">Entrega Nacional</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">⚙️</div>
              <div className="font-semibold">Garantía en Productos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">💼</div>
              <div className="font-semibold">Asesoría Técnica</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
