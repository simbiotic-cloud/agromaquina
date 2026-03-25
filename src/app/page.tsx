import Link from "next/link";
import Image from "next/image";
import {
  Tractor,
  ArrowRight,
  Star,
  ShieldCheck,
  Wrench,
  TrendingUp,
  Clock,
  Tag,
} from "lucide-react";
import { categories, featuredMachines, blogPosts, brands } from "@/lib/data";

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary min-h-[600px] flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-light px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star size={14} /> Nuevas ofertas cada semana
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-[family-name:var(--font-display)]">
              La maquinaria que tu
              <span className="text-accent"> campo necesita</span>
            </h1>
            <p className="text-warm-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Venta y alquiler de maquinaria agrícola. Nueva y de segunda mano.
              Encuentra tractores, cosechadoras, aperos y mucho más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/maquinaria"
                className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl text-center transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Explorar Catálogo
              </Link>
              <Link
                href="/contacto"
                className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-center transition-colors"
              >
                Pide Presupuesto
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "500+", label: "Máquinas" },
                { value: "50+", label: "Marcas" },
                { value: "15 años", label: "Experiencia" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-warm-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual - abstract machinery shape */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[450px] h-[450px]">
              <div className="absolute inset-0 bg-accent/10 rounded-[3rem] rotate-6" />
              <div className="absolute inset-4 bg-accent/20 rounded-[2.5rem] -rotate-3" />
              <div className="absolute inset-8 bg-warm-800 rounded-[2rem] flex items-center justify-center">
                <Tractor size={120} className="text-accent/60" />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white text-primary px-4 py-2 rounded-xl shadow-xl text-sm font-semibold">
                Envío a toda España
              </div>
              <div className="absolute -bottom-2 -left-4 bg-secondary text-white px-4 py-2 rounded-xl shadow-xl text-sm font-semibold">
                Garantía incluida
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: ShieldCheck, text: "Garantía en todas las máquinas" },
            { icon: Wrench, text: "Servicio técnico propio" },
            { icon: TrendingUp, text: "Financiación a medida" },
            { icon: Clock, text: "Entrega en 24-72h" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-warm-600">
              <Icon size={18} className="text-accent" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-[family-name:var(--font-display)]">
            Explora por Categoría
          </h2>
          <p className="text-warm-500 max-w-2xl mx-auto">
            Encuentra la maquinaria perfecta para cada tarea. Desde tractores hasta herramientas de poda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/maquinaria/${cat.slug}`}
              className="category-card group relative bg-white rounded-2xl border border-warm-200 p-6 hover:border-accent/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[4rem] group-hover:bg-accent/10 transition-colors" />
              <div className="relative">
                <div className="w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Tractor size={24} />
                </div>
                <h3 className="font-semibold text-primary text-sm mb-1">{cat.name}</h3>
                <p className="text-xs text-warm-500">{cat.machineCount} productos</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED MACHINES */}
      <section className="bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-[family-name:var(--font-display)]">
                Máquinas Destacadas
              </h2>
              <p className="text-warm-500">Selección curada de las mejores oportunidades del momento.</p>
            </div>
            <Link
              href="/maquinaria"
              className="hidden md:flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all"
            >
              Ver todo <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMachines.map((machine) => (
              <Link
                key={machine.slug}
                href={`/maquinaria/${machine.category}/${machine.slug}`}
                className="category-card group bg-white rounded-2xl overflow-hidden border border-warm-200"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-warm-200 relative overflow-hidden">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      machine.condition === "nueva" ? "badge-new" : "badge-used"
                    }`}>
                      {machine.condition === "nueva" ? "Nueva" : "2ª Mano"}
                    </span>
                    {machine.rentalPrice && (
                      <span className="badge-rental text-xs font-semibold px-2.5 py-1 rounded-full">
                        Alquiler
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs text-warm-500 uppercase tracking-wider mb-1">{machine.brand}</div>
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-sm text-warm-500 mb-4 line-clamp-2">{machine.description}</p>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xl font-bold text-primary">{formatPrice(machine.price)}</div>
                      {machine.rentalPrice && (
                        <div className="text-xs text-secondary font-medium">
                          Alquiler desde {formatPrice(machine.rentalPrice)}/día
                        </div>
                      )}
                    </div>
                    <div className="w-8 h-8 bg-warm-100 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/maquinaria"
            className="md:hidden flex items-center justify-center gap-1 text-accent font-semibold text-sm mt-8 hover:gap-2 transition-all"
          >
            Ver todo el catálogo <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* SALE vs RENTAL CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-primary rounded-2xl p-8 md:p-12 overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-bl-[5rem]" />
            <Tag size={32} className="text-accent mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
              Compra Maquinaria
            </h3>
            <p className="text-warm-400 mb-6 max-w-sm">
              Máquinas nuevas y de segunda mano con garantía. Financiación flexible adaptada a tus necesidades.
            </p>
            <Link
              href="/maquinaria"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Ver catálogo <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative bg-secondary rounded-2xl p-8 md:p-12 overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-[5rem]" />
            <Clock size={32} className="text-white/80 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
              Alquila Maquinaria
            </h3>
            <p className="text-white/70 mb-6 max-w-sm">
              ¿Necesitas una máquina para una campaña concreta? Alquila por días, semanas o meses a los mejores precios.
            </p>
            <Link
              href="/maquinaria?tipo=alquiler"
              className="inline-flex items-center gap-2 bg-white text-secondary font-semibold px-6 py-3 rounded-xl hover:bg-warm-100 transition-colors"
            >
              Ver alquileres <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-[family-name:var(--font-display)]">
                Últimos Artículos
              </h2>
              <p className="text-warm-500">Comparativas, reseñas y guías para sacar el máximo a tu maquinaria.</p>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all"
            >
              Ver blog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="category-card group"
              >
                <div className="aspect-[16/10] bg-warm-200 rounded-xl mb-4 overflow-hidden relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    post.category === "comparativa"
                      ? "bg-accent/10 text-accent"
                      : post.category === "ressenya"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-earth/10 text-earth"
                  }`}>
                    {post.category === "comparativa" ? "Comparativa" :
                     post.category === "ressenya" ? "Reseña" :
                     post.category === "guia" ? "Guía" : "Noticia"}
                  </span>
                  <span className="text-xs text-warm-400">{post.readTime} min</span>
                </div>
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors text-sm leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-warm-500 line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h3 className="text-center text-sm uppercase tracking-widest text-warm-400 mb-8">
            Trabajamos con las mejores marcas
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {brands.map((brand) => (
              <div
                key={brand}
                className="text-warm-400 hover:text-primary font-semibold text-sm transition-colors cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y te ayudaremos a encontrar la máquina perfecta para tu explotación.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-warm-50 transition-colors shadow-lg"
          >
            Contacta con nosotros <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
