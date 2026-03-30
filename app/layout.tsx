import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catálogo de Productos Petroleros",
  description: "Catálogo interactivo de productos petroleros certificados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white">
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-blue-900">
                Productos Petroleros
              </a>
              <div className="flex gap-6">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                  Inicio
                </a>
                <a href="/admin" className="text-gray-700 hover:text-blue-600 font-medium">
                  Administrar
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 Catálogo de Productos Petroleros. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
