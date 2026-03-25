"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Tractor } from "lucide-react";
import { categories } from "@/lib/data";

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      router.push(`/maquinaria?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-primary text-white">
      {/* Top bar */}
      <div className="bg-primary-dark text-warm-400 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>Venta y Alquiler de Maquinaria Agrícola</span>
          <div className="hidden sm:flex gap-4">
            <span>Tel: 973 XX XX XX</span>
            <span>info@agromaquina.cat</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent-light transition-colors">
            <Tractor size={22} className="text-white" />
          </div>
          <div className="leading-tight">
            <span className="text-lg font-bold tracking-tight font-[var(--font-display)]">
              Agromaquina
            </span>
            <span className="hidden sm:block text-[10px] text-warm-400 uppercase tracking-widest">
              Maquinaria Agricola
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm hover:text-accent transition-colors">
            Inicio
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCatOpen(true)}
            onMouseLeave={() => setCatOpen(false)}
          >
            <button className="px-3 py-2 text-sm hover:text-accent transition-colors flex items-center gap-1">
              Maquinaria <ChevronDown size={14} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
            </button>
            {catOpen && (
              <div className="absolute top-full left-0 w-[600px] bg-white text-foreground rounded-xl shadow-2xl border border-warm-200 p-6 grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/maquinaria/${cat.slug}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-warm-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-warm-100 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <Tractor size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{cat.name}</div>
                      <div className="text-xs text-warm-500">{cat.machineCount} productos</div>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/maquinaria"
                  className="col-span-2 mt-2 text-center py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors"
                >
                  Ver todo el catálogo
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="px-3 py-2 text-sm hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/sobre-nosotros" className="px-3 py-2 text-sm hover:text-accent transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="px-3 py-2 text-sm hover:text-accent transition-colors">
            Contacto
          </Link>
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:bg-primary-light rounded-lg transition-colors" aria-label="Buscar">
            <Search size={20} />
          </button>
          <Link
            href="/contacto"
            className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Pide Presupuesto
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary-light border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/" className="py-3 text-sm hover:text-accent" onClick={() => setMobileOpen(false)}>
              Inicio
            </Link>
            <Link href="/maquinaria" className="py-3 text-sm hover:text-accent" onClick={() => setMobileOpen(false)}>
              Maquinaria
            </Link>
            <Link href="/blog" className="py-3 text-sm hover:text-accent" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/sobre-nosotros" className="py-3 text-sm hover:text-accent" onClick={() => setMobileOpen(false)}>
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="py-3 text-sm hover:text-accent" onClick={() => setMobileOpen(false)}>
              Contacto
            </Link>
            <Link
              href="/contacto"
              className="mt-2 bg-accent text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
              onClick={() => setMobileOpen(false)}
            >
              Pide Presupuesto
            </Link>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary-dark border-t border-white/10 shadow-2xl z-50">
          <div className="max-w-3xl mx-auto px-4 py-6">
            <form onSubmit={handleSearch} className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar tractores, cosechadoras, aperos..."
                className="w-full pl-12 pr-24 py-4 bg-primary-light border border-white/10 rounded-xl text-white placeholder:text-warm-500 text-lg focus:outline-none focus:border-accent"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                <button type="submit" className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                  Buscar
                </button>
                <button type="button" onClick={() => { setSearchOpen(false); setSearchQuery(""); }} className="p-2 text-warm-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>
            </form>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs text-warm-500">Popular:</span>
              {["Tractores", "Cosechadoras", "Desbrozadoras", "Sembradoras"].map((t) => (
                <button
                  key={t}
                  onClick={() => { setSearchOpen(false); router.push(`/maquinaria/${t.toLowerCase()}`); }}
                  className="text-xs bg-white/5 text-warm-400 px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
