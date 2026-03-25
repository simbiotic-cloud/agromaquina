"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tractor, ArrowRight, SlidersHorizontal, Search, X } from "lucide-react";
import type { Machine } from "@/lib/data";

interface Props {
  categoria: string;
  machines: Machine[];
  categoryName: string;
  machineCount: number;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function CategoryFilters({ categoria, machines, categoryName, machineCount }: Props) {
  const [search, setSearch] = useState("");
  const [conditions, setConditions] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sort, setSort] = useState("relevancia");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Extract unique brands from machines
  const allBrands = useMemo(
    () => [...new Set(machines.map((m) => m.brand))].sort(),
    [machines]
  );

  // Filter logic
  const filtered = useMemo(() => {
    let result = [...machines];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.brand.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
      );
    }

    // Condition
    if (conditions.length > 0) {
      result = result.filter((m) => {
        if (conditions.includes("nueva") && m.condition === "nueva") return true;
        if (conditions.includes("segunda-mano") && m.condition === "segunda-mano") return true;
        return false;
      });
    }

    // Availability
    if (availability.length > 0) {
      result = result.filter((m) => {
        const hasRental = !!m.rentalPrice;
        if (availability.includes("alquiler") && !hasRental) return false;
        if (availability.includes("venta") && availability.length === 1) return true;
        if (availability.includes("alquiler") && hasRental) return true;
        return availability.includes("venta");
      });
    }

    // Price range
    const min = priceMin ? Number(priceMin) : 0;
    const max = priceMax ? Number(priceMax) : Infinity;
    if (min > 0 || max < Infinity) {
      result = result.filter((m) => m.price >= min && m.price <= max);
    }

    // Brands
    if (brands.length > 0) {
      result = result.filter((m) => brands.includes(m.brand));
    }

    // Sort
    switch (sort) {
      case "precio-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "precio-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "recientes":
        result.sort((a, b) => (b.year ?? 2026) - (a.year ?? 2026));
        break;
    }

