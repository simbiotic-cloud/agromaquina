import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  title: string;
  image: string;
  readTime: number;
  author: string;
  date: string;
  children: ReactNode;
  hubTitle?: string;
  hubSlug?: string;
  prevArticle?: { slug: string; title: string };
  nextArticle?: { slug: string; title: string };
}

export default function ClusterArticle({
  title,
  image,
  readTime,
  author,
  date,
  children,
  hubTitle = "Guía de Compra de Aperos Agrícolas",
  hubSlug = "guia-compra-aperos-agricolas",
  prevArticle,
  nextArticle,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-14 lg:py-20 w-full">
          <Link
            href={`/blog/${hubSlug}`}
            className="inline-flex items-center gap-2 text-accent-light text-sm font-medium mb-4 hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} /> {hubTitle}
          </Link>
          <h1 className="text-[clamp(1.8rem,4.5vw,3rem)] font-[900] text-white leading-[1.1] mb-4 font-[family-name:var(--font-display)]">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-warm-400">
            <span className="flex items-center gap-1"><Clock size={14} /> {readTime} min lectura</span>
            <span>Por {author}</span>
            <span>{new Date(date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-warm-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-warm-500 flex-wrap">
          <Link href="/" className="hover:text-accent">Inicio</Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <ChevronRight size={14} />
          <Link href={`/blog/${hubSlug}`} className="hover:text-accent">Guía de Aperos</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-medium truncate">{title}</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        {children}

        {/* Back to hub */}
        <div className="mt-16 p-6 bg-warm-50 rounded-2xl border border-warm-200 text-center">
          <BookOpen size={24} className="text-accent mx-auto mb-3" />
          <p className="text-sm text-warm-500 mb-2">Este artículo forma parte de</p>
          <Link
            href={`/blog/${hubSlug}`}
            className="text-lg font-bold text-primary hover:text-accent transition-colors"
          >
            {hubTitle}
          </Link>
          <p className="text-xs text-warm-400 mt-2">La guía completa para comprar y mantener aperos agrícolas</p>
        </div>

        {/* Prev / Next navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {prevArticle ? (
            <Link href={`/blog/${prevArticle.slug}`} className="flex-1 flex items-center gap-3 p-4 bg-white border border-warm-200 rounded-xl hover:border-accent/30 transition-colors group">
              <ArrowLeft size={16} className="text-warm-400 group-hover:text-accent shrink-0" />
              <div className="text-left">
                <p className="text-xs text-warm-400">Anterior</p>
                <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">{prevArticle.title}</p>
              </div>
            </Link>
          ) : <div className="flex-1" />}
          {nextArticle ? (
            <Link href={`/blog/${nextArticle.slug}`} className="flex-1 flex items-center gap-3 p-4 bg-white border border-warm-200 rounded-xl hover:border-accent/30 transition-colors group justify-end">
              <div className="text-right">
                <p className="text-xs text-warm-400">Siguiente</p>
                <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">{nextArticle.title}</p>
              </div>
              <ArrowRight size={16} className="text-warm-400 group-hover:text-accent shrink-0" />
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
            ¿Necesitas ayuda con tus aperos?
          </h2>
          <p className="text-white/80 mb-6">Te asesoramos sin compromiso. Venta y alquiler de aperos.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-warm-50 transition-colors">
            Contactar <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
