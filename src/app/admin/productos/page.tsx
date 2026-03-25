import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Tractor,
  Download,
  ArrowUpDown,
} from "lucide-react";

const products = [
  { id: 1, name: "John Deere 6130R", category: "Tractores", brand: "John Deere", price: 95000, rentalPrice: 450, condition: "Nueva", status: "Activo", stock: 2, views: 342 },
  { id: 2, name: "CLAAS Lexion 770", category: "Cosechadoras", brand: "CLAAS", price: 42000, rentalPrice: null, condition: "2ª Mano", status: "Activo", stock: 1, views: 287 },
  { id: 3, name: "Kuhn BKR 280", category: "Desbrozadoras", brand: "Kuhn", price: 4800, rentalPrice: 85, condition: "Nueva", status: "Activo", stock: 5, views: 256 },
  { id: 4, name: "Amazone Cataya 3000", category: "Sembradoras", brand: "Amazone", price: 18500, rentalPrice: null, condition: "Nueva", status: "Activo", stock: 3, views: 198 },
  { id: 5, name: "New Holland T5.120", category: "Tractores", brand: "New Holland", price: 68000, rentalPrice: 380, condition: "Nueva", status: "Borrador", stock: 1, views: 0 },
  { id: 6, name: "Fendt 724 Vario", category: "Tractores", brand: "Fendt", price: 55000, rentalPrice: null, condition: "2ª Mano", status: "Activo", stock: 1, views: 189 },
  { id: 7, name: "Massey Ferguson 7719S", category: "Tractores", brand: "Massey Ferguson", price: 82000, rentalPrice: 420, condition: "Nueva", status: "Activo", stock: 2, views: 156 },
  { id: 8, name: "Lemken Juwel 8", category: "Arados y Aperos", brand: "Lemken", price: 12500, rentalPrice: 95, condition: "Nueva", status: "Inactivo", stock: 0, views: 89 },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);
}

export default function ProductosPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
            Productos
          </h1>
          <p className="text-sm text-warm-500">Gestiona tu catálogo de maquinaria</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 rounded-xl text-sm text-warm-600 hover:border-accent transition-colors">
            <Download size={16} /> Exportar
          </button>
          <Link
            href="/admin/productos/nuevo"
            className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            <Plus size={16} /> Nuevo Producto
          </Link>
        </div>
      </div>

      {/* Filters bar */}
      <div className="bg-white rounded-2xl border border-warm-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, marca, categoría..."
              className="w-full pl-9 pr-4 py-2.5 bg-warm-50 border border-warm-200 rounded-xl text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
              <option>Todas las categorías</option>
              <option>Tractores</option>
              <option>Cosechadoras</option>
              <option>Desbrozadoras</option>
              <option>Sembradoras</option>
              <option>Arados y Aperos</option>
            </select>
            <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
              <option>Todo estado</option>
              <option>Nueva</option>
              <option>2ª Mano</option>
            </select>
            <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
              <option>Todos los estados</option>
              <option>Activo</option>
              <option>Borrador</option>
              <option>Inactivo</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats mini */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total productos", value: "465", color: "text-primary" },
          { label: "Activos", value: "421", color: "text-green-600" },
          { label: "Borradores", value: "28", color: "text-amber-600" },
          { label: "Inactivos", value: "16", color: "text-warm-400" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-xl border border-warm-200 px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-warm-500">{label}</span>
            <span className={`text-lg font-bold ${color}`}>{value}</span>
          </div>
        ))}
      </div>

      {/* Products table */}
      <div className="bg-white rounded-2xl border border-warm-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-warm-500 uppercase tracking-wider border-b border-warm-200 bg-warm-50">
                <th className="text-left px-4 py-3 font-medium">
                  <input type="checkbox" className="rounded accent-accent" />
                </th>
                <th className="text-left px-4 py-3 font-medium">Producto</th>
                <th className="text-left px-4 py-3 font-medium">
                  <button className="flex items-center gap-1">Categoría <ArrowUpDown size={12} /></button>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <button className="flex items-center gap-1">Precio <ArrowUpDown size={12} /></button>
                </th>
                <th className="text-left px-4 py-3 font-medium">Alquiler</th>
                <th className="text-left px-4 py-3 font-medium">Estado</th>
                <th className="text-left px-4 py-3 font-medium">Condición</th>
                <th className="text-left px-4 py-3 font-medium">Stock</th>
                <th className="text-left px-4 py-3 font-medium">Visitas</th>
                <th className="px-4 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-warm-100 hover:bg-warm-50 transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded accent-accent" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-warm-200 rounded-lg flex items-center justify-center shrink-0">
                        <Tractor size={16} className="text-warm-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">{product.name}</div>
                        <div className="text-xs text-warm-400">{product.brand}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-warm-600">{product.category}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-primary">{formatPrice(product.price)}</td>
                  <td className="px-4 py-3 text-sm text-warm-500">
                    {product.rentalPrice ? `${formatPrice(product.rentalPrice)}/día` : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      product.status === "Activo" ? "bg-green-100 text-green-700" :
                      product.status === "Borrador" ? "bg-amber-100 text-amber-700" :
                      "bg-warm-200 text-warm-500"
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      product.condition === "Nueva" ? "bg-accent/10 text-accent" : "bg-earth/10 text-earth"
                    }`}>
                      {product.condition}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-primary font-medium">{product.stock}</td>
                  <td className="px-4 py-3 text-sm text-warm-500 flex items-center gap-1">
                    <Eye size={12} /> {product.views}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 justify-center">
                      <button className="p-1.5 text-warm-400 hover:text-accent rounded-lg hover:bg-warm-100 transition-colors" title="Editar">
                        <Edit size={15} />
                      </button>
                      <button className="p-1.5 text-warm-400 hover:text-primary rounded-lg hover:bg-warm-100 transition-colors" title="Ver">
                        <Eye size={15} />
                      </button>
                      <button className="p-1.5 text-warm-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors" title="Eliminar">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-warm-200">
          <span className="text-sm text-warm-500">Mostrando 1-8 de 465 productos</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 text-sm bg-accent text-white rounded-lg">1</button>
            <button className="px-3 py-1.5 text-sm text-warm-500 hover:bg-warm-100 rounded-lg">2</button>
            <button className="px-3 py-1.5 text-sm text-warm-500 hover:bg-warm-100 rounded-lg">3</button>
            <span className="px-2 py-1.5 text-sm text-warm-400">...</span>
            <button className="px-3 py-1.5 text-sm text-warm-500 hover:bg-warm-100 rounded-lg">59</button>
          </div>
        </div>
      </div>
    </>
  );
}
