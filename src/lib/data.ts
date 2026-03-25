export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  subcategories: string[];
  machineCount: number;
}

export interface Machine {
  slug: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rentalPrice?: number;
  condition: "nueva" | "segunda-mano";
  availability: "venta" | "alquiler" | "venta-alquiler";
  image: string;
  images: string[];
  description: string;
  specs: Record<string, string>;
  featured: boolean;
  year?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: "comparativa" | "ressenya" | "guia" | "noticia";
  tags: string[];
  readTime: number;
}

export const categories: Category[] = [
  {
    slug: "tractores",
    name: "Tractores",
    description: "Tractores agrícolas de todas las potencias y marcas. Nuevos y de segunda mano.",
    image: "/images/categories/tractores.jpg",
    subcategories: ["Tractores compactos", "Tractores de campo abierto", "Tractores fruteros", "Tractores cortacésped"],
    machineCount: 48,
  },
  {
    slug: "cosechadoras",
    name: "Cosechadoras",
    description: "Cosechadoras de cereales, forraje y cultivos especiales.",
    image: "/images/categories/cosechadoras.jpg",
    subcategories: ["Cosechadoras de cereales", "Cosechadoras de forraje", "Vendimiadoras"],
    machineCount: 23,
  },
  {
    slug: "arados-aperos",
    name: "Arados y Aperos",
    description: "Arados, cultivadores, gradas y todo tipo de aperos para preparación del suelo.",
    image: "/images/categories/arados.jpg",
    subcategories: ["Arados", "Cultivadores", "Gradas", "Subsoladores", "Discos aporcadores"],
    machineCount: 67,
  },
  {
    slug: "sembradoras",
    name: "Sembradoras y Abonadoras",
    description: "Sembradoras de precisión, a voleo y abonadoras para todo tipo de cultivo.",
    image: "/images/categories/sembradoras.jpg",
    subcategories: ["Sembradoras de precisión", "Sembradoras a voleo", "Abonadoras"],
    machineCount: 34,
  },
  {
    slug: "pulverizadores",
    name: "Pulverizadores y Atomizadores",
    description: "Equipos de fumigación, pulverizadores suspendidos y atomizadores.",
    image: "/images/categories/pulverizadores.jpg",
    subcategories: ["Pulverizadores suspendidos", "Atomizadores", "Sulfatadoras de mochila", "Bombas de fumigación"],
    machineCount: 41,
  },
  {
    slug: "riego",
    name: "Riego y Bombeo",
    description: "Sistemas de riego, bombas, motobombas y equipos de trasiego.",
    image: "/images/categories/riego.jpg",
    subcategories: ["Motobombas", "Bombas sumergibles", "Bombas de trasiego", "Bombas para tractor"],
    machineCount: 29,
  },
  {
    slug: "desbrozadoras",
    name: "Desbrozadoras y Cortacéspedes",
    description: "Desbrozadoras, cortacéspedes, robots y equipos de mantenimiento de jardín.",
    image: "/images/categories/desbrozadoras.jpg",
    subcategories: ["Desbrozadoras agrícolas", "Cortacéspedes", "Robots cortacésped", "Motosegadoras"],
    machineCount: 56,
  },
  {
    slug: "motoazadas",
    name: "Motoazadas y Motocultores",
    description: "Motoazadas, motocultores y fresadoras para laboreo del suelo.",
    image: "/images/categories/motoazadas.jpg",
    subcategories: ["Motoazadas", "Motocultores", "Rotocultivadores"],
    machineCount: 38,
  },
  {
    slug: "podadoras",
    name: "Podadoras y Cortasetos",
    description: "Tijeras de poda, cortasetos, motosierras y equipos de poda profesional.",
    image: "/images/categories/podadoras.jpg",
    subcategories: ["Motosierras", "Podadoras eléctricas", "Cortasetos", "Tijeras neumáticas"],
    machineCount: 52,
  },
  {
    slug: "remolques-transporte",
    name: "Remolques y Transporte",
    description: "Remolques agrícolas, palas cargadoras, horquillas y equipos de transporte.",
    image: "/images/categories/remolques.jpg",
    subcategories: ["Remolques", "Palas cargadoras", "Horquillas", "Carretillas"],
    machineCount: 31,
  },
  {
    slug: "olivar-vinedo",
    name: "Olivar y Viñedo",
    description: "Vareadores, vibradoras, atadoras y equipos especializados para olivar y viñedo.",
    image: "/images/categories/olivar.jpg",
    subcategories: ["Vareadores de aceitunas", "Atadoras de viña", "Prensas", "Despalilladoras"],
    machineCount: 27,
  },
  {
    slug: "generadores-compresores",
    name: "Generadores y Compresores",
    description: "Generadores eléctricos, compresores de aire y estaciones de energía.",
    image: "/images/categories/generadores.jpg",
    subcategories: ["Generadores eléctricos", "Compresores", "Soldadoras"],
    machineCount: 19,
  },
];

