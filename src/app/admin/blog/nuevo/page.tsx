import Link from "next/link";
import { ArrowLeft, Save, Eye, Upload, Bold, Italic, LinkIcon, List, Image, Heading } from "lucide-react";

export default function NuevoArticuloPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/blog" className="p-2 text-warm-400 hover:text-primary hover:bg-white rounded-xl transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">Nuevo Artículo</h1>
            <p className="text-sm text-warm-500">Crea una comparativa, reseña o guía</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 rounded-xl text-sm text-warm-600 hover:border-accent transition-colors">
            <Eye size={16} /> Vista Previa
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 rounded-xl text-sm text-warm-600 hover:border-accent transition-colors">
            Guardar Borrador
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors">
            <Save size={16} /> Publicar
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <input
              type="text"
              placeholder="Título del artículo"
              className="w-full text-2xl font-bold text-primary placeholder:text-warm-300 focus:outline-none font-[family-name:var(--font-display)]"
            />
          </div>

          {/* Featured image */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Imagen destacada</h2>
            <label className="flex flex-col items-center justify-center aspect-[16/7] border-2 border-dashed border-warm-300 rounded-xl cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors">
              <Upload size={32} className="text-warm-400 mb-2" />
              <span className="text-sm text-warm-400">Arrastra una imagen o haz clic para subir</span>
              <span className="text-xs text-warm-300 mt-1">Recomendado: 1200x630px</span>
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>

          {/* Editor */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Contenido</h2>
            {/* Toolbar */}
            <div className="flex items-center gap-1 pb-3 mb-3 border-b border-warm-200 flex-wrap">
              {[
                { icon: Heading, label: "Título" },
                { icon: Bold, label: "Negrita" },
                { icon: Italic, label: "Cursiva" },
                { icon: LinkIcon, label: "Enlace" },
                { icon: List, label: "Lista" },
                { icon: Image, label: "Imagen" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="p-2 text-warm-500 hover:text-primary hover:bg-warm-100 rounded-lg transition-colors"
                  title={label}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
            <textarea
              rows={20}
              placeholder="Escribe el contenido del artículo aquí..."
              className="w-full text-sm text-warm-700 leading-relaxed focus:outline-none resize-none"
            />
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Extracto</h2>
            <textarea
              rows={3}
              placeholder="Breve resumen del artículo (se muestra en listados y SEO)..."
              className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Categoría</h2>
            <select className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent">
              <option value="">Seleccionar</option>
              <option value="comparativa">Comparativa</option>
              <option value="ressenya">Reseña</option>
              <option value="guia">Guía</option>
              <option value="noticia">Noticia</option>
            </select>
          </div>

          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Etiquetas</h2>
            <input
              type="text"
              placeholder="Añadir etiqueta y pulsar Enter"
              className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent mb-3"
            />
            <div className="flex flex-wrap gap-1.5">
              {["tractores", "comparativa", "2026"].map((tag) => (
                <span key={tag} className="text-xs bg-warm-100 text-warm-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                  #{tag}
                  <button className="text-warm-400 hover:text-red-500">&times;</button>
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">SEO</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Slug URL</label>
                <input type="text" placeholder="se-genera-automaticamente" className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Meta descripción</label>
                <textarea rows={3} placeholder="Max 160 caracteres" className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Autor</h2>
            <select className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent">
              <option>Equipo Agromaquina</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
