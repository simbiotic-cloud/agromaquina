import { CheckCircle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/data";
import ClusterArticle from "@/components/ClusterArticle";

const post = blogPosts.find((p) => p.slug === "como-elegir-apero-segun-necesidad")!;

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
        nextArticle={{ slug: "puesta-en-marcha-aperos-agricolas", title: "Puesta en Marcha de Aperos" }}
      >
        <div className="space-y-8">
          <p className="text-warm-600 leading-relaxed text-lg">
            Elegir el apero correcto es una de las decisiones más importantes para cualquier agricultor.
            Un error en esta elección puede suponer miles de euros en combustible desperdiciado, horas
            de trabajo perdidas y resultados deficientes en la labor.
          </p>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            1. Analiza tu tipo de cultivo
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Cada cultivo tiene sus propias exigencias. Los cereales de secano requieren una preparación
            del suelo profunda con arados o subsoladores, mientras que los frutales necesitan aperos
            más compactos y maniobrables que respeten las raíces.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-warm-300">
                  <th className="text-left py-3 pr-4 font-bold text-primary">Cultivo</th>
                  <th className="text-left py-3 pr-4 font-bold text-primary">Aperos principales</th>
                  <th className="text-left py-3 font-bold text-primary">Potencia mín.</th>
                </tr>
              </thead>
              <tbody className="text-warm-600">
                <tr className="border-b border-warm-100"><td className="py-3 pr-4 font-medium">Cereales secano</td><td className="py-3 pr-4">Arado vertedera, cultivador, sembradora</td><td className="py-3">80-120 CV</td></tr>
                <tr className="border-b border-warm-100"><td className="py-3 pr-4 font-medium">Hortícolas</td><td className="py-3 pr-4">Fresadora, sembradora precisión, pulverizador</td><td className="py-3">40-80 CV</td></tr>
                <tr className="border-b border-warm-100"><td className="py-3 pr-4 font-medium">Viñedo</td><td className="py-3 pr-4">Cultivador intercepa, atomizador, prepodadora</td><td className="py-3">60-90 CV</td></tr>
                <tr className="border-b border-warm-100"><td className="py-3 pr-4 font-medium">Olivar</td><td className="py-3 pr-4">Vibrador, atomizador, desbrozadora</td><td className="py-3">70-100 CV</td></tr>
                <tr><td className="py-3 pr-4 font-medium">Frutales</td><td className="py-3 pr-4">Pulverizador, segadora, plataforma</td><td className="py-3">50-80 CV</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            2. Conoce tu tractor
          </h2>
          <p className="text-warm-600 leading-relaxed">
            El apero debe ser compatible con tu tractor en tres aspectos fundamentales:
          </p>
          <div className="space-y-3">
            {[
              { t: "Potencia", d: "El apero debe requerir entre el 60% y el 85% de la potencia nominal de tu tractor. Menos es ineficiente, más es peligroso." },
              { t: "Categoría de enganche", d: "Cat I (hasta 45CV), Cat II (45-120CV), Cat III (+120CV). El tripuntal y las medidas de los bulones deben coincidir." },
              { t: "Toma de fuerza (TDF)", d: "540 rpm estándar, 1000 rpm para aperos de alta demanda. Algunos ofrecen ambas." },
              { t: "Capacidad hidráulica", d: "Comprueba que tu tractor tenga suficientes tomas hidráulicas y caudal para el apero." },
            ].map(({ t, d }) => (
              <div key={t} className="flex gap-3 items-start">
                <CheckCircle size={16} className="text-accent mt-1 shrink-0" />
                <div><strong className="text-primary">{t}:</strong> <span className="text-warm-600">{d}</span></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            3. Evalúa tu terreno
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Un suelo arcilloso pesado necesita aperos más robustos y con mayor capacidad de penetración
            que un suelo arenoso. Las parcelas con piedras requieren aperos reforzados con protecciones
            especiales. La pendiente del terreno también condiciona la elección: en laderas pronunciadas
            son preferibles aperos ligeros y con buena maniobrabilidad.
          </p>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            4. ¿Nuevo o segunda mano?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 bg-accent/5 border-2 border-accent/20 rounded-2xl">
              <h3 className="font-bold text-primary mb-3">Apero nuevo</h3>
              <ul className="space-y-2 text-sm text-warm-600">
                <li className="flex gap-2"><CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> Garantía del fabricante</li>
                <li className="flex gap-2"><CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> Últimas tecnologías</li>
                <li className="flex gap-2"><CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> Sin desgaste previo</li>
                <li className="flex gap-2"><CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> Financiación disponible</li>
              </ul>
            </div>
            <div className="p-5 bg-earth/5 border-2 border-earth/20 rounded-2xl">
              <h3 className="font-bold text-primary mb-3">Apero segunda mano</h3>
              <ul className="space-y-2 text-sm text-warm-600">
                <li className="flex gap-2"><CheckCircle size={14} className="text-earth mt-0.5 shrink-0" /> 30-50% más económico</li>
                <li className="flex gap-2"><CheckCircle size={14} className="text-earth mt-0.5 shrink-0" /> Depreciación ya absorbida</li>
                <li className="flex gap-2"><CheckCircle size={14} className="text-earth mt-0.5 shrink-0" /> Disponibilidad inmediata</li>
                <li className="flex gap-2"><CheckCircle size={14} className="text-earth mt-0.5 shrink-0" /> Ideal para uso ocasional</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            5. Presupuesto y rentabilidad
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Calcula el coste por hectárea trabajada, no solo el precio de compra. Un apero más caro
            pero más eficiente puede ahorrarte dinero a medio plazo en combustible, tiempo y
            mantenimiento. Considera también la opción de alquiler si el uso es esporádico.
          </p>

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-2xl p-6">
            <p className="text-warm-700 font-medium italic">
              &ldquo;En AgroMàquina te ayudamos a calcular la rentabilidad real de cada apero.
              No vendemos máquinas, encontramos soluciones.&rdquo;
            </p>
          </div>
        </div>
      </ClusterArticle>
    </>
  );
}
