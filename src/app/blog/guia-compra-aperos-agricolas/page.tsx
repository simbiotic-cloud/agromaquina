import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, CheckCircle, Clock, BookOpen, Wrench, ShoppingCart, Settings, Package, ChevronDown } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Guía de Compra de Aperos Agrícolas: Todo lo que Necesitas Saber",
  description: "La guía definitiva para comprar aperos agrícolas. Tipos de aperos, cómo elegir, puesta en marcha, mantenimiento y productos recomendados.",
  alternates: { canonical: "/blog/guia-compra-aperos-agricolas" },
  openGraph: {
    title: "Guía de Compra de Aperos Agrícolas",
    description: "Todo lo que necesitas saber antes de comprar un apero agrícola. Guía completa actualizada 2026.",
    type: "article",
    images: [{ url: "/images/blog/guia-compra-aperos.jpg", width: 1200, height: 630 }],
  },
};

const post = blogPosts.find((p) => p.slug === "guia-compra-aperos-agricolas")!;

const clusterArticles = [
  {
    slug: "como-elegir-apero-segun-necesidad",
    title: "Cómo Elegir un Apero Según tu Necesidad",
    description: "Selecciona el apero perfecto según tu cultivo, terreno y tractor. Los factores clave que debes considerar.",
    icon: Settings,
    readTime: 10,
  },
  {
    slug: "puesta-en-marcha-aperos-agricolas",
    title: "Puesta en Marcha de Aperos Agrícolas",
    description: "Guía paso a paso para enganchar, calibrar y poner en marcha cualquier apero correctamente.",
    icon: Wrench,
    readTime: 12,
  },
  {
    slug: "mantenimiento-aperos-agricolas",
    title: "Mantenimiento de Aperos: Guía Completa",
    description: "Todo sobre limpieza, engrase, almacenaje y revisiones periódicas para alargar la vida de tus aperos.",
    icon: BookOpen,
    readTime: 10,
  },
  {
    slug: "productos-mantenimiento-aperos",
    title: "Productos para Mantenimiento de Aperos",
    description: "Lista completa de grasas, aceites, herramientas y productos imprescindibles.",
    icon: Package,
    readTime: 8,
  },
];

const tocItems = [
  { id: "que-son", label: "¿Qué son los aperos agrícolas?" },
  { id: "tipos", label: "Tipos de aperos agrícolas" },
  { id: "como-elegir", label: "Cómo elegir el apero adecuado" },
  { id: "puesta-marcha", label: "Puesta en marcha" },
  { id: "mantenimiento", label: "Mantenimiento y cuidados" },
  { id: "productos", label: "Productos recomendados" },
  { id: "errores", label: "Errores comunes al comprar" },
  { id: "faq", label: "Preguntas frecuentes" },
];

