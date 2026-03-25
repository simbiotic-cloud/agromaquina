import { Tractor, Target, Heart, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Sobre Nosotros",
  description: "Conoce AgroMàquina. Más de 15 años de experiencia en venta y alquiler de maquinaria agrícola en Lleida y toda España.",
  alternates: { canonical: "/sobre-nosotros" },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Sobre Nosotros", url: "/sobre-nosotros" },
      ])} />
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
              Más de 15 años
              <span className="text-accent"> al lado del campo</span>
            </h1>
            <p className="text-warm-400 text-lg leading-relaxed">
              Somos un equipo apasionado por la maquinaria agrícola. Desde Lleida, ayudamos a agricultores
              y profesionales de toda España a encontrar las mejores máquinas para sus explotaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6 font-[family-name:var(--font-display)]">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-warm-600 leading-relaxed">
              <p>
                AgroMàquina nació en la comarca del Segrià con una idea clara: acercar la mejor
                maquinaria agrícola a los profesionales del campo con un servicio honesto, cercano y profesional.
              </p>
              <p>
                Lo que empezó como un pequeño taller de reparación se ha convertido en uno de los
                referentes del sector en Cataluña. Hoy contamos con un equipo de más de 20 profesionales,
                un almacén de más de 3.000 m² y presencia en todo el territorio nacional.
              </p>
              <p>
                Nuestra filosofía no ha cambiado: asesoramiento personalizado, precios justos y un
                servicio postventa que nos diferencia de la competencia.
              </p>
            </div>
          </div>
          <div className="aspect-square bg-warm-200 rounded-2xl flex items-center justify-center">
            <Tractor size={100} className="text-warm-300" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12 font-[family-name:var(--font-display)]">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Profesionalidad",
                text: "Conocemos cada máquina que vendemos. Te asesoramos con criterio técnico real.",
              },
              {
                icon: Heart,
                title: "Cercanía",
                text: "Tratamos a cada cliente como único. Tu proyecto es nuestro proyecto.",
              },
              {
                icon: Users,
                title: "Confianza",
                text: "Más de 2.000 clientes satisfechos avalan nuestra trayectoria.",
              },
              {
                icon: Award,
                title: "Calidad",
                text: "Solo trabajamos con las mejores marcas y garantizamos cada operación.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-warm-200">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{title}</h3>
                <p className="text-sm text-warm-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "15+", label: "Años de experiencia" },
            { value: "2.000+", label: "Clientes satisfechos" },
            { value: "500+", label: "Máquinas en catálogo" },
            { value: "50+", label: "Marcas disponibles" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-[family-name:var(--font-display)]">{value}</div>
              <div className="text-sm text-warm-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-display)]">
                ¿Por qué elegir AgroMàquina?
              </h2>
              <ul className="space-y-4">
                {[
                  "Asesoramiento técnico personalizado sin compromiso",
                  "Garantía en todas nuestras máquinas",
                  "Servicio técnico propio con piezas originales",
                  "Financiación flexible adaptada a cada cliente",
                  "Envío a toda España en 24-72 horas",
                  "Opción de alquiler por días, semanas o meses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-warm-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] bg-warm-800 rounded-2xl flex items-center justify-center">
              <Tractor size={80} className="text-warm-600" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Visítanos en nuestras instalaciones o contacta con nosotros. Estaremos encantados de ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-warm-50 transition-colors"
          >
            Contacta con nosotros <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
