# Catálogo de Productos Petroleros

Sistema de catálogo interactivo para productos petroleros con capacidad de gestionar hasta 30 productos.

## Características

- ✅ Catálogo visual de productos petroleros
- ✅ Páginas de detalle para cada producto
- ✅ Panel de administración para agregar/editar/eliminar productos
- ✅ Límite de 30 productos
- ✅ Diseño responsive inspirado en Termofusion
- ✅ Categorización de productos
- ✅ Etiquetas de "Nuevo" y "Certificado"
- ✅ Características técnicas y aplicaciones

## Tecnologías

- Next.js 16.2.1
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4

## Instalación y Uso

### 1. Instalar dependencias (ya instaladas)
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```

El sitio estará disponible en: http://localhost:3000

### 3. Construir para producción
```bash
npm run build
npm start
```

## Estructura del Proyecto

```
catalogo-productos-petroleros/
├── app/
│   ├── layout.tsx          # Layout principal con navegación
│   ├── page.tsx            # Página de inicio con catálogo
│   ├── globals.css         # Estilos globales
│   ├── admin/
│   │   └── page.tsx        # Panel de administración
│   └── producto/
│       └── [id]/
│           └── page.tsx    # Página de detalle de producto
├── data/
│   └── productos.ts        # Base de datos de productos
└── public/                 # Archivos estáticos
```

## Páginas

- **/** - Catálogo principal con todos los productos
- **/producto/[id]** - Detalle de cada producto
- **/admin** - Panel de administración (agregar/editar/eliminar)

## Gestión de Productos

Los productos se gestionan desde `/admin` donde puedes:
- Agregar nuevos productos (hasta 30)
- Editar productos existentes
- Eliminar productos
- Marcar como "Nuevo" o "Certificado"

## Estructura de Producto

Cada producto incluye:
- Nombre
- Categoría
- Descripción corta y larga
- Imagen
- Características técnicas
- Aplicaciones
- Estado (nuevo/certificado)

## Próximos Pasos

Para conectar con una base de datos real, considera:
- Implementar API routes en Next.js
- Conectar con MongoDB, PostgreSQL o Firebase
- Agregar autenticación para el panel admin
- Implementar sistema de búsqueda y filtros
