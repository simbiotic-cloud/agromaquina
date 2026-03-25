import { blogPosts } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import { blogListingSchema, breadcrumbSchema } from "@/lib/schema";
import BlogFilters from "@/components/BlogFilters";

export const metadata = {
  title: "Blog de Maquinaria Agrícola",
  description: "Comparativas, reseñas, guías y noticias sobre maquinaria agrícola. Todo lo que necesitas saber para tu explotación.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogListingSchema(blogPosts)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
      ])} />

      {/* Header */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
            Blog
          </h1>
          <p className="text-warm-400 text-lg max-w-2xl">
            Comparativas, reseñas y guías para que tomes las mejores decisiones en maquinaria agrícola.
          </p>
        </div>
      </section>

      <BlogFilters posts={blogPosts} />
    </>
  );
}
