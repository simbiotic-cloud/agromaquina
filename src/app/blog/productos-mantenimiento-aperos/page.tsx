import Link from "next/link";
import { CheckCircle, ShoppingCart } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/data";
import ClusterArticle from "@/components/ClusterArticle";

const post = blogPosts.find((p) => p.slug === "productos-mantenimiento-aperos")!;

export const metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Guía de Aperos", url: "/blog/guia-compra-aperos-agricolas" },
        { name: post.title, url: `/blog/${post.slug}` },
      ])} />

      <ClusterArticle
        title={post.title}
        image={post.image}
        readTime={post.readTime}
        author={post.author}
        date={post.date}
        prevArticle={{ slug: "mantenimiento-aperos-agricolas", title: "Mantenimiento de Aperos" }}
      >
        <div className="space-y-8">
          <p className="text-warm-600 leading-relaxed text-lg">
            Tener los productos adecuados a mano es fundamental para un mantenimiento eficaz.
            Aquí te detallamos todos los productos que necesitas, con recomendaciones concretas
            y consejos de uso.
          </p>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Grasas y lubricantes
          </h2>
          <p className="text-warm-600 leading-relaxed">
            La grasa es el producto de mantenimiento más importante. Reduce la fricción, protege
            contra la corrosión y sella las juntas contra la entrada de suciedad.
          </p>

          <div className="space-y-3">
            {[
              { name: "Grasa EP2 multiuso", use: "Engrase general de rodamientos, articulaciones y pasadores", tip: "La más versátil. Usa en el 80% de los puntos de engrase." },
              { name: "Grasa de complejo de litio", use: "Rodamientos de alta velocidad y temperatura", tip: "Ideal para cardanes y cajas de engranajes expuestas." },
              { name: "Grasa de bisulfuro de molibdeno (MoS2)", use: "Articulaciones bajo carga extrema", tip: "Para puntas de arado, articulaciones de cultivador y piezas sometidas a alta presión." },
              { name: "Aceite hidráulico ISO 46/68", use: "Circuitos hidráulicos del apero", tip: "Comprueba la especificación de tu fabricante. No mezcles tipos." },
              { name: "Aceite de engranajes 80W-90", use: "Cajas de engranajes y reductores", tip: "Cambia según las horas indicadas por el fabricante." },
            ].map(({ name, use, tip }) => (
              <div key={name} className="p-4 bg-warm-50 rounded-xl border border-warm-200">
                <h3 className="text-sm font-bold text-primary mb-1">{name}</h3>
                <p className="text-xs text-warm-500 mb-1">{use}</p>
                <p className="text-xs text-accent font-medium">Consejo: {tip}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Protección y limpieza
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Spray antioxidante", desc: "Protege superficies metálicas durante el almacenaje. Aplica en rejas, cuchillas y discos." },
              { name: "Desengrasante biodegradable", desc: "Para limpiar grasa vieja y suciedad acumulada antes de reengrasar." },
              { name: "Penetrante aflojatodo", desc: "Indispensable para tornillos oxidados. Aplica con antelación y deja actuar." },
              { name: "Pintura antioxidante", desc: "Para retocar las zonas donde la pintura original se haya dañado." },
            ].map(({ name, desc }) => (
              <div key={name} className="flex gap-3 items-start p-3 bg-white border border-warm-200 rounded-xl">
                <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-primary">{name}</p>
                  <p className="text-xs text-warm-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Herramientas imprescindibles
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Además de los consumibles, necesitas estas herramientas para realizar el mantenimiento
            de forma correcta y segura:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-warm-300">
                  <th className="text-left py-3 pr-4 font-bold text-primary">Herramienta</th>
                  <th className="text-left py-3 pr-4 font-bold text-primary">Uso principal</th>
                  <th className="text-right py-3 font-bold text-primary">Precio aprox.</th>
                </tr>
              </thead>
              <tbody className="text-warm-600">
                <tr className="border-b border-warm-100"><td className="py-3 pr-4">Engrasadora manual</td><td className="py-3 pr-4">Aplicar grasa en boquillas</td><td className="py-3 text-right">25-60 €</td></tr>
                <tr className="border-b border-warm-100"><td className="py-3 pr-4">Engrasadora neumática</td><td className="py-3 pr-4">Engrase rápido con compresor</td><td className="py-3 text-right">80-150 €</td></tr>
                <tr className="border-b border-warm-100"><td className="py-3 pr-4">Llave dinamométrica</td><td className="py-3 pr-4">Apriete correcto de tornillería</td><td className="py-3 text-right">40-120 €</td></tr>
                <tr className="border-b border-warm-100"><td className="py-3 pr-4">Juego de llaves combinadas</td><td className="py-3 pr-4">Apriete general 8-32mm</td><td className="py-3 text-right">30-80 €</td></tr>
                <tr className="border-b border-warm-100"><td className="py-3 pr-4">Cepillo metálico</td><td className="py-3 pr-4">Limpieza de óxido y boquillas</td><td className="py-3 text-right">5-15 €</td></tr>
                <tr><td className="py-3 pr-4">Gato hidráulico / caballetes</td><td className="py-3 pr-4">Levantar apero para inspección</td><td className="py-3 text-right">50-200 €</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Kit básico recomendado
          </h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Si empiezas desde cero, este es el kit mínimo que recomendamos para mantener tus aperos
            en perfecto estado:
          </p>

          <div className="p-6 bg-accent/5 border-2 border-accent/20 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart size={20} className="text-accent" />
              <h3 className="font-bold text-primary">Kit Básico de Mantenimiento (~180€)</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "1x Engrasadora manual",
                "2x Cartucho grasa EP2 (400g)",
                "1x Spray antioxidante 500ml",
                "1x Bote penetrante 400ml",
                "1x Juego llaves combinadas",
                "1x Cepillo metálico",
                "1x Bote desengrasante 1L",
                "1x Trapos industriales (pack)",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-sm text-warm-600">
                  <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-2xl p-6">
            <p className="text-warm-700 font-medium italic">
              &ldquo;Invierte 180€ en un kit básico de mantenimiento y ahórrate miles en reparaciones.
              La prevención es siempre más barata que la cura.&rdquo;
            </p>
          </div>
        </div>
      </ClusterArticle>
    </>
  );
}
