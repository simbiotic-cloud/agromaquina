import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Tractor,
  ShieldCheck,
  Truck,
  Phone,
  Star,
  ArrowRight,
  Calendar,
  Tag,
} from "lucide-react";
import { categories, featuredMachines } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import { productSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({ params }: { params: Promise<{ categoria: string; slug: string }> }) {
  const { categoria, slug } = await params;
  const machine = featuredMachines.find((m) => m.slug === slug);
  if (!machine) return { title: "Máquina | Agromaquina" };
  return {
    title: `${machine.name} - ${machine.brand} | Comprar / Alquilar`,
    description: machine.description,
    alternates: { canonical: `/maquinaria/${categoria}/${slug}` },
    openGraph: {
      title: `${machine.name} - ${machine.brand}`,
      description: machine.description,
      type: "website",
    },
  };
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);
}

export default async function ProductPage({ params }: { params: Promise<{ categoria: string; slug: string }> }) {
  const { categoria, slug } = await params;
  const category = categories.find((c) => c.slug === categoria);
  if (!category) notFound();

  const machine = featuredMachines.find((m) => m.slug === slug);

  // Demo fallback
  const product = machine || {
    slug,
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    category: categoria,
    brand: "Marca",
    price: 15000,
    rentalPrice: 120,
    condition: "nueva" as const,
    availability: "venta-alquiler" as const,
    image: "",
    images: [],
    description: "Máquina de alta calidad para uso agrícola profesional. Contacta con nosotros para más información.",
    specs: { "Potencia": "80 CV", "Peso": "1.500 kg", "Año": "2025" },
    featured: false,
  };

  return (
    <>
      <JsonLd data={productSchema(product, category.name)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Maquinaria", url: "/maquinaria" },
        { name: category.name, url: `/maquinaria/${categoria}` },
        { name: product.name, url: `/maquinaria/${categoria}/${slug}` },
      ])} />

      {/* Breadcrumb */}
      <div className="bg-warm-100 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-warm-500 flex-wrap">
          <Link href="/" className="hover:text-accent">Inicio</Link>
          <ChevronRight size={14} />
          <Link href="/maquinaria" className="hover:text-accent">Maquinaria</Link>
          <ChevronRight size={14} />
          <Link href={`/maquinaria/${categoria}`} className="hover:text-accent">{category.name}</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/3] bg-warm-200 rounded-2xl relative overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tractor size={80} className="text-warm-300" />
                </div>
              )}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`text-sm font-semibold px-3 py-1.5 rounded-full ${
                  product.condition === "nueva" ? "badge-new" : "badge-used"
                }`}>
                  {product.condition === "nueva" ? "Nueva" : "Segunda Mano"}
                </span>
                {product.rentalPrice && (
                  <span className="badge-rental text-sm font-semibold px-3 py-1.5 rounded-full">
                    Disponible en alquiler
                  </span>
                )}
              </div>
            </div>
            {/* Thumbnail row */}
            <div className="flex gap-3 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`aspect-square w-20 bg-warm-200 rounded-xl relative overflow-hidden cursor-pointer ${
                    i === 1 ? "ring-2 ring-accent" : "hover:ring-2 hover:ring-warm-300"
                  }`}
                >
                  {product.image ? (
                    <Image src={product.image} alt={`${product.name} vista ${i}`} fill className="object-cover" sizes="80px" />
                  ) : (
                    <Tractor size={20} className="text-warm-300 absolute inset-0 m-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="text-sm text-warm-500 uppercase tracking-wider mb-1">{product.brand}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-display)]">
              {product.name}
            </h1>

            {/* Rating placeholder */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className={i <= 4 ? "text-accent fill-accent" : "text-warm-300"} />
                ))}
              </div>
              <span className="text-sm text-warm-500">(12 opiniones)</span>
            </div>

            <p className="text-warm-600 leading-relaxed mb-6">{product.description}</p>

            {/* Pricing */}
            <div className="bg-warm-100 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Tag size={18} className="text-accent" />
                <span className="text-sm text-warm-500 font-medium">Precio de venta</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-4">{formatPrice(product.price)}</div>

              {product.rentalPrice && (
                <>
                  <div className="border-t border-warm-200 pt-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={18} className="text-secondary" />
                      <span className="text-sm text-warm-500 font-medium">Precio de alquiler</span>
                    </div>
                    <div className="text-2xl font-bold text-secondary">
                      {formatPrice(product.rentalPrice)}<span className="text-base font-normal text-warm-500">/día</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contacto"
                className="flex-1 bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-xl text-center transition-colors"
              >
                Solicitar Presupuesto
              </Link>
              <a
                href="tel:+34973000000"
                className="flex-1 border-2 border-primary text-primary font-semibold py-4 rounded-xl text-center hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Llamar Ahora
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, text: "Garantía incluida" },
                { icon: Truck, text: "Envío a toda España" },
                { icon: Star, text: "Financiación disponible" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="text-center">
                  <Icon size={20} className="text-accent mx-auto mb-1" />
                  <span className="text-xs text-warm-500">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs table */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6 font-[family-name:var(--font-display)]">
            Especificaciones Técnicas
          </h2>
          <div className="bg-white rounded-2xl border border-warm-200 overflow-hidden">
            {Object.entries(product.specs).map(([key, value], i) => (
              <div
                key={key}
                className={`flex justify-between px-6 py-4 ${
                  i % 2 === 0 ? "bg-warm-50" : "bg-white"
                }`}
              >
                <span className="text-sm font-medium text-warm-600">{key}</span>
                <span className="text-sm text-primary font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6 font-[family-name:var(--font-display)]">
            También te puede interesar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMachines.filter((m) => m.slug !== slug).slice(0, 4).map((m) => (
              <Link
                key={m.slug}
                href={`/maquinaria/${m.category}/${m.slug}`}
                className="category-card group bg-white rounded-2xl border border-warm-200 overflow-hidden"
              >
                <div className="aspect-[4/3] bg-warm-200 relative overflow-hidden">
                  {m.image ? (
                    <Image src={m.image} alt={m.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center"><Tractor size={36} className="text-warm-300" /></div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs text-warm-400">{m.brand}</div>
                  <h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">{m.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-primary">{formatPrice(m.price)}</span>
                    <ArrowRight size={14} className="text-warm-400 group-hover:text-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
