import Link from "next/link";
import { Search, Filter, Download, Eye, MoreHorizontal, ChevronRight } from "lucide-react";

const orders = [
  { id: "AGM-2026-0087", client: "Joan Martínez", email: "joan@email.com", product: "John Deere 6130R", total: "95.000 €", type: "Venta", status: "Completado", payment: "Transferencia", date: "25/03/2026" },
  { id: "AGM-2026-0086", client: "Maria López", email: "maria@email.com", product: "Kuhn BKR 280", total: "850 €", type: "Alquiler", status: "En curso", payment: "Tarjeta", date: "24/03/2026" },
  { id: "AGM-2026-0085", client: "Pere Soler", email: "pere@email.com", product: "CLAAS Lexion 770", total: "42.000 €", type: "Venta", status: "Pendiente pago", payment: "Financiación", date: "24/03/2026" },
  { id: "AGM-2026-0084", client: "Anna Puig", email: "anna@email.com", product: "Amazone Cataya 3000", total: "18.500 €", type: "Venta", status: "Enviado", payment: "Transferencia", date: "23/03/2026" },
  { id: "AGM-2026-0083", client: "Carles Font", email: "carles@email.com", product: "Desbrozadora Kuhn", total: "1.200 €", type: "Alquiler", status: "En curso", payment: "Tarjeta", date: "22/03/2026" },
  { id: "AGM-2026-0082", client: "Marta Vidal", email: "marta@email.com", product: "Massey Ferguson 7719S", total: "82.000 €", type: "Venta", status: "Completado", payment: "Financiación", date: "21/03/2026" },
  { id: "AGM-2026-0081", client: "Jordi Pla", email: "jordi@email.com", product: "New Holland T5.120", total: "3.800 €", type: "Alquiler", status: "Completado", payment: "Tarjeta", date: "20/03/2026" },
  { id: "AGM-2026-0080", client: "Laura Camps", email: "laura@email.com", product: "Fendt 724 Vario", total: "55.000 €", type: "Venta", status: "Cancelado", payment: "—", date: "19/03/2026" },
];

const statusColors: Record<string, string> = {
  "Completado": "bg-green-100 text-green-700",
  "En curso": "bg-blue-100 text-blue-700",
  "Pendiente pago": "bg-amber-100 text-amber-700",
  "Enviado": "bg-purple-100 text-purple-700",
  "Cancelado": "bg-red-100 text-red-700",
};

export default function PedidosPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">Pedidos</h1>
          <p className="text-sm text-warm-500">Gestiona ventas y alquileres</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 rounded-xl text-sm text-warm-600 hover:border-accent transition-colors">
          <Download size={16} /> Exportar
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        {[
          { label: "Total", value: "156", active: true },
          { label: "Completados", value: "98" },
          { label: "En curso", value: "12" },
          { label: "Pendientes", value: "8" },
          { label: "Cancelados", value: "3" },
        ].map(({ label, value, active }) => (
          <button
            key={label}
            className={`px-4 py-3 rounded-xl text-left transition-colors ${
              active ? "bg-accent text-white" : "bg-white border border-warm-200 hover:border-accent/30"
            }`}
          >
            <div className={`text-xl font-bold ${active ? "" : "text-primary"}`}>{value}</div>
            <div className={`text-xs ${active ? "text-white/70" : "text-warm-500"}`}>{label}</div>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-warm-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
            <input
              type="text"
              placeholder="Buscar por ID, cliente, producto..."
              className="w-full pl-9 pr-4 py-2.5 bg-warm-50 border border-warm-200 rounded-xl text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
            <option>Todos los tipos</option>
            <option>Ventas</option>
            <option>Alquileres</option>
          </select>
          <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
            <option>Todo el periodo</option>
            <option>Hoy</option>
            <option>Esta semana</option>
            <option>Este mes</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-warm-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-warm-500 uppercase tracking-wider border-b border-warm-200 bg-warm-50">
                <th className="text-left px-5 py-3 font-medium">Pedido</th>
                <th className="text-left px-5 py-3 font-medium">Cliente</th>
                <th className="text-left px-5 py-3 font-medium">Producto</th>
                <th className="text-left px-5 py-3 font-medium">Total</th>
                <th className="text-left px-5 py-3 font-medium">Tipo</th>
                <th className="text-left px-5 py-3 font-medium">Pago</th>
                <th className="text-left px-5 py-3 font-medium">Estado</th>
                <th className="text-left px-5 py-3 font-medium">Fecha</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-warm-100 hover:bg-warm-50 transition-colors">
                  <td className="px-5 py-4">
                    <Link href={`/admin/pedidos/${order.id}`} className="text-sm font-medium text-accent hover:underline">
                      {order.id}
                    </Link>
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-sm font-medium text-primary">{order.client}</div>
                    <div className="text-xs text-warm-400">{order.email}</div>
                  </td>
                  <td className="px-5 py-4 text-sm text-warm-600">{order.product}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-primary">{order.total}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      order.type === "Alquiler" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent"
                    }`}>{order.type}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-warm-500">{order.payment}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-warm-500">{order.date}</td>
                  <td className="px-5 py-4">
                    <Link href={`/admin/pedidos/${order.id}`} className="p-1 text-warm-400 hover:text-accent">
                      <ChevronRight size={16} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-warm-200">
          <span className="text-sm text-warm-500">Mostrando 1-8 de 156 pedidos</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 text-sm bg-accent text-white rounded-lg">1</button>
            <button className="px-3 py-1.5 text-sm text-warm-500 hover:bg-warm-100 rounded-lg">2</button>
            <button className="px-3 py-1.5 text-sm text-warm-500 hover:bg-warm-100 rounded-lg">3</button>
          </div>
        </div>
      </div>
    </>
  );
}
