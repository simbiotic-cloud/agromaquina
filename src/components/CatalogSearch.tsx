"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Grid3X3, List } from "lucide-react";
import type { Category } from "@/lib/data";

interface Props {
  categories: Category[];
}

type FilterType = "todas" | "nuevas" | "segunda-mano" | "venta" | "alquiler";

export default function CatalogSearch({ categories }: Props) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("todas");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let result = categories;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (cat) =>
          cat.name.toLowerCase().includes(q) ||
          cat.description.toLowerCase().includes(q) ||
          cat.subcategories.some((s) => s.toLowerCase().includes(q))
      );
    }

    return result;
  }, [categories, search]);

  const filters: { label: string; value: FilterType }[] = [
    { label: "Todas", value: "todas" },
    { label: "Nuevas", value: "nuevas" },
    { label: "Segunda Mano", value: "segunda-mano" },
    { label: "En Venta", value: "venta" },
    { label: "En Alquiler", value: "alquiler" },
  ];

  return (
    <>
      {/* Search & view toggle */}
      <section className="bg-white border-b border-warm-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar maquinaria..."
              className="w-full pl-10 pr-4 py-2.5 bg-warm-100 border border-warm-200 rounded-xl text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex bg-warm-100 rounded-xl border border-warm-200 overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 transition-colors ${viewMode === "grid" ? "bg-accent text-white" : "text-warm-400 hover:text-primary"}`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 transition-colors ${viewMode === "list" ? "bg-accent text-white" : "text-warm-400 hover:text-primary"}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === value
                  ? "bg-accent text-white"
                  : "bg-warm-100 text-warm-600 hover:bg-warm-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Categories grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
            Categorías
          </h2>
          <span className="text-sm text-warm-500">{filtered.length} categorías</span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-warm-500 mb-2">No se encontraron categorías para &ldquo;{search}&rdquo;</p>
            <button onClick={() => setSearch("")} className="text-accent font-medium text-sm hover:underline">
              Limpiar búsqueda
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat) => (
              <Link
                key={cat.slug}
                href={`/maquinaria/${cat.slug}${activeFilter !== "todas" ? `?filtro=${activeFilter}` : ""}`}
                className="category-card group bg-white rounded-2xl border border-warm-200 overflow-hidden hover:border-accent/30"
              >
                <div className="aspect-[16/9] bg-warm-200 relative overflow-hidden">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
                    <p className="text-white/70 text-sm">{cat.machineCount} productos</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-warm-500 mb-3">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.subcategories.slice(0, 3).map((sub) => (
                      <span key={sub} className="text-xs bg-warm-100 text-warm-600 px-2.5 py-1 rounded-full">{sub}</span>
                    ))}
                    {cat.subcategories.length > 3 && (
                      <span className="text-xs bg-warm-100 text-warm-500 px-2.5 py-1 rounded-full">+{cat.subcategories.length - 3} más</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((cat) => (
              <Link
                key={cat.slug}
                href={`/maquinaria/${cat.slug}`}
                className="category-card group flex bg-white rounded-2xl border border-warm-200 overflow-hidden hover:border-accent/30"
              >
                <div className="w-48 shrink-0 bg-warm-200 relative overflow-hidden">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="200px" />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-1">{cat.name}</h3>
                  <p className="text-sm text-warm-500 mb-2">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.subcategories.map((sub) => (
                      <span key={sub} className="text-xs bg-warm-100 text-warm-600 px-2.5 py-1 rounded-full">{sub}</span>
                    ))}
                  </div>
                  <p className="text-xs text-warm-400 mt-3">{cat.machineCount} productos</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
