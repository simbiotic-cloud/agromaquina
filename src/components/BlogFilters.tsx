"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data";

interface Props {
  posts: BlogPost[];
}

type BlogCategory = "todos" | "comparativa" | "ressenya" | "guia" | "noticia";

const categoryLabels: Record<string, string> = {
  comparativa: "Comparativa",
  ressenya: "Reseña",
  guia: "Guía",
  noticia: "Noticia",
};

const categoryColors: Record<string, string> = {
  comparativa: "bg-accent/10 text-accent",
  ressenya: "bg-secondary/10 text-secondary",
  guia: "bg-earth/10 text-earth",
  noticia: "bg-clay/10 text-clay",
};

const tabs: { label: string; value: BlogCategory }[] = [
  { label: "Todos", value: "todos" },
  { label: "Comparativas", value: "comparativa" },
  { label: "Reseñas", value: "ressenya" },
  { label: "Guías", value: "guia" },
  { label: "Noticias", value: "noticia" },
];

export default function BlogFilters({ posts }: Props) {
  const [activeTab, setActiveTab] = useState<BlogCategory>("todos");

  const filtered = useMemo(() => {
    if (activeTab === "todos") return posts;
    return posts.filter((p) => p.category === activeTab);
  }, [posts, activeTab]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category filters */}
      <section className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2 overflow-x-auto">
          {tabs.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === value
                  ? "bg-accent text-white"
                  : "bg-warm-100 text-warm-600 hover:bg-warm-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-warm-500 mb-2">No hay artículos en esta categoría todavía.</p>
            <button onClick={() => setActiveTab("todos")} className="text-accent font-medium text-sm hover:underline">
              Ver todos los artículos
            </button>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="category-card group grid md:grid-cols-2 gap-8 bg-white rounded-2xl border border-warm-200 overflow-hidden mb-12"
              >
                <div className="aspect-[16/10] md:aspect-auto bg-warm-200 relative min-h-[250px]">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category]}`}>
                      {categoryLabels[featured.category]}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-warm-400">
                      <Clock size={12} /> {featured.readTime} min lectura
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors mb-4 font-[family-name:var(--font-display)]">
                    {featured.title}
                  </h2>
                  <p className="text-warm-500 mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-warm-400">
                      {featured.author} &middot; {new Date(featured.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                    <span className="flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                      Leer <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Rest of posts */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="category-card group bg-white rounded-2xl border border-warm-200 overflow-hidden">
                    <div className="aspect-[16/10] bg-warm-200 relative overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                          {categoryLabels[post.category]}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-warm-400">
                          <Clock size={12} /> {post.readTime} min
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2 font-[family-name:var(--font-display)]">
                        {post.title}
                      </h3>
                      <p className="text-sm text-warm-500 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-warm-400">
                          {new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "short" })}
                        </span>
                        <span className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Leer <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
