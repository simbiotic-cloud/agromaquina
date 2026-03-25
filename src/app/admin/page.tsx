import {
  DollarSign,
  ShoppingCart,
  Users,
  CalendarClock,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Package,
  Eye,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Ventas este mes",
    value: "47.850 €",
    change: "+12,3%",
    trend: "up" as const,
    icon: DollarSign,
    color: "bg-accent/10 text-accent",
  },
  {
    label: "Pedidos",
    value: "23",
    change: "+8,1%",
    trend: "up" as const,
    icon: ShoppingCart,
    color: "bg-secondary/10 text-secondary",
  },
  {
    label: "Usuarios registrados",
    value: "1.284",
    change: "+3,2%",
    trend: "up" as const,
    icon: Users,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    label: "Alquileres activos",
    value: "7",
    change: "-1",
    trend: "down" as const,
    icon: CalendarClock,
    color: "bg-amber-500/10 text-amber-500",
  },
];

const recentOrders = [
  { id: "AGM-2026-0087", client: "Joan Martínez", product: "John Deere 6130R", total: "95.000 €", type: "Venta", status: "Completado", date: "25/03/2026" },
  { id: "AGM-2026-0086", client: "Maria López", product: "Kuhn BKR 280", total: "85 €/día", type: "Alquiler", status: "En curso", date: "24/03/2026" },
  { id: "AGM-2026-0085", client: "Pere Soler", product: "CLAAS Lexion 770", total: "42.000 €", type: "Venta", status: "Pendiente", date: "24/03/2026" },
  { id: "AGM-2026-0084", client: "Anna Puig", product: "Amazone Cataya 3000", total: "18.500 €", type: "Venta", status: "Enviado", date: "23/03/2026" },
  { id: "AGM-2026-0083", client: "Carles Font", product: "Desbrozadora Kuhn", total: "120 €/día", type: "Alquiler", status: "En curso", date: "22/03/2026" },
];

const statusColors: Record<string, string> = {
  "Completado": "bg-green-100 text-green-700",
  "En curso": "bg-blue-100 text-blue-700",
  "Pendiente": "bg-amber-100 text-amber-700",
  "Enviado": "bg-purple-100 text-purple-700",
  "Cancelado": "bg-red-100 text-red-700",
};

const recentMessages = [
  { name: "Francesc Riera", subject: "Presupuesto tractor 80CV", time: "Hace 2h", unread: true },
  { name: "Laura Camps", subject: "Consulta alquiler cosechadora", time: "Hace 5h", unread: true },
  { name: "Jordi Pla", subject: "Servicio técnico Kuhn", time: "Ayer", unread: false },
];

const topProducts = [
  { name: "John Deere 6130R", views: 342, inquiries: 18, sales: 3 },
  { name: "CLAAS Lexion 770", views: 287, inquiries: 14, sales: 1 },
  { name: "Kuhn BKR 280", views: 256, inquiries: 22, sales: 5 },
  { name: "Amazone Cataya 3000", views: 198, inquiries: 11, sales: 4 },
];

export default function AdminDashboard() {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
            Dashboard
          </h1>
          <p className="text-sm text-warm-500">Bienvenido de nuevo. Aquí tienes un resumen de hoy.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-warm-200 rounded-xl px-3 py-2 text-sm">
            <option>Últimos 30 días</option>
            <option>Últimos 7 días</option>
            <option>Este mes</option>
            <option>Este año</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, change, trend, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-warm-200 p-5">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                trend === "up" ? "text-green-600" : "text-red-500"
              }`}>
                {trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {change}
              </div>
            </div>
            <div className="text-2xl font-bold text-primary">{value}</div>
            <div className="text-xs text-warm-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-3 gap-6 mb-6">
        {/* Revenue chart placeholder */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-warm-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-primary">Ingresos</h2>
            <div className="flex gap-1 bg-warm-100 rounded-xl p-1">
              {["Semana", "Mes", "Año"].map((period, i) => (
                <button
                  key={period}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    i === 1 ? "bg-white text-primary shadow-sm" : "text-warm-500 hover:text-primary"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          {/* Chart placeholder */}
          <div className="h-64 flex items-end justify-between gap-2 px-4">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-accent/20 rounded-t-lg hover:bg-accent/40 transition-colors relative group"
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {Math.round(h * 520)}€
                  </div>
                </div>
                <span className="text-[10px] text-warm-400">
                  {["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-2xl border border-warm-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-primary">Mensajes</h2>
            <Link href="/admin/mensajes" className="text-xs text-accent font-medium hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="space-y-3">
            {recentMessages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl cursor-pointer transition-colors ${
                  msg.unread ? "bg-accent/5 hover:bg-accent/10" : "hover:bg-warm-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-primary flex items-center gap-2">
                    {msg.unread && <span className="w-2 h-2 bg-accent rounded-full" />}
                    {msg.name}
                  </span>
                  <span className="text-xs text-warm-400">{msg.time}</span>
                </div>
                <p className="text-xs text-warm-500 truncate">{msg.subject}</p>
              </div>
            ))}
          </div>

          {/* Top products */}
          <div className="mt-6 pt-6 border-t border-warm-200">
            <h3 className="text-sm font-bold text-primary mb-3">Productos más vistos</h3>
            <div className="space-y-3">
              {topProducts.map((prod, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-warm-400 w-4">#{i + 1}</span>
                    <span className="text-sm text-primary">{prod.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-warm-400">
                    <Eye size={12} /> {prod.views}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-2xl border border-warm-200">
        <div className="flex justify-between items-center p-6 pb-0">
          <h2 className="text-lg font-bold text-primary">Pedidos Recientes</h2>
          <Link
            href="/admin/pedidos"
            className="flex items-center gap-1 text-sm text-accent font-medium hover:underline"
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-warm-500 uppercase tracking-wider border-b border-warm-200">
                <th className="text-left px-6 py-3 font-medium">Pedido</th>
                <th className="text-left px-6 py-3 font-medium">Cliente</th>
                <th className="text-left px-6 py-3 font-medium">Producto</th>
                <th className="text-left px-6 py-3 font-medium">Total</th>
                <th className="text-left px-6 py-3 font-medium">Tipo</th>
                <th className="text-left px-6 py-3 font-medium">Estado</th>
                <th className="text-left px-6 py-3 font-medium">Fecha</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-warm-100 hover:bg-warm-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-accent">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-primary">{order.client}</td>
                  <td className="px-6 py-4 text-sm text-warm-600">{order.product}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      order.type === "Alquiler" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent"
                    }`}>
                      {order.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-warm-500">{order.date}</td>
                  <td className="px-6 py-4">
                    <button className="p-1 text-warm-400 hover:text-primary rounded">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {[
          { label: "Nuevo Producto", href: "/admin/productos/nuevo", icon: Package, color: "bg-accent" },
          { label: "Nuevo Artículo", href: "/admin/blog/nuevo", icon: FileText, color: "bg-secondary" },
          { label: "Ver Pedidos", href: "/admin/pedidos", icon: ShoppingCart, color: "bg-blue-500" },
          { label: "Ver Mensajes", href: "/admin/mensajes", icon: MessageSquare, color: "bg-amber-500" },
        ].map(({ label, href, icon: Icon, color }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 bg-white rounded-xl border border-warm-200 p-4 hover:border-accent/30 transition-colors group"
          >
            <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center text-white`}>
              <Icon size={18} />
            </div>
            <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

function FileText(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
  );
}

function MessageSquare(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  );
}
