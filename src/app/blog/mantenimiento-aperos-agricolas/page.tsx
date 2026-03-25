import Image from "next/image";
import { CheckCircle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/data";
import ClusterArticle from "@/components/ClusterArticle";

const post = blogPosts.find((p) => p.slug === "mantenimiento-aperos-agricolas")!;

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
        prevArticle={{ slug: "puesta-en-marcha-aperos-agricolas", title: "Puesta en Marcha de Aperos" }}
        nextArticle={{ slug: "productos-mantenimiento-aperos", title: "Productos de Mantenimiento" }}
      >
        <div className="space-y-8">
          <p className="text-warm-600 leading-relaxed text-lg">
            Un programa de mantenimiento preventivo puede multiplicar por tres la vida útil de tus
            aperos agrícolas. Además, evita averías inesperadas que pueden paralizar tu trabajo
            en el momento más crítico de la campaña.
          </p>

          <div className="aspect-[16/7] relative rounded-2xl overflow-hidden">
            <Image src="/images/blog/mantenimiento-aperos.jpg" alt="Mantenimiento de aperos" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Mantenimiento antes de cada uso
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Antes de cada jornada de trabajo, dedica 10-15 minutos a revisar el apero. Es una inversión
            mínima que evita problemas mayores.
          </p>
          <div className="space-y-2">
            {[
              "Engrase de todos los puntos marcados (ver manual del fabricante)",
              "Revisión visual de piezas de desgaste (rejas, cuchillas, discos)",
              "Comprobación de la tornillería (apriete correcto)",
              "Verificación de niveles de aceite en cajas de engranajes",
              "Estado de mangueras hidráulicas y conexiones",
              "Presión de neumáticos (si el apero los tiene)",
            ].map((item) => (
              <div key={item} className="flex gap-2 text-sm text-warm-600">
                <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Mantenimiento al final de la campaña
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Al terminar la temporada de uso, es el momento de hacer una revisión completa y preparar
            el apero para el almacenaje.
          </p>

          <div className="space-y-4">
            {[
              { n: "01", t: "Limpieza a fondo", d: "Elimina toda la tierra, restos vegetales y residuos. Usa agua a presión si es necesario, pero seca bien después para evitar oxidación." },
              { n: "02", t: "Revisión de piezas de desgaste", d: "Sustituye ahora las piezas que estén al límite. Así estarás listo para la próxima campaña sin prisas ni problemas de stock." },
              { n: "03", t: "Engrase completo", d: "Engrasa todos los puntos, incluyendo los que no usas habitualmente. La grasa protege contra la oxidación durante el almacenaje." },
              { n: "04", t: "Protección antioxidante", d: "Aplica aceite o spray protector en todas las superficies metálicas expuestas: rejas, cuchillas, discos, superficies pulidas." },
              { n: "05", t: "Revisión de tornillería", d: "Repasa todos los tornillos, tuercas y pasadores. Sustituye los que estén dañados o deformados." },
              { n: "06", t: "Circuitos hidráulicos", d: "Comprueba el nivel de aceite, cambia filtros si toca y revisa todas las mangueras y racores en busca de fugas." },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-4 p-4 bg-warm-50 rounded-xl border border-warm-200">
                <span className="w-9 h-9 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{n}</span>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{t}</h3>
                  <p className="text-xs text-warm-600">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Almacenaje correcto
          </h2>
          <p className="text-warm-600 leading-relaxed">
            El almacenaje es tan importante como el mantenimiento activo. Un apero mal almacenado
            puede deteriorarse más en un invierno que en toda una campaña de trabajo.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
              <h3 className="font-bold text-green-800 mb-3">Correcto</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>Bajo cubierto (nave, porche)</li>
                <li>Sobre calzos o soportes</li>
                <li>Correas y cadenas destensadas</li>
                <li>Hidráulicos retraídos</li>
                <li>Engrasado y protegido</li>
              </ul>
            </div>
            <div className="p-5 bg-red-50 border border-red-200 rounded-2xl">
              <h3 className="font-bold text-red-800 mb-3">Incorrecto</h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li>A la intemperie</li>
                <li>Directamente en el suelo</li>
                <li>Con tensión en correas</li>
                <li>Cilindros extendidos</li>
                <li>Sin protección antioxidante</li>
              </ul>
            </div>
          </div>

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-2xl p-6">
            <p className="text-warm-700 font-medium italic">
              &ldquo;Un apero almacenado correctamente al final de campaña te ahorrará horas de trabajo
              y dinero en reparaciones cuando lo necesites de nuevo.&rdquo;
            </p>
          </div>
        </div>
      </ClusterArticle>
    </>
  );
}
