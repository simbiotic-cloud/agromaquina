import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Award, Users, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Agromaquina",
  description: "Conoce Agromaquina: Comercialización de maquinaria agrícola de calidad desde 2010.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=800&fit=crop"
            alt="Equipo de profesionales agrícolas"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
              Sobre Agromaquina
            </h1>
            <p className="text-xl text-warm-200">
              Más de 15 años conectando agricultores con la maquinaria que necesitan para prosperar.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-display)]">
              Nuestra Misión
            </h2>
            <p className="text-warm-600 mb-4 leading-relaxed">
              En Agromaquina nos dedicamos a la <strong>comercialización de maquinaria agrícola</strong> de calidad. Nuestro objetivo es simplificar el proceso de compra y alquiler de equipos agrícolas, brindando a nuestros clientes acceso a las mejores marcas y modelos del mercado.
            </p>
            <p className="text-warm-600 mb-4 leading-relaxed">
              No reparamos máquinas, nos especializamos en venderlas y alquilarlas. Nuestro equipo de profesionales cuenta con profundos conocimientos sobre maquinaria agrícola y está listo para asesorarte en la mejor opción según tus necesidades específicas.
            </p>
            <p className="text-warm-600 leading-relaxed">
              Cada transacción con nosotros es una oportunidad para establecer una relación de confianza y largo plazo basada en la calidad, la transparencia y el servicio personalizado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Equipo profesional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Servicio personalizado"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Asesoramiento"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Confianza"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="bg-warm-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center font-[family-name:var(--font-display)]">
            Nuestros Valores
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Compromiso",
                description: "Nos comprometemos con la satisfacción de cada cliente.",
              },
              {
                icon: Award,
                title: "Excelencia",
                description: "Ofrecemos los mejores productos y servicios.",
              },
              {
                icon: Users,
                title: "Confianza",
                description: "Transparencia y honestidad en cada interacción.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <value.icon size={40} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-warm-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-accent to-secondary rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-display)]">
            ¿Listo para encontrar tu máquina?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contacta con Albert. Estamos listos para ayudarte a encontrar la solución perfecta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-accent hover:bg-warm-100 font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
            >
              Contacta con Nosotros <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/34602441151"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2 border border-white/30"
            >
              WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
