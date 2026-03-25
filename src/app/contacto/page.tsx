import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto",
  description: "Contacta con Agromaquina. Te asesoramos sin compromiso sobre maquinaria agrícola. Venta y alquiler en toda España.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Contacto", url: "/contacto" },
      ])} />
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
            Contacta con nosotros
          </h1>
          <p className="text-warm-400 text-lg max-w-2xl">
            ¿Necesitas asesoramiento? ¿Quieres un presupuesto? Estamos aquí para ayudarte.
            Cuéntanos qué necesitas y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick contact */}
            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6 font-[family-name:var(--font-display)]">
                Contacto Directo
              </h3>
              <div className="space-y-5">
                <a href="tel:+34602441151" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-warm-400">Teléfono</div>
                    <div className="font-semibold group-hover:text-accent transition-colors">+34 602 441 151</div>
                    <div className="text-xs text-warm-400">Albert</div>
                  </div>
                </a>
                <a href="mailto:info@agromaquina.net" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-warm-400">Email</div>
                    <div className="font-semibold group-hover:text-accent transition-colors">info@agromaquina.net</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-warm-400">Dirección</div>
                    <div className="font-semibold">Vilafranca del Penedès</div>
                    <div className="text-sm text-warm-400">Catalunya, España</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-warm-400">Horario</div>
                    <div className="font-semibold">Lun - Vie: 8:00 - 15:00</div>
                    <div className="text-xs text-warm-400">Consulta disponibilidad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#25D366] text-white rounded-2xl p-6 text-center">
              <MessageCircle size={32} className="mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">¿Prefieres WhatsApp?</h3>
              <p className="text-white/80 text-sm mb-4">
                Escríbenos por WhatsApp y te responderemos al momento.
              </p>
              <a
                href="https://wa.me/34602441151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#25D366] font-semibold px-6 py-3 rounded-xl hover:bg-warm-50 transition-colors text-sm"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div className="bg-warm-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-warm-400 mx-auto mb-2" />
                <span className="text-sm text-warm-500">Mapa interactivo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