export default function GuiaCompraAperosPage() {
  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Guía de Compra de Aperos", url: "/blog/guia-compra-aperos-agricolas" },
      ])} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cuánto cuesta un apero agrícola?", acceptedAnswer: { "@type": "Answer", text: "El precio varía enormemente según el tipo. Un arado sencillo puede costar desde 1.500€, mientras que una sembradora de precisión puede superar los 30.000€. Los aperos de segunda mano pueden suponer un ahorro del 30-50%." }},
          { "@type": "Question", name: "¿Qué apero necesito para mi tractor?", acceptedAnswer: { "@type": "Answer", text: "Depende de la potencia de tu tractor y del tipo de labor. Un tractor de 80CV puede mover la mayoría de arados de 2-3 cuerpos, cultivadores de hasta 3m y desbrozadoras estándar. Consulta siempre la potencia mínima requerida del apero." }},
          { "@type": "Question", name: "¿Es mejor comprar un apero nuevo o de segunda mano?", acceptedAnswer: { "@type": "Answer", text: "Depende de tu presupuesto y uso. Un apero nuevo ofrece garantía y últimas tecnologías, pero un apero de segunda mano bien mantenido puede dar excelentes resultados a mitad de precio." }},
          { "@type": "Question", name: "¿Cada cuánto debo hacer mantenimiento a mis aperos?", acceptedAnswer: { "@type": "Answer", text: "El engrase debe hacerse antes y después de cada uso. La revisión completa (desgaste de piezas, tornillería, hidráulicos) se recomienda al inicio y al final de cada campaña." }},
        ],
      }} />

      {/* HERO */}
      <section className="relative bg-primary min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/guia-compra-aperos.jpg"
            alt="Aperos agrícolas en el campo"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-light px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-6">
            <BookOpen size={12} /> Guía actualizada — Marzo 2026
          </div>
          <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-[900] text-white leading-[1.1] mb-6 font-[family-name:var(--font-display)]">
            Guía de Compra de Aperos Agrícolas
          </h1>
          <p className="text-warm-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            Más de <strong className="text-white">50 tipos de aperos</strong> analizados.
            Todo lo que necesitas saber para elegir, comprar, poner en marcha y mantener
            tus aperos agrícolas en perfecto estado.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8 text-sm text-warm-400">
            <span className="flex items-center gap-1"><Clock size={14} /> 18 min lectura</span>
            <span>Por {post.author}</span>
            <span>Actualizado: 25 marzo 2026</span>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-warm-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-warm-500">
          <Link href="/" className="hover:text-accent">Inicio</Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">Guía de Aperos</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <section className="bg-warm-50 border-b border-warm-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Contenido de esta guía</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {tocItems.map(({ id, label }, i) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm transition-all text-sm text-warm-600 hover:text-accent group"
              >
                <span className="w-7 h-7 bg-warm-200 group-hover:bg-accent group-hover:text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                  {i + 1}
                </span>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Section 1: Qué son */}
        <section id="que-son" className="py-16 lg:py-20">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-6 font-[family-name:var(--font-display)]">
            ¿Qué son los aperos agrícolas?
          </h2>
          <p className="text-warm-600 leading-relaxed mb-6">
            Los aperos agrícolas son todas aquellas herramientas y máquinas que se acoplan al tractor
            para realizar las diferentes labores del campo: preparar el suelo, sembrar, tratar cultivos,
            cosechar y mantener la explotación.
          </p>
          <p className="text-warm-600 leading-relaxed mb-8">
            Elegir el apero correcto no es solo una cuestión de precio. Un apero mal dimensionado puede
            suponer <strong className="text-primary">un sobrecoste del 30% en combustible</strong>,
            desgaste prematuro del tractor y resultados deficientes en la labor. Esta guía te ayudará
            a tomar la mejor decisión.
          </p>
          <div className="aspect-[16/7] relative rounded-2xl overflow-hidden mb-8">
            <Image src="/images/blog/guia-compra-aperos.jpg" alt="Diferentes tipos de aperos agrícolas" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>
        </section>

        {/* Section 2: Tipos */}
        <section id="tipos" className="py-16 lg:py-20 border-t border-warm-200">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-6 font-[family-name:var(--font-display)]">
            Tipos de aperos agrícolas
          </h2>
          <p className="text-warm-600 leading-relaxed mb-8">
            Podemos clasificar los aperos agrícolas en 6 grandes categorías según la labor que realizan.
            Cada una tiene sus particularidades y factores a tener en cuenta.
          </p>

          <div className="space-y-4">
            {[
              { num: "01", title: "Preparación del suelo", items: "Arados, subsoladores, cultivadores, gradas, fresadoras", desc: "Rompen, airean y preparan el terreno para la siembra. Son los aperos más exigentes en potencia." },
              { num: "02", title: "Siembra y abonado", items: "Sembradoras, abonadoras, plantadoras", desc: "Depositan la semilla o el fertilizante de forma precisa. La tecnología de precisión ha revolucionado este segmento." },
              { num: "03", title: "Tratamientos", items: "Pulverizadores, atomizadores, espolvoreadores", desc: "Aplican fitosanitarios, herbicidas y fertilizantes foliares. Clave para la protección del cultivo." },
              { num: "04", title: "Cosecha y recolección", items: "Cosechadoras, empacadoras, vendimiadoras, vareadores", desc: "Recogen el fruto de tu trabajo. Desde la cosechadora de cereales hasta el vareador de aceitunas." },
              { num: "05", title: "Mantenimiento del terreno", items: "Desbrozadoras, cortacéspedes, barredoras, quitanieves", desc: "Mantienen los lindes, caminos y parcelas en buen estado durante todo el año." },
              { num: "06", title: "Transporte y carga", items: "Remolques, palas cargadoras, horquillas, cajones", desc: "Mueven y transportan materiales, cosechas y suministros dentro y fuera de la explotación." },
            ].map(({ num, title, items, desc }) => (
              <div key={num} className="flex gap-4 p-5 bg-warm-50 rounded-2xl border border-warm-200">
                <span className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{title}</h3>
                  <p className="text-xs text-warm-400 mb-2">{items}</p>
                  <p className="text-sm text-warm-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLUSTER CARD: Cómo elegir */}
        <section id="como-elegir" className="py-16 lg:py-20 border-t border-warm-200">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-6 font-[family-name:var(--font-display)]">
            Cómo elegir el apero adecuado
          </h2>
          <p className="text-warm-600 leading-relaxed mb-6">
            La elección de un apero depende de múltiples factores: el tipo de cultivo, la superficie de tu
            explotación, la potencia de tu tractor, el tipo de suelo y, por supuesto, tu presupuesto.
            No es lo mismo preparar una parcela de cereal en secano que un huerto de frutales en regadío.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "Potencia del tractor", desc: "Cada apero requiere una potencia mínima. Sobredimensionar o quedarse corto es un error costoso." },
              { label: "Tipo de enganche", desc: "Tripuntal Cat. I, II o III. Comprueba la compatibilidad con tu tractor." },
              { label: "Ancho de trabajo", desc: "Debe ser proporcional a tu tractor y al tamaño de tus parcelas." },
              { label: "Tipo de suelo", desc: "Arcilloso, arenoso, pedregoso... cada suelo requiere un apero diferente." },
            ].map(({ label, desc }) => (
              <div key={label} className="p-4 bg-white border border-warm-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={16} className="text-accent shrink-0" />
                  <h3 className="text-sm font-bold text-primary">{label}</h3>
                </div>
                <p className="text-xs text-warm-500">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA to cluster article */}
          <Link
            href="/blog/como-elegir-apero-segun-necesidad"
            className="flex items-center justify-between p-6 bg-accent/5 border-2 border-accent/20 rounded-2xl hover:border-accent/40 hover:bg-accent/10 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shrink-0">
                <Settings size={24} />
              </div>
              <div>
                <p className="text-xs text-accent font-medium uppercase tracking-wider mb-0.5">Guía detallada</p>
                <h3 className="text-lg font-bold text-primary">Cómo Elegir un Apero Según tu Necesidad</h3>
                <p className="text-sm text-warm-500 mt-1">10 min lectura</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* CLUSTER CARD: Puesta en marcha */}
        <section id="puesta-marcha" className="py-16 lg:py-20 border-t border-warm-200">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-6 font-[family-name:var(--font-display)]">
            Puesta en marcha de aperos
          </h2>
          <p className="text-warm-600 leading-relaxed mb-8">
            Una vez elegido el apero, es fundamental saber engancharlo, calibrarlo y ponerlo en marcha
            correctamente. Una mala calibración puede arruinar una labor entera y dañar tanto el apero
            como el tractor.
          </p>

          {/* Timeline steps */}
          <div className="relative pl-8 space-y-8 mb-8">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-warm-200" />
            {[
              { step: "1", title: "Inspección previa", desc: "Revisa el estado general del apero: tornillería, piezas de desgaste, niveles de aceite, neumáticos." },
              { step: "2", title: "Enganche al tractor", desc: "Conecta los tres puntos del tripuntal, el cardán (si aplica) y las mangueras hidráulicas." },
              { step: "3", title: "Calibración", desc: "Ajusta la profundidad de trabajo, la nivelación lateral y longitudinal, y la velocidad de avance." },
              { step: "4", title: "Prueba en vacío", desc: "Levanta el apero y hazlo funcionar sin carga para verificar que todo gira y se mueve correctamente." },
              { step: "5", title: "Primeras pasadas", desc: "Empieza con una velocidad reducida y ajusta según los resultados que observes." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <span className="absolute -left-5 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step}
                </span>
                <h3 className="text-base font-bold text-primary mb-1">{title}</h3>
                <p className="text-sm text-warm-600">{desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/blog/puesta-en-marcha-aperos-agricolas"
            className="flex items-center justify-between p-6 bg-secondary/5 border-2 border-secondary/20 rounded-2xl hover:border-secondary/40 hover:bg-secondary/10 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shrink-0">
                <Wrench size={24} />
              </div>
              <div>
                <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-0.5">Guía paso a paso</p>
                <h3 className="text-lg font-bold text-primary">Puesta en Marcha de Aperos Agrícolas</h3>
                <p className="text-sm text-warm-500 mt-1">12 min lectura</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-secondary shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* CLUSTER CARD: Mantenimiento */}
        <section id="mantenimiento" className="py-16 lg:py-20 border-t border-warm-200">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-6 font-[family-name:var(--font-display)]">
            Mantenimiento y cuidados
          </h2>
          <p className="text-warm-600 leading-relaxed mb-6">
            Un apero bien mantenido puede durar <strong className="text-primary">más de 20 años</strong>.
            El mantenimiento preventivo no solo alarga la vida útil sino que evita averías costosas
            y paradas en plena campaña.
          </p>

          <div className="aspect-[16/7] relative rounded-2xl overflow-hidden mb-8">
            <Image src="/images/blog/mantenimiento-aperos.jpg" alt="Mantenimiento de aperos agrícolas" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-2xl p-6 mb-8">
            <p className="text-warm-700 font-medium italic">
              &ldquo;El 70% de las averías en aperos agrícolas se podrían haber evitado con un
              mantenimiento preventivo básico. Un engrase a tiempo vale más que una reparación
              de emergencia en plena campaña.&rdquo;
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { title: "Antes de cada uso", items: ["Engrase general", "Revisión visual", "Comprobar tornillería"] },
              { title: "Fin de campaña", items: ["Limpieza a fondo", "Repaso de piezas de desgaste", "Protección antioxidante"] },
              { title: "Almacenaje", items: ["Bajo cubierto si es posible", "Sobre calzos (no en el suelo)", "Destensar correas y cadenas"] },
            ].map(({ title, items }) => (
              <div key={title} className="p-4 bg-warm-50 rounded-xl border border-warm-200">
                <h3 className="text-sm font-bold text-primary mb-3">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-warm-600">
                      <CheckCircle size={12} className="text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/blog/mantenimiento-aperos-agricolas"
            className="flex items-center justify-between p-6 bg-earth/5 border-2 border-earth/20 rounded-2xl hover:border-earth/40 hover:bg-earth/10 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-earth rounded-xl flex items-center justify-center text-white shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-xs text-earth font-medium uppercase tracking-wider mb-0.5">Guía completa</p>
                <h3 className="text-lg font-bold text-primary">Mantenimiento de Aperos: Guía Completa</h3>
                <p className="text-sm text-warm-500 mt-1">10 min lectura</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-earth shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* CLUSTER CARD: Productos */}
        <section id="productos" className="py-16 lg:py-20 border-t border-warm-200">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-6 font-[family-name:var(--font-display)]">
            Productos recomendados para mantenimiento
          </h2>
          <p className="text-warm-600 leading-relaxed mb-8">
            Para un mantenimiento correcto necesitas los productos adecuados. Desde grasas y aceites
            hasta herramientas específicas, aquí te explicamos qué necesitas tener siempre a mano.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {[
              { name: "Grasa EP2", use: "Engrase general" },
              { name: "Aceite hidráulico", use: "Circuitos hidráulicos" },
              { name: "Spray antioxidante", use: "Protección metal" },
              { name: "Engrasadora manual", use: "Aplicar grasa" },
              { name: "Llave dinamométrica", use: "Apriete tornillos" },
              { name: "Cepillo metálico", use: "Limpieza óxido" },
            ].map(({ name, use }) => (
              <div key={name} className="p-3 bg-warm-50 rounded-xl border border-warm-200 text-center">
                <p className="text-sm font-bold text-primary">{name}</p>
                <p className="text-xs text-warm-400">{use}</p>
              </div>
            ))}
          </div>

          <Link
            href="/blog/productos-mantenimiento-aperos"
            className="flex items-center justify-between p-6 bg-clay/5 border-2 border-clay/20 rounded-2xl hover:border-clay/40 hover:bg-clay/10 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-clay rounded-xl flex items-center justify-center text-white shrink-0">
                <Package size={24} />
              </div>
              <div>
                <p className="text-xs text-clay font-medium uppercase tracking-wider mb-0.5">Lista completa</p>
                <h3 className="text-lg font-bold text-primary">Productos para Mantenimiento de Aperos</h3>
                <p className="text-sm text-warm-500 mt-1">8 min lectura</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-clay shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* ERRORES COMUNES */}
        <section id="errores" className="py-16 lg:py-20 border-t border-warm-200">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-6 font-[family-name:var(--font-display)]">
            5 errores comunes al comprar un apero
          </h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Comprar por precio, no por necesidad", desc: "El apero más barato rara vez es el más rentable. Analiza tu necesidad real antes de fijarte en el precio." },
              { num: "2", title: "No comprobar la compatibilidad con el tractor", desc: "Categoría de enganche, potencia requerida, toma de fuerza... Si no coinciden, tendrás problemas." },
              { num: "3", title: "Sobredimensionar el apero", desc: "Un apero demasiado grande para tu tractor significa más consumo, más desgaste y peores resultados." },
              { num: "4", title: "Ignorar el servicio postventa", desc: "¿Hay recambios disponibles? ¿Quién te dará soporte técnico? Piénsalo antes de comprar." },
              { num: "5", title: "No considerar el alquiler", desc: "Si solo necesitas un apero 2 semanas al año, el alquiler puede ser mucho más rentable que la compra." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {num}
                </span>
                <div>
                  <h3 className="text-base font-bold text-primary mb-1">{title}</h3>
                  <p className="text-sm text-warm-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 lg:py-20 border-t border-warm-200">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-8 font-[family-name:var(--font-display)]">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto cuesta un apero agrícola?", a: "El precio varía enormemente según el tipo. Un arado sencillo puede costar desde 1.500€, mientras que una sembradora de precisión puede superar los 30.000€. Los aperos de segunda mano pueden suponer un ahorro del 30-50%." },
              { q: "¿Qué apero necesito para mi tractor?", a: "Depende de la potencia de tu tractor y del tipo de labor. Un tractor de 80CV puede mover la mayoría de arados de 2-3 cuerpos, cultivadores de hasta 3m y desbrozadoras estándar. Consulta siempre la potencia mínima requerida del apero." },
              { q: "¿Es mejor comprar un apero nuevo o de segunda mano?", a: "Depende de tu presupuesto y uso. Un apero nuevo ofrece garantía y últimas tecnologías, pero un apero de segunda mano bien mantenido puede dar excelentes resultados a mitad de precio." },
              { q: "¿Cada cuánto debo hacer mantenimiento a mis aperos?", a: "El engrase debe hacerse antes y después de cada uso. La revisión completa (desgaste de piezas, tornillería, hidráulicos) se recomienda al inicio y al final de cada campaña." },
            ].map(({ q, a }) => (
              <div key={q} className="border border-warm-200 rounded-2xl p-5">
                <h3 className="text-base font-bold text-primary mb-2 flex items-start gap-2">
                  <ChevronDown size={18} className="text-accent mt-0.5 shrink-0" /> {q}
                </h3>
                <p className="text-sm text-warm-600 pl-6">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ALL CLUSTER ARTICLES */}
        <section className="py-16 lg:py-20 border-t border-warm-200">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] text-primary leading-tight mb-3 font-[family-name:var(--font-display)]">
            Artículos de esta guía
          </h2>
          <p className="text-warm-500 mb-8">Profundiza en cada aspecto de los aperos agrícolas con nuestras guías detalladas.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {clusterArticles.map(({ slug, title, description, icon: Icon, readTime }) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="category-card group p-6 bg-white rounded-2xl border border-warm-200 hover:border-accent/30"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-primary group-hover:text-accent transition-colors mb-2">{title}</h3>
                <p className="text-sm text-warm-500 mb-3">{description}</p>
                <span className="flex items-center gap-1 text-xs text-accent font-medium">
                  Leer guía <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> <span className="text-warm-400 ml-2">{readTime} min</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* CTA FINAL */}
      <section className="bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
            ¿Necesitas ayuda para elegir tu apero?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Nuestro equipo de expertos te asesorará sin compromiso. Venta y alquiler de aperos nuevos y de segunda mano.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contacto" className="bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-warm-50 transition-colors">
              Pide Presupuesto
            </Link>
            <Link href="/maquinaria/arados-aperos" className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:border-white/60 transition-colors">
              Ver Catálogo de Aperos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
