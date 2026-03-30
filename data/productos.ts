export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagen: string;
  caracteristicas: string[];
  aplicaciones: string[];
  nuevo: boolean;
  certificado: boolean;
}

export const productos: Producto[] = [
  {
    id: "1",
    nombre: "Válvulas de Alta Presión",
    categoria: "Válvulas",
    descripcionCorta: "Válvulas certificadas para alta presión en operaciones petroleras",
    descripcionLarga: "Válvulas de alta presión diseñadas específicamente para operaciones en la industria petrolera. Fabricadas con materiales resistentes a la corrosión y condiciones extremas.",
    imagen: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    caracteristicas: [
      "Resistencia a alta presión hasta 5000 PSI",
      "Material: Acero inoxidable 316",
      "Certificación API 6A",
      "Rango de temperatura: -20°C a 200°C"
    ],
    aplicaciones: [
      "Extracción de petróleo",
      "Refinación",
      "Transporte de hidrocarburos"
    ],
    nuevo: true,
    certificado: true
  },
  {
    id: "2",
    nombre: "Tuberías HDPE Petroleras",
    categoria: "Tuberías",
    descripcionCorta: "Tuberías de polietileno de alta densidad para transporte de crudo",
    descripcionLarga: "Tuberías HDPE especialmente diseñadas para el transporte seguro de petróleo crudo y derivados. Alta resistencia química y durabilidad.",
    imagen: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    caracteristicas: [
      "Diámetros de 2\" a 24\"",
      "Resistencia química superior",
      "Vida útil de 50+ años",
      "Instalación rápida por termofusión"
    ],
    aplicaciones: [
      "Oleoductos",
      "Líneas de transferencia",
      "Sistemas de distribución"
    ],
    nuevo: false,
    certificado: true
  },
  {
    id: "3",
    nombre: "Conexiones Electrofusión",
    categoria: "Conexiones",
    descripcionCorta: "Conexiones electrofusión para uniones seguras y permanentes",
    descripcionLarga: "Sistema de conexiones por electrofusión que garantiza uniones moleculares seguras y libres de fugas en instalaciones petroleras.",
    imagen: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    caracteristicas: [
      "Unión molecular permanente",
      "Rango de 20mm a 630mm",
      "Resistencia a presión extrema",
      "Instalación con equipo especializado"
    ],
    aplicaciones: [
      "Redes de distribución",
      "Plantas de procesamiento",
      "Estaciones de bombeo"
    ],
    nuevo: true,
    certificado: true
  },
  {
    id: "4",
    nombre: "Bridas de Acero al Carbono",
    categoria: "Bridas",
    descripcionCorta: "Bridas industriales para conexiones de alta resistencia",
    descripcionLarga: "Bridas fabricadas en acero al carbono según normas ANSI/ASME, ideales para conexiones en sistemas de alta presión.",
    imagen: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    caracteristicas: [
      "Norma ANSI B16.5",
      "Clase 150 a 2500",
      "Acabado RF, FF, RTJ",
      "Medidas de 1/2\" a 24\""
    ],
    aplicaciones: [
      "Conexiones de tuberías",
      "Equipos de proceso",
      "Sistemas de bombeo"
    ],
    nuevo: false,
    certificado: true
  },
  {
    id: "5",
    nombre: "Manómetros Industriales",
    categoria: "Instrumentación",
    descripcionCorta: "Manómetros de precisión para monitoreo de presión",
    descripcionLarga: "Instrumentos de medición de presión con alta precisión y durabilidad para aplicaciones en la industria petrolera.",
    imagen: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    caracteristicas: [
      "Precisión ±0.5%",
      "Rangos de 0-100 a 0-10000 PSI",
      "Caja de acero inoxidable",
      "Conexión NPT o BSP"
    ],
    aplicaciones: [
      "Control de procesos",
      "Monitoreo de líneas",
      "Sistemas de seguridad"
    ],
    nuevo: false,
    certificado: true
  }
];
