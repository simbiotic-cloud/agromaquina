import { Search, Download, MoreHorizontal, Mail, Phone, MapPin, Eye, Edit, UserPlus } from "lucide-react";

const users = [
  { id: 1, name: "Joan Martínez", email: "joan@email.com", phone: "+34 666 123 456", location: "Lleida", orders: 5, totalSpent: "142.500 €", lastOrder: "25/03/2026", registered: "12/01/2024", status: "Activo" },
  { id: 2, name: "Maria López", email: "maria@email.com", phone: "+34 677 234 567", location: "Tarragona", orders: 3, totalSpent: "28.400 €", lastOrder: "24/03/2026", registered: "03/06/2024", status: "Activo" },
  { id: 3, name: "Pere Soler", email: "pere@email.com", phone: "+34 688 345 678", location: "Girona", orders: 7, totalSpent: "215.000 €", lastOrder: "24/03/2026", registered: "28/09/2023", status: "Activo" },
  { id: 4, name: "Anna Puig", email: "anna@email.com", phone: "+34 699 456 789", location: "Barcelona", orders: 2, totalSpent: "22.300 €", lastOrder: "23/03/2026", registered: "15/02/2025", status: "Activo" },
  { id: 5, name: "Carles Font", email: "carles@email.com", phone: "+34 611 567 890", location: "Lleida", orders: 8, totalSpent: "89.600 €", lastOrder: "22/03/2026", registered: "01/03/2023", status: "Activo" },
  { id: 6, name: "Marta Vidal", email: "marta@email.com", phone: "+34 622 678 901", location: "Huesca", orders: 4, totalSpent: "165.200 €", lastOrder: "21/03/2026", registered: "22/07/2024", status: "Activo" },
  { id: 7, name: "Jordi Pla", email: "jordi@email.com", phone: "+34 633 789 012", location: "Zaragoza", orders: 1, totalSpent: "3.800 €", lastOrder: "20/03/2026", registered: "10/03/2026", status: "Nuevo" },
  { id: 8, name: "Laura Camps", email: "laura@email.com", phone: "+34 644 890 123", location: "Lleida", orders: 0, totalSpent: "0 €", lastOrder: "—", registered: "18/03/2026", status: "Nuevo" },
];

export default function UsuariosPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">Usuarios</h1>
          <p className="text-sm text-warm-500">Gestiona clientes y usuarios registrados</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 rounded-xl text-sm text-warm-600 hover:border-accent transition-colors">
            <Download size={16} /> Exportar
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors">
            <UserPlus size={16} /> Nuevo Usuario
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total usuarios", value: "1.284" },
          { label: "Nuevos este mes", value: "47" },
          { label: "Con pedidos", value: "823" },
          { label: "Valor medio", value: "12.450 €" },
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
            <input type="text" placeholder="Buscar por nombre, email, teléfono..." className="w-full pl-9 pr-4 py-2.5 bg-warm-50 border border-warm-200 rounded-xl text-sm focus:outline-none focus:border-accent" />
          </div>
          <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
            <option>Todos</option>
            <option>Con pedidos</option>
            <option>Sin pedidos</option>
            <option>Nuevos</option>
          </select>
          <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
            <option>Ordenar por: Recientes</option>
            <option>Mayor gasto</option>
            <option>Más pedidos</option>
            <option>Nombre A-Z</option>
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
                <th className="text-left px-5 py-3 font-medium">Usuario</th>
                <th className="text-left px-5 py-3 font-medium">Ubicación</th>
                <th className="text-left px-5 py-3 font-medium">Pedidos</th>
                <th className="text-left px-5 py-3 font-medium">Total gastado</th>
                <th className="text-left px-5 py-3 font-medium">Último pedido</th>
                <th className="text-left px-5 py-3 font-medium">Registrado</th>
                <th className="text-left px-5 py-3 font-medium">Estado</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-warm-100 hover:bg-warm-50 transition-colors">
                  <td className="px-5 py-4"><input type="checkbox" className="rounded accent-accent" /></td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs font-bold">
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">{user.name}</div>
                        <div className="text-xs text-warm-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-warm-500 flex items-center gap-1"><MapPin size={12} /> {user.location}</td>
                  <td className="px-5 py-4 text-sm font-medium text-primary">{user.orders}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-primary">{user.totalSpent}</td>
                  <td className="px-5 py-4 text-sm text-warm-500">{user.lastOrder}</td>
                  <td className="px-5 py-4 text-sm text-warm-500">{user.registered}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      user.status === "Activo" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    }`}>{user.status}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-1">
                      <button className="p-1.5 text-warm-400 hover:text-accent rounded-lg hover:bg-warm-100"><Eye size={15} /></button>
                      <button className="p-1.5 text-warm-400 hover:text-primary rounded-lg hover:bg-warm-100"><Edit size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-warm-200">
          <span className="text-sm text-warm-500">Mostrando 1-8 de 1.284 usuarios</span>
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
