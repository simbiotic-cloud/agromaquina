import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, Calendar, User, ArrowLeft, ArrowRight, Tractor, Share2, Bookmark } from "lucide-react";
import { blogPosts, featuredMachines } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

const categoryLabels: Record<string, string> = {
  comparativa: "Comparativa",
  ressenya: "Reseña",
  guia: "Guía",
  noticia: "Noticia",
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const fallback = {
    slug,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    excerpt: "Artículo sobre maquinaria agrícola.",
    content: "",
    image: "",
    author: "Equipo AgroMàquina",
    date: "2026-03-01",
    category: "guia" as const,
    tags: ["maquinaria"],
    readTime: 5,
  };

  const article = post || fallback;
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: article.title, url: `/blog/${article.slug}` },
      ])} />
      {/* Breadcrumb */}
      <div className="bg-warm-100 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-warm-500">
          <Link href="/" className="hover:text-accent">Inicio</Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-medium truncate max-w-xs">{article.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
            {categoryLabels[article.category]}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6 font-[family-name:var(--font-display)]">
            {article.title}
          </h1>
          <p className="text-lg text-warm-500 mb-6">{article.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-warm-400">
            <span className="flex items-center gap-1"><User size={14} /> {article.author}</span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} min lectura</span>
          </div>
        </div>

        {/* Featured image */}
        <div className="aspect-[16/9] bg-warm-200 rounded-2xl mb-10 relative overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-10">
          <button className="flex items-center gap-2 px-4 py-2 bg-warm-100 rounded-xl text-sm text-warm-600 hover:bg-warm-200 transition-colors">
            <Share2 size={16} /> Compartir
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-warm-100 rounded-xl text-sm text-warm-600 hover:bg-warm-200 transition-colors">
            <Bookmark size={16} /> Guardar
          </button>
        </div>

        {/* Article body (demo content) */}
        <div className="prose prose-lg max-w-none">
          <p className="text-warm-600 leading-relaxed text-lg">
            En el mundo de la maquinaria agrícola, elegir el equipo adecuado puede marcar la diferencia
            entre una campaña exitosa y una llena de problemas. En este artículo analizamos en profundidad
            las opciones disponibles en el mercado actual.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4 font-[family-name:var(--font-display)]">
            ¿Qué factores debemos considerar?
          </h2>
          <p className="text-warm-600 leading-relaxed">
            A la hora de seleccionar maquinaria agrícola, hay varios factores clave que debemos tener en cuenta:
            la potencia necesaria para nuestras labores, el tamaño de nuestra explotación, el tipo de cultivo
            y, por supuesto, el presupuesto disponible.
          </p>

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-6 my-8">
            <p className="text-warm-700 font-medium italic">
              &ldquo;La inversión en buena maquinaria se amortiza en las primeras campañas.
              No escatimes en calidad cuando se trata de las herramientas de tu negocio.&rdquo;
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4 font-[family-name:var(--font-display)]">
            Nuestra recomendación
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Después de analizar todas las opciones, nuestra recomendación es clara: invierte en calidad,
            busca una máquina que se adapte a tus necesidades específicas y no dudes en pedir asesoramiento
            profesional. En AgroMàquina estamos para ayudarte.
          </p>

          <p className="text-warm-600 leading-relaxed mt-6">
            Si tienes dudas sobre qué máquina es la mejor para tu caso, no dudes en contactar con nuestro
            equipo de expertos. Te asesoraremos sin compromiso.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-warm-200">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs bg-warm-100 text-warm-600 px-3 py-1.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-8 md:p-10 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
            ¿Necesitas esta máquina?
          </h3>
          <p className="text-warm-400 mb-6">Te asesoramos sin compromiso. Venta y alquiler de maquinaria agrícola.</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Pide Presupuesto <ArrowRight size={16} />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10 pt-8 border-t border-warm-200">
          <Link href="/blog" className="flex items-center gap-2 text-warm-500 hover:text-accent transition-colors text-sm">
            <ArrowLeft size={16} /> Volver al blog
          </Link>
        </div>
      </article>

      {/* Related */}
      {otherPosts.length > 0 && (
        <section className="bg-warm-100">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-primary mb-8 font-[family-name:var(--font-display)]">
              Artículos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="category-card group bg-white rounded-2xl border border-warm-200 overflow-hidden"
                >
                  <div className="aspect-[16/10] bg-warm-200 relative overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-accent">{categoryLabels[p.category]}</span>
                    <h3 className="text-sm font-bold text-primary group-hover:text-accent transition-colors mt-1">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
