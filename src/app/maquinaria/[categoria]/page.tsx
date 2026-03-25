import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Clock } from "lucide-react";
import { categories, featuredMachines, blogPosts } from "@/lib/data";
import type { Machine } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import { categoryItemListSchema, breadcrumbSchema } from "@/lib/schema";
import CategoryFilters from "@/components/CategoryFilters";

export async function generateStaticParams() {
  return categories.map((cat) => ({ categoria: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) return {};
  return {
    title: `${cat.name} - Maquinaria Agrícola`,
    description: cat.description,
    alternates: { canonical: `/maquinaria/${cat.slug}` },
    openGraph: {
      title: `${cat.name} | Agromaquina`,
      description: cat.description,
    },
  };
}

// Generate deterministic demo machines (no Math.random which breaks SSG)
function getDemoMachines(categoria: string, categoryName: string, subcategories: string[]): Machine[] {
  const brandsPool = ["John Deere", "CLAAS", "Kuhn", "Amazone", "New Holland", "Fendt"];
  const basePrices = [8500, 12300, 5200, 34000, 22100, 15800];
  const rentalPrices = [95, 0, 85, 180, 0, 120];

  return Array.from({ length: 6 }, (_, i) => ({
    slug: `${categoria}-modelo-${i + 1}`,
    name: `${categoryName} ${brandsPool[i]} ${1000 + i * 110}`,
    category: categoria,
    brand: brandsPool[i],
    price: basePrices[i],
    rentalPrice: rentalPrices[i] || undefined,
    condition: (i % 3 === 0 ? "segunda-mano" : "nueva") as "nueva" | "segunda-mano",
    availability: (rentalPrices[i] ? "venta-alquiler" : "venta") as "venta" | "venta-alquiler",
    image: "",
    images: [],
    description: `${subcategories[i % subcategories.length]} de alta calidad para uso profesional.`,
    specs: {},
    featured: false,
    year: 2024 + (i % 3),
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const category = categories.find((c) => c.slug === categoria);
  if (!category) notFound();

  const machines = featuredMachines.filter((m) => m.category === categoria);
  const allMachines = machines.length > 0
    ? machines
    : getDemoMachines(categoria, category.name, category.subcategories);

  // Related blog posts
  const categoryKeywords = [
    categoria,
    ...category.name.toLowerCase().split(/\s+/),
    ...category.subcategories.map((s) => s.toLowerCase()),
  ];
  const relatedPosts = blogPosts.filter((post) => {
    const postText = `${post.title} ${post.tags.join(" ")} ${post.excerpt}`.toLowerCase();
    return categoryKeywords.some((kw) => kw.length > 3 && postText.includes(kw));
  });

  return (
    <>
      <JsonLd data={categoryItemListSchema(category)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Maquinaria", url: "/maquinaria" },
        { name: category.name, url: `/maquinaria/${category.slug}` },
      ])} />

      {/* Breadcrumb */}
      <div className="bg-warm-100 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-warm-500">
          <Link href="/" className="hover:text-accent">Inicio</Link>
          <ChevronRight size={14} />
          <Link href="/maquinaria" className="hover:text-accent">Maquinaria</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">{category.name}</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 font-[family-name:var(--font-display)]">
            {category.name}
          </h1>
          <p className="text-warm-400 max-w-2xl">{category.description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {category.subcategories.map((sub) => (
              <span key={sub} className="text-xs bg-white/10 text-white/80 px-3 py-1.5 rounded-full">
                {sub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive filters + grid */}
      <CategoryFilters
        categoria={categoria}
        machines={allMachines}
        categoryName={category.name}
        machineCount={category.machineCount}
      />

      {/* Related blog posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white border-t border-warm-200">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-display)]">
              Artículos sobre {category.name}
            </h2>
            <p className="text-warm-500 text-sm mb-8">
              Lee nuestras comparativas, reseñas y guías relacionadas con {category.name.toLowerCase()}.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="category-card group bg-warm-50 rounded-2xl border border-warm-200 overflow-hidden hover:border-accent/30"
                >
                  <div className="aspect-[16/10] bg-warm-200 relative overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        post.category === "comparativa" ? "bg-accent/10 text-accent" :
                        post.category === "ressenya" ? "bg-secondary/10 text-secondary" :
                        "bg-earth/10 text-earth"
                      }`}>
                        {post.category === "comparativa" ? "Comparativa" :
                         post.category === "ressenya" ? "Reseña" :
                         post.category === "guia" ? "Guía" : "Noticia"}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-warm-400">
                        <Clock size={12} /> {post.readTime} min
                      </span>
                    </div>
                    <h3 className="font-semibold text-primary group-hover:text-accent transition-colors text-sm leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-warm-500 line-clamp-2">{post.excerpt}</p>
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
