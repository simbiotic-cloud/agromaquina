import Link from "next/link";
import { Plus, Search, Edit, Trash2, Eye, Tractor, MoreHorizontal } from "lucide-react";

const posts = [
  { id: 1, title: "Comparativa: Los 5 Mejores Tractores Compactos de 2026", category: "Comparativa", status: "Publicado", author: "Admin", date: "20/03/2026", views: 1240 },
  { id: 2, title: "Guía Completa: Mantenimiento de tu Cosechadora", category: "Guía", status: "Publicado", author: "Admin", date: "15/03/2026", views: 890 },
  { id: 3, title: "Reseña: John Deere 6130R", category: "Reseña", status: "Publicado", author: "Admin", date: "10/03/2026", views: 654 },
  { id: 4, title: "¿Comprar o Alquilar Maquinaria Agrícola?", category: "Guía", status: "Publicado", author: "Admin", date: "05/03/2026", views: 1567 },
  { id: 5, title: "Novedades FIMA 2026: Lo Mejor de la Feria", category: "Noticia", status: "Borrador", author: "Admin", date: "—", views: 0 },
  { id: 6, title: "Comparativa de Sembradoras de Precisión", category: "Comparativa", status: "Borrador", author: "Admin", date: "—", views: 0 },
];

const categoryColors: Record<string, string> = {
  "Comparativa": "bg-accent/10 text-accent",
  "Reseña": "bg-secondary/10 text-secondary",
  "Guía": "bg-earth/10 text-earth",
  "Noticia": "bg-blue-500/10 text-blue-500",
};

export default function BlogAdminPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">Blog</h1>
          <p className="text-sm text-warm-500">Gestiona artículos, comparativas y reseñas</p>
        </div>
        <Link
          href="/admin/blog/nuevo"
          className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors"
        >
          <Plus size={16} /> Nuevo Artículo
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Publicados", value: "24" },
          { label: "Borradores", value: "5" },
          { label: "Visitas totales", value: "18.4K" },
          { label: "Visitas/mes", value: "4.351" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl border border-warm-200 px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-warm-500">{label}</span>
            <span className="text-lg font-bold text-primary">{value}</span>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-warm-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
            <input type="text" placeholder="Buscar artículos..." className="w-full pl-9 pr-4 py-2.5 bg-warm-50 border border-warm-200 rounded-xl text-sm focus:outline-none focus:border-accent" />
          </div>
          <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
            <option>Todas las categorías</option>
            <option>Comparativas</option>
            <option>Reseñas</option>
            <option>Guías</option>
            <option>Noticias</option>
          </select>
          <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
            <option>Todos los estados</option>
            <option>Publicados</option>
            <option>Borradores</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-warm-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-warm-500 uppercase tracking-wider border-b border-warm-200 bg-warm-50">
                <th className="text-left px-5 py-3 font-medium"><input type="checkbox" className="rounded accent-accent" /></th>
                <th className="text-left px-5 py-3 font-medium">Artículo</th>
                <th className="text-left px-5 py-3 font-medium">Categoría</th>
                <th className="text-left px-5 py-3 font-medium">Estado</th>
                <th className="text-left px-5 py-3 font-medium">Fecha</th>
                <th className="text-left px-5 py-3 font-medium">Visitas</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-warm-100 hover:bg-warm-50 transition-colors">
                  <td className="px-5 py-4"><input type="checkbox" className="rounded accent-accent" /></td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-9 bg-warm-200 rounded-lg flex items-center justify-center shrink-0">
                        <Tractor size={14} className="text-warm-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary max-w-md truncate">{post.title}</div>
                        <div className="text-xs text-warm-400">por {post.author}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      post.status === "Publicado" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-warm-500">{post.date}</td>
                  <td className="px-5 py-4 text-sm text-warm-500 flex items-center gap-1"><Eye size={12} /> {post.views}</td>
                  <td className="px-5 py-4">
                    <div className="flex gap-1">
                      <button className="p-1.5 text-warm-400 hover:text-accent rounded-lg hover:bg-warm-100"><Edit size={15} /></button>
                      <button className="p-1.5 text-warm-400 hover:text-red-500 rounded-lg hover:bg-red-50"><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
