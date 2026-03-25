import { Search, CalendarClock, AlertTriangle, CheckCircle, Clock, ArrowRight } from "lucide-react";

const rentals = [
  { id: "ALQ-087", client: "Maria López", product: "Kuhn BKR 280", startDate: "24/03/2026", endDate: "30/03/2026", days: 7, priceDay: 85, total: "595 €", status: "Activo", daysLeft: 5 },
  { id: "ALQ-086", client: "Carles Font", product: "Desbrozadora agrícola", startDate: "22/03/2026", endDate: "05/04/2026", days: 14, priceDay: 120, total: "1.680 €", status: "Activo", daysLeft: 11 },
  { id: "ALQ-085", client: "Joan Martínez", product: "John Deere 6130R", startDate: "15/03/2026", endDate: "22/03/2026", days: 7, priceDay: 450, total: "3.150 €", status: "Finalizado", daysLeft: 0 },
  { id: "ALQ-084", client: "Pere Soler", product: "Sembradora Amazone", startDate: "10/03/2026", endDate: "17/03/2026", days: 7, priceDay: 150, total: "1.050 €", status: "Finalizado", daysLeft: 0 },
  { id: "ALQ-083", client: "Anna Puig", product: "Pulverizador suspendido", startDate: "01/04/2026", endDate: "07/04/2026", days: 7, priceDay: 95, total: "665 €", status: "Reservado", daysLeft: 7 },
  { id: "ALQ-082", client: "Marta Vidal", product: "Cosechadora CLAAS", startDate: "20/03/2026", endDate: "25/03/2026", days: 5, priceDay: 380, total: "1.900 €", status: "Retrasado", daysLeft: -1 },
];

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle }> = {
  "Activo": { color: "bg-green-100 text-green-700", icon: CheckCircle },
  "Finalizado": { color: "bg-warm-200 text-warm-600", icon: CheckCircle },
  "Reservado": { color: "bg-blue-100 text-blue-700", icon: Clock },
  "Retrasado": { color: "bg-red-100 text-red-700", icon: AlertTriangle },
};

export default function AlquileresPage() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">Alquileres</h1>
          <p className="text-sm text-warm-500">Control de alquileres activos, reservas y histórico</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Activos ahora", value: "7", icon: CalendarClock, color: "bg-green-500/10 text-green-600" },
          { label: "Reservados", value: "3", icon: Clock, color: "bg-blue-500/10 text-blue-500" },
          { label: "Retrasados", value: "1", icon: AlertTriangle, color: "bg-red-500/10 text-red-500" },
          { label: "Ingresos mes", value: "8.740 €", icon: CalendarClock, color: "bg-accent/10 text-accent" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl border border-warm-200 p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
              <Icon size={20} />
            </div>
            <div>
              <div className="text-xl font-bold text-primary">{value}</div>
              <div className="text-xs text-warm-500">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Urgent: overdue */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex items-center gap-3">
        <AlertTriangle size={20} className="text-red-500 shrink-0" />
        <div className="flex-1">
          <span className="text-sm font-medium text-red-700">1 alquiler retrasado en la devolución</span>
          <span className="text-xs text-red-500 ml-2">Marta Vidal - Cosechadora CLAAS (1 día de retraso)</span>
        </div>
        <button className="text-sm text-red-600 font-medium hover:underline">Contactar</button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-warm-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
            <input type="text" placeholder="Buscar por cliente, producto, ID..." className="w-full pl-9 pr-4 py-2.5 bg-warm-50 border border-warm-200 rounded-xl text-sm focus:outline-none focus:border-accent" />
          </div>
          <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
            <option>Todos los estados</option>
            <option>Activos</option>
            <option>Reservados</option>
            <option>Retrasados</option>
            <option>Finalizados</option>
          </select>
        </div>
      </div>

      {/* Rentals cards / table */}
      <div className="space-y-3">
        {rentals.map((rental) => {
          const { color } = statusConfig[rental.status];
          return (
            <div key={rental.id} className="bg-white rounded-2xl border border-warm-200 p-5 flex flex-col md:flex-row md:items-center gap-4 hover:border-accent/30 transition-colors">
              <div className="flex-1 grid sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-warm-400 mb-0.5">Alquiler</div>
                  <div className="text-sm font-semibold text-accent">{rental.id}</div>
                  <div className="text-sm font-medium text-primary">{rental.client}</div>
                </div>
                <div>
                  <div className="text-xs text-warm-400 mb-0.5">Producto</div>
                  <div className="text-sm font-medium text-primary">{rental.product}</div>
                  <div className="text-xs text-warm-500">{rental.priceDay} €/día</div>
                </div>
                <div>
                  <div className="text-xs text-warm-400 mb-0.5">Periodo</div>
                  <div className="text-sm text-primary flex items-center gap-1">
                    {rental.startDate} <ArrowRight size={12} /> {rental.endDate}
                  </div>
                  <div className="text-xs text-warm-500">{rental.days} días</div>
                </div>
                <div>
                  <div className="text-xs text-warm-400 mb-0.5">Total</div>
                  <div className="text-lg font-bold text-primary">{rental.total}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${color}`}>
                  {rental.status}
                </span>
                {rental.status === "Activo" && (
                  <span className="text-xs text-warm-500">{rental.daysLeft}d restantes</span>
                )}
                <button className="p-2 text-warm-400 hover:text-accent hover:bg-warm-100 rounded-xl transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
