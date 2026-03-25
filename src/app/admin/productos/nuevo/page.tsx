import Link from "next/link";
import { ArrowLeft, Upload, Tractor, Plus, X, Save, Eye } from "lucide-react";
import { categories, brands } from "@/lib/data";

export default function NuevoProductoPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/productos"
            className="p-2 text-warm-400 hover:text-primary hover:bg-white rounded-xl transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
              Nuevo Producto
            </h1>
            <p className="text-sm text-warm-500">Añade una nueva máquina al catálogo</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 rounded-xl text-sm text-warm-600 hover:border-accent transition-colors">
            <Eye size={16} /> Vista Previa
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors">
            <Save size={16} /> Guardar Producto
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic info */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Información Básica</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Nombre del producto *</label>
                <input
                  type="text"
                  className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  placeholder="Ej: John Deere 6130R"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">Marca *</label>
                  <select className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent">
                    <option value="">Seleccionar marca</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">Categoría *</label>
                  <select className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent">
                    <option value="">Seleccionar categoría</option>
                    {categories.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Descripción *</label>
                <textarea
                  rows={4}
                  className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                  placeholder="Describe la máquina, sus características principales y estado..."
                />
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Imágenes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[1, 2].map((i) => (
                <div key={i} className="relative aspect-square bg-warm-100 rounded-xl flex items-center justify-center group">
                  <Tractor size={24} className="text-warm-300" />
                  <button className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <X size={12} />
                  </button>
                  {i === 1 && (
                    <span className="absolute bottom-2 left-2 text-[10px] bg-accent text-white px-2 py-0.5 rounded-full">
                      Principal
                    </span>
                  )}
                </div>
              ))}
              <label className="aspect-square border-2 border-dashed border-warm-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors">
                <Upload size={20} className="text-warm-400 mb-1" />
                <span className="text-xs text-warm-400">Subir</span>
                <input type="file" className="hidden" multiple accept="image/*" />
              </label>
            </div>
            <p className="text-xs text-warm-400">Formatos: JPG, PNG, WebP. Máximo 5 MB por imagen. Primera imagen = imagen principal.</p>
          </div>

          {/* Specs */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-primary">Especificaciones Técnicas</h2>
              <button className="flex items-center gap-1 text-sm text-accent font-medium hover:underline">
                <Plus size={14} /> Añadir campo
              </button>
            </div>
            <div className="space-y-3">
              {["Potencia", "Motor", "Transmisión", "Peso"].map((spec) => (
                <div key={spec} className="grid grid-cols-5 gap-3">
                  <input
                    type="text"
                    defaultValue={spec}
                    className="col-span-2 bg-warm-50 border border-warm-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
                  />
                  <input
                    type="text"
                    placeholder="Valor"
                    className="col-span-2 bg-warm-50 border border-warm-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
                  />
                  <button className="flex items-center justify-center text-warm-400 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Estado</h2>
            <select className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent">
              <option value="borrador">Borrador</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Precios</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Precio de venta (€) *</label>
                <input
                  type="number"
                  className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Precio de alquiler (€/día)</label>
                <input
                  type="number"
                  className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  placeholder="Dejar vacío si no disponible"
                />
              </div>
            </div>
          </div>

          {/* Condition & availability */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Detalles</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Condición *</label>
                <div className="flex gap-2">
                  <label className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 border-2 border-accent bg-accent/5 text-accent rounded-xl text-sm font-medium cursor-pointer">
                    <input type="radio" name="condition" value="nueva" className="hidden" defaultChecked />
                    Nueva
                  </label>
                  <label className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 border-2 border-warm-200 text-warm-500 rounded-xl text-sm font-medium cursor-pointer hover:border-warm-300">
                    <input type="radio" name="condition" value="segunda-mano" className="hidden" />
                    2ª Mano
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Disponibilidad</label>
                <select className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent">
                  <option value="venta">Solo venta</option>
                  <option value="alquiler">Solo alquiler</option>
                  <option value="venta-alquiler">Venta y alquiler</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Stock</label>
                <input
                  type="number"
                  defaultValue={1}
                  min={0}
                  className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Año (segunda mano)</label>
                <input
                  type="number"
                  className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  placeholder="Ej: 2020"
                />
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">SEO</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Slug URL</label>
                <input
                  type="text"
                  className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  placeholder="Se genera automáticamente"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">Meta descripción</label>
                <textarea
                  rows={3}
                  className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                  placeholder="Descripción para motores de búsqueda (max 160 chars)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Trash2(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
  );
}
