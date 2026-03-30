import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