export const featuredMachines: Machine[] = [
  {
    slug: "tractor-john-deere-6130r",
    name: "John Deere 6130R",
    category: "tractores",
    brand: "John Deere",
    price: 95000,
    rentalPrice: 450,
    condition: "nueva",
    availability: "venta-alquiler",
    image: "/images/machines/tractor-jd-6130r.jpg",
    images: [],
    description: "Tractor polivalente de 130 CV con transmisión AutoQuad Plus. Ideal para explotaciones agrícolas de tamaño medio.",
    specs: {
      "Potencia": "130 CV",
      "Motor": "4 cilindros turbo",
      "Transmisión": "AutoQuad Plus 24/24",
      "Peso": "5.200 kg",
      "Cabina": "ComfortView",
    },
    featured: true,
  },
  {
    slug: "cosechadora-claas-lexion-770",
    name: "CLAAS Lexion 770",
    category: "cosechadoras",
    brand: "CLAAS",
    price: 42000,
    condition: "segunda-mano",
    availability: "venta",
    image: "/images/machines/claas-lexion-770.jpg",
    images: [],
    description: "Cosechadora de alto rendimiento con sistema APS HYBRID. 2019, 1.200 horas de uso.",
    specs: {
      "Potencia": "585 CV",
      "Ancho de corte": "9,3 m",
      "Tolva": "12.000 L",
      "Horas": "1.200 h",
      "Año": "2019",
    },
    featured: true,
    year: 2019,
  },
  {
    slug: "desbrozadora-kuhn-bkr-280",
    name: "Kuhn BKR 280",
    category: "desbrozadoras",
    brand: "Kuhn",
    price: 4800,
    rentalPrice: 85,
    condition: "nueva",
    availability: "venta-alquiler",
    image: "/images/machines/kuhn-bkr-280.jpg",
    images: [],
    description: "Desbrozadora de brazo hidráulico para tractor. Ancho de trabajo 2,8 m.",
    specs: {
      "Ancho de trabajo": "2,8 m",
      "Potencia requerida": "60-120 CV",
      "Peso": "680 kg",
      "Cuchillas": "Martillos",
    },
    featured: true,
  },
  {
    slug: "sembradora-amazone-cataya-3000",
    name: "Amazone Cataya 3000",
    category: "sembradoras",
    brand: "Amazone",
    price: 18500,
    condition: "nueva",
    availability: "venta",
    image: "/images/machines/amazone-cataya.jpg",
    images: [],
    description: "Sembradora mecánica de 3 metros con tolva de 750 litros. Perfecta para cereales.",
    specs: {
      "Ancho de trabajo": "3,0 m",
      "Tolva": "750 L",
      "Nº de rejas": "24",
      "Peso": "1.100 kg",
    },
    featured: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "comparativa-tractores-compactos-2026",
    title: "Comparativa: Los 5 Mejores Tractores Compactos de 2026",
    excerpt: "Analizamos en profundidad los tractores compactos más vendidos del mercado. Kubota, John Deere, New Holland y más.",
    content: "",
    image: "/images/blog/tractores-compactos.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-20",
    category: "comparativa",
    tags: ["tractores", "compactos", "comparativa"],
    readTime: 8,
  },
  {
    slug: "guia-mantenimiento-cosechadora",
    title: "Guía Completa: Mantenimiento de tu Cosechadora Antes de la Campaña",
    excerpt: "Todo lo que necesitas saber para preparar tu cosechadora. Puntos de engrase, filtros, correas y más.",
    content: "",
    image: "/images/blog/mantenimiento-cosechadora.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-15",
    category: "guia",
    tags: ["cosechadoras", "mantenimiento", "guía"],
    readTime: 12,
  },
  {
    slug: "ressenya-john-deere-6130r",
    title: "Reseña: John Deere 6130R - El Todoterreno del Campo",
    excerpt: "Probamos durante una semana el John Deere 6130R. Un tractor versátil que cumple en todas las tareas.",
    content: "",
    image: "/images/blog/jd-6130r-ressenya.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-10",
    category: "ressenya",
    tags: ["john deere", "tractores", "reseña"],
    readTime: 10,
  },
  {
    slug: "ventajas-alquiler-maquinaria",
    title: "¿Comprar o Alquilar Maquinaria Agrícola? Pros y Contras",
    excerpt: "Analizamos cuándo es mejor comprar y cuándo alquilar. Factores clave para tomar la decisión correcta.",
    content: "",
    image: "/images/blog/comprar-vs-alquilar.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-05",
    category: "guia",
    tags: ["alquiler", "compra", "guía", "finanzas"],
    readTime: 6,
  },
  {
    slug: "guia-compra-aperos-agricolas",
    title: "Guía de Compra de Aperos Agrícolas: Todo lo que Necesitas Saber",
    excerpt: "La guía definitiva para comprar aperos agrícolas. Tipos, cómo elegir, mantenimiento, puesta en marcha y productos recomendados.",
    content: "",
    image: "/images/blog/guia-compra-aperos.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-25",
    category: "guia",
    tags: ["aperos", "guía", "compra", "arados", "cultivadores", "mantenimiento"],
    readTime: 18,
  },
  {
    slug: "como-elegir-apero-segun-necesidad",
    title: "Cómo Elegir un Apero Agrícola Según tu Necesidad",
    excerpt: "Aprende a seleccionar el apero perfecto según tu tipo de cultivo, terreno y tractor. Factores clave para no equivocarte.",
    content: "",
    image: "/images/blog/elegir-apero-necesidad.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-23",
    category: "guia",
    tags: ["aperos", "guía", "elección", "cultivo", "terreno"],
    readTime: 10,
  },
  {
    slug: "puesta-en-marcha-aperos-agricolas",
    title: "Puesta en Marcha de Aperos Agrícolas: Paso a Paso",
    excerpt: "Guía paso a paso para enganchar, calibrar y poner en marcha cualquier apero. Desde el arado hasta la sembradora.",
    content: "",
    image: "/images/blog/puesta-marcha-aperos.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-21",
    category: "guia",
    tags: ["aperos", "puesta en marcha", "enganche", "calibración"],
    readTime: 12,
  },
  {
    slug: "mantenimiento-aperos-agricolas",
    title: "Mantenimiento de Aperos Agrícolas: Guía Completa",
    excerpt: "Alarga la vida útil de tus aperos con un mantenimiento correcto. Limpieza, engrase, almacenaje y revisiones periódicas.",
    content: "",
    image: "/images/blog/mantenimiento-aperos.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-19",
    category: "guia",
    tags: ["aperos", "mantenimiento", "engrase", "almacenaje"],
    readTime: 10,
  },
  {
    slug: "productos-mantenimiento-aperos",
    title: "Productos Necesarios para el Mantenimiento de Aperos",
    excerpt: "Lista completa de grasas, aceites, herramientas y productos imprescindibles para mantener tus aperos en perfecto estado.",
    content: "",
    image: "/images/blog/productos-mantenimiento.jpg",
    author: "Equipo Agromaquina",
    date: "2026-03-17",
    category: "guia",
    tags: ["aperos", "mantenimiento", "productos", "grasa", "aceite", "herramientas"],
    readTime: 8,
  },
];

export const brands = [
  "John Deere", "CLAAS", "New Holland", "Kubota", "Fendt", "Massey Ferguson",
  "Case IH", "Deutz-Fahr", "Amazone", "Kuhn", "Lemken", "Kverneland",
  "Same", "Landini", "Valtra", "McCormick",
];
