import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/data";
import ClusterArticle from "@/components/ClusterArticle";

const post = blogPosts.find((p) => p.slug === "puesta-en-marcha-aperos-agricolas")!;

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
        prevArticle={{ slug: "como-elegir-apero-segun-necesidad", title: "Cómo Elegir un Apero" }}
        nextArticle={{ slug: "mantenimiento-aperos-agricolas", title: "Mantenimiento de Aperos" }}
      >
        <div className="space-y-8">
          <p className="text-warm-600 leading-relaxed text-lg">
            La puesta en marcha correcta de un apero no solo garantiza un buen trabajo en el campo,
            sino que previene accidentes y alarga la vida útil tanto del apero como del tractor.
            Sigue estos pasos para cada tipo de apero.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-6 flex gap-4">
            <AlertTriangle size={24} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-primary mb-1">Seguridad ante todo</h3>
              <p className="text-sm text-warm-600">
                Nunca trabajes bajo un apero levantado sin calzos de seguridad. Desconecta siempre
                la TDF antes de acercarte a partes móviles. Usa ropa ajustada y protecciones adecuadas.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Paso 1: Inspección previa
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Antes de enganchar el apero, realiza una inspección visual completa. Comprueba que no haya
            piezas sueltas, rotas o excesivamente desgastadas. Revisa los niveles de aceite en
            cajas de engranajes y verifica el estado de los neumáticos si los tiene.
          </p>
          <ul className="space-y-2">
            {[
              "Tornillería: busca tuercas flojas o faltantes",
              "Piezas de desgaste: rejas, cuchillas, discos — sustitúyelos si están al límite",
              "Protecciones y guardas: todas deben estar en su sitio",
              "Cardán: comprueba que las protecciones de la cruceta estén íntegras",
              "Mangueras hidráulicas: sin fugas, grietas ni rozaduras",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm text-warm-600">
                <span className="text-accent font-bold">—</span> {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Paso 2: Enganche al tractor
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Acerca el tractor marcha atrás lentamente hasta alinear los brazos del tripuntal con los
            puntos de enganche del apero. Conecta primero los brazos inferiores y después el tercer punto.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Tripuntal", desc: "Brazos inferiores primero, tercer punto después. Asegura todos los pasadores con sus chavetas." },
              { title: "Cardán (TDF)", desc: "Encaja las estrías y comprueba que el tubo telescópico tiene recorrido suficiente. Nunca debe trabajar con ángulo excesivo." },
              { title: "Hidráulica", desc: "Conecta las mangueras siguiendo el código de colores. Limpia los acoplamientos antes de conectar." },
              { title: "Eléctrica", desc: "Si el apero tiene señalización o sistemas electrónicos, conecta el enchufe y verifica su funcionamiento." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 bg-warm-50 rounded-xl border border-warm-200">
                <h3 className="text-sm font-bold text-primary mb-1">{title}</h3>
                <p className="text-xs text-warm-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Paso 3: Calibración
          </h2>
          <p className="text-warm-600 leading-relaxed">
            La calibración es el paso más importante y el que más afecta al resultado final. Cada tipo
            de apero tiene sus propios parámetros de ajuste.
          </p>

          <div className="relative pl-8 space-y-6 my-8">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-accent/20" />
            {[
              { t: "Nivelación lateral", d: "El apero debe quedar perfectamente horizontal visto desde atrás. Ajusta con las barras de tiro." },
              { t: "Nivelación longitudinal", d: "Ajusta el tercer punto para que el apero trabaje paralelo al suelo (o con la inclinación deseada)." },
              { t: "Profundidad de trabajo", d: "Usa la rueda reguladora o el control de posición del tractor. Empieza con menos profundidad e incrementa." },
              { t: "Ancho de trabajo", d: "En aperos regulables (cultivadores, gradas), ajusta al ancho deseado según tu plan de trabajo." },
            ].map(({ t, d }, i) => (
              <div key={t} className="relative">
                <span className="absolute -left-5 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <h3 className="text-base font-bold text-primary mb-1">{t}</h3>
                <p className="text-sm text-warm-600">{d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-[800] text-primary font-[family-name:var(--font-display)]">
            Paso 4: Prueba y ajuste fino
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Haz las primeras pasadas a velocidad reducida. Baja del tractor y comprueba el resultado:
            profundidad uniforme, cobertura completa, ausencia de vibraciones anormales. Ajusta los
            parámetros según sea necesario hasta obtener el resultado deseado.
          </p>

          <div className="aspect-[16/7] relative rounded-2xl overflow-hidden">
            <Image src="/images/blog/puesta-marcha-aperos.jpg" alt="Puesta en marcha de un apero agrícola" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>
        </div>
      </ClusterArticle>
    </>
  );
}
