import { categories } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import { catalogSchema, breadcrumbSchema } from "@/lib/schema";
import CatalogSearch from "@/components/CatalogSearch";

export const metadata = {
  title: "Catálogo de Maquinaria Agrícola",
  description: "Explora nuestro catálogo completo de maquinaria agrícola. Tractores, cosechadoras, aperos y más. Venta y alquiler.",
  alternates: { canonical: "/maquinaria" },
};

export default function MaquinariaPage() {
  return (
    <>
      <JsonLd data={catalogSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Maquinaria", url: "/maquinaria" },
      ])} />

      {/* Header */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
            Catálogo de Maquinaria
          </h1>
          <p className="text-warm-400 text-lg max-w-2xl">
            Más de 500 máquinas disponibles para venta y alquiler. Maquinaria nueva y de segunda mano con garantía.
          </p>
        </div>
      </section>

      <CatalogSearch categories={categories} />
    </>
  );
}