    return result;
  }, [machines, search, conditions, availability, brands, priceMin, priceMax, sort]);

  const hasActiveFilters =
    conditions.length > 0 ||
    availability.length > 0 ||
    brands.length > 0 ||
    priceMin !== "" ||
    priceMax !== "";

  function clearFilters() {
    setConditions([]);
    setAvailability([]);
    setBrands([]);
    setPriceMin("");
    setPriceMax("");
    setSearch("");
  }

  function toggleArray(arr: string[], val: string, setter: (v: string[]) => void) {
    setter(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  }

  const filtersContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <SlidersHorizontal size={18} /> Filtros
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-accent hover:underline"
          >
            Limpiar todo
          </button>
        )}
      </div>

      {/* Search within category */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Buscar en ${categoryName}...`}
          className="w-full pl-9 pr-4 py-2.5 bg-warm-100 border border-warm-200 rounded-xl text-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* Condition */}
      <div>
        <h4 className="text-sm font-semibold text-primary mb-2">Estado</h4>
        <div className="space-y-2">
          {[
            { label: "Nuevas", value: "nueva" },
            { label: "Segunda mano", value: "segunda-mano" },
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center gap-2 text-sm text-warm-600 cursor-pointer">
              <input
                type="checkbox"
                className="rounded accent-accent"
                checked={conditions.includes(value)}
                onChange={() => toggleArray(conditions, value, setConditions)}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="text-sm font-semibold text-primary mb-2">Disponibilidad</h4>
        <div className="space-y-2">
          {[
            { label: "Venta", value: "venta" },
            { label: "Alquiler", value: "alquiler" },
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center gap-2 text-sm text-warm-600 cursor-pointer">
              <input
                type="checkbox"
                className="rounded accent-accent"
                checked={availability.includes(value)}
                onChange={() => toggleArray(availability, value, setAvailability)}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h4 className="text-sm font-semibold text-primary mb-2">Precio</h4>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            className="w-full bg-warm-100 border border-warm-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            className="w-full bg-warm-100 border border-warm-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Brand */}
      <div>
        <h4 className="text-sm font-semibold text-primary mb-2">Marca</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {allBrands.map((b) => (
            <label key={b} className="flex items-center gap-2 text-sm text-warm-600 cursor-pointer">
              <input
                type="checkbox"
                className="rounded accent-accent"
                checked={brands.includes(b)}
                onChange={() => toggleArray(brands, b, setBrands)}
              />
              {b}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-[140px]">{filtersContent}</div>
        </aside>

        {/* Mobile filter button */}
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 z-30 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent-dark transition-colors"
        >
          <SlidersHorizontal size={20} />
        </button>

        {/* Mobile filter drawer */}
        {mobileFiltersOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-primary">Filtros</h3>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-warm-400 hover:text-primary">
                  <X size={20} />
                </button>
              </div>
              {filtersContent}
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full mt-6 bg-accent text-white text-sm font-semibold py-3 rounded-xl hover:bg-accent-dark transition-colors"
              >
                Ver {filtered.length} resultados
              </button>
            </div>
          </div>
        )}

        {/* Products grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-sm text-warm-500">
                <span className="font-semibold text-primary">{filtered.length}</span> productos encontrados
              </p>
              {/* Active filter tags */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-1.5">
                  {conditions.map((c) => (
                    <span
                      key={c}
                      onClick={() => toggleArray(conditions, c, setConditions)}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full cursor-pointer hover:bg-accent/20 flex items-center gap-1"
                    >
                      {c === "nueva" ? "Nueva" : "2ª Mano"} <X size={10} />
                    </span>
                  ))}
                  {brands.map((b) => (
                    <span
                      key={b}
                      onClick={() => toggleArray(brands, b, setBrands)}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full cursor-pointer hover:bg-accent/20 flex items-center gap-1"
                    >
                      {b} <X size={10} />
                    </span>
                  ))}
                  {availability.map((a) => (
                    <span
                      key={a}
                      onClick={() => toggleArray(availability, a, setAvailability)}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full cursor-pointer hover:bg-accent/20 flex items-center gap-1"
                    >
                      {a === "venta" ? "Venta" : "Alquiler"} <X size={10} />
                    </span>
                  ))}
                </div>
              )}
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-warm-100 border border-warm-200 rounded-lg px-3 py-2 text-sm"
            >
              <option value="relevancia">Relevancia</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="recientes">Más recientes</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Tractor size={48} className="text-warm-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">No se encontraron resultados</h3>
              <p className="text-sm text-warm-500 mb-4">Prueba a ajustar los filtros o la búsqueda.</p>
              <button onClick={clearFilters} className="text-accent font-medium text-sm hover:underline">
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((machine) => (
                <Link
                  key={machine.slug}
                  href={`/maquinaria/${categoria}/${machine.slug}`}
                  className="category-card group bg-white rounded-2xl border border-warm-200 overflow-hidden hover:border-accent/30"
                >
                  <div className="aspect-[4/3] bg-warm-200 relative overflow-hidden">
                    {machine.image ? (
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Tractor size={40} className="text-warm-300" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          machine.condition === "nueva" ? "badge-new" : "badge-used"
                        }`}
                      >
                        {machine.condition === "nueva" ? "Nueva" : "2ª Mano"}
                      </span>
                      {machine.rentalPrice && (
                        <span className="badge-rental text-xs font-semibold px-2.5 py-1 rounded-full">
                          Alquiler
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-warm-400 uppercase tracking-wider mb-1">{machine.brand}</div>
                    <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                      {machine.name}
                    </h3>
                    <p className="text-xs text-warm-500 mb-3 line-clamp-2">{machine.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-primary">{formatPrice(machine.price)}</span>
                        {machine.rentalPrice && (
                          <div className="text-xs text-secondary font-medium">
                            Alquiler {formatPrice(machine.rentalPrice)}/día
                          </div>
                        )}
                      </div>
                      <span className="w-7 h-7 bg-warm-100 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
