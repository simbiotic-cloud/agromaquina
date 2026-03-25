import Link from "next/link";
import { Tractor, Mail, Phone, MapPin, Star } from "lucide-react";
import { categories } from "@/lib/data";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-primary text-warm-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <Tractor size={22} className="text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Agromaquina</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Tu referente en maquinaria agrícola. Venta, alquiler y asesoramiento
              profesional para el campo.
            </p>
            {/* Google rating */}
            <div className="flex items-center gap-2 mb-6 bg-white/5 px-3 py-2 rounded-lg w-fit">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className={i <= 4 ? "text-[#fbbf24] fill-[#fbbf24]" : "text-[#fbbf24]/60 fill-[#fbbf24]/60"} />
                ))}
              </div>
              <span className="text-xs text-warm-300"><strong className="text-white">4,8</strong>/5 en Google</span>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+34602441151" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={14} /> +34 602 441 151
              </a>
              <a href="mailto:info@agromaquina.net" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={14} /> info@agromaquina.net
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Vilafranca del Penedès, Catalunya
              </span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Maquinaria</h4>
            <ul className="space-y-2">
              {categories.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/maquinaria/${cat.slug}`}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/maquinaria" className="text-sm text-accent hover:text-accent-light transition-colors font-medium">
                  Ver todo &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Recursos</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/blog?cat=comparativa" className="text-sm hover:text-accent transition-colors">Comparativas</Link></li>
              <li><Link href="/blog?cat=ressenya" className="text-sm hover:text-accent transition-colors">Reseñas</Link></li>
              <li><Link href="/blog?cat=guia" className="text-sm hover:text-accent transition-colors">Guías</Link></li>
              <li><Link href="/sobre-nosotros" className="text-sm hover:text-accent transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-sm hover:text-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">
              Recibe las últimas novedades, ofertas y artículos directamente en tu correo.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-warm-500">
          <span>&copy; {new Date().getFullYear()} Agromaquina. Tots els drets reservats.</span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">Aviso Legal</Link>
            <Link href="#" className="hover:text-accent transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-accent transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
