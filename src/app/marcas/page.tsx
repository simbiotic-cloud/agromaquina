import { Tractor } from "lucide-react";
import { brands } from "@/lib/data";

export const metadata = {
  title: "Marcas de Maquinaria Agrícola",
  description: "Descubre todas las marcas de maquinaria agrícola disponibles: John Deere, CLAAS, New Holland, y más.",
  alternates: { canonical: "/marcas" },
};

export default function BrandsPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Marcas De Maquinaria</h1>
          <p className="text-warm-400 text-lg max-w-2xl">
            Trabajamos con las mejores marcas de maquinaria agrícola del mundo. Encuentra la marca que buscas.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-2">Nuestras Marcas Disponibles</h2>
          <p className="text-warm-500 mb-8">
            Ofrecemos maquinaria de las marcas más confiables del sector. Cada marca ha sido seleccionada por su calidad, fiabilidad y soporte técnico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-2xl border border-warm-200 p-8 hover:border-accent hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 bg-warm-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Tractor size={32} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{brand}</h3>
                <p className="text-sm text-warm-500">Maquinaria de calidad profesional</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-warm-200 pt-16">
          <h2 className="text-2xl font-bold text-primary mb-2">Información Sobre Las Marcas</h2>
          <p className="text-warm-500 mb-8 max-w-3xl">
            Todas nuestras marcas cuentan con:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Garantía Completa",
                description: "Todas las máquinas incluyen garantía y soporte técnico disponible."
              },
              {
                title: "Recambios Originales",
                description: "Tenemos acceso a recambios originales de todas las marcas."
              },
              {
                title: "Financiación",
                description: "Disponemos de opciones de financiación flexible para todas las marcas."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-warm-50 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-warm-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
