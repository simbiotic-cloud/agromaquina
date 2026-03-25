import { Search, Mail, MailOpen, Star, Trash2, Reply, Clock, Tag } from "lucide-react";

const messages = [
  { id: 1, name: "Francesc Riera", email: "francesc@email.com", subject: "Presupuesto tractor 80CV", message: "Hola, estoy interesado en un tractor de unos 80CV para mi explotación de frutales. ¿Qué modelos tenéis disponibles? Preferiblemente segunda mano.", type: "Presupuesto", date: "25/03/2026 12:34", read: false, starred: true },
  { id: 2, name: "Laura Camps", email: "laura@email.com", subject: "Consulta alquiler cosechadora", message: "Buenos días, necesitaría alquilar una cosechadora de cereales para la campaña de junio. ¿Qué opciones tenéis y precios?", type: "Alquiler", date: "25/03/2026 09:15", read: false, starred: false },
  { id: 3, name: "Jordi Pla", email: "jordi@email.com", subject: "Servicio técnico Kuhn BKR 280", message: "Tengo una desbrozadora Kuhn que compré aquí y necesita revisión. ¿Cuándo podríais atenderme?", type: "Servicio técnico", date: "24/03/2026 16:20", read: true, starred: false },
  { id: 4, name: "Montse Grau", email: "montse@email.com", subject: "Vender mi tractor usado", message: "Tengo un Massey Ferguson del 2018 con 2.500 horas que me gustaría vender. ¿Compráis maquinaria de segunda mano?", type: "Otro", date: "24/03/2026 11:45", read: true, starred: true },
  { id: 5, name: "Albert Ros", email: "albert@email.com", subject: "Financiación John Deere 6130R", message: "He visto el John Deere 6130R en vuestra web. ¿Qué opciones de financiación ofrecéis? ¿Es posible pagar en 36 meses?", type: "Presupuesto", date: "23/03/2026 14:58", read: true, starred: false },
  { id: 6, name: "Cristina Ferrer", email: "cristina@email.com", subject: "Dudas sobre la sembradora Amazone", message: "Me gustaría saber si la Amazone Cataya 3000 es compatible con mi tractor de 75CV. Gracias.", type: "Presupuesto", date: "22/03/2026 10:22", read: true, starred: false },
];

const typeColors: Record<string, string> = {
  "Presupuesto": "bg-accent/10 text-accent",
  "Alquiler": "bg-secondary/10 text-secondary",
  "Servicio técnico": "bg-blue-500/10 text-blue-500",
  "Otro": "bg-warm-200 text-warm-600",
};

export default function MensajesPage() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">Mensajes</h1>
          <p className="text-sm text-warm-500">Mensajes del formulario de contacto</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-warm-500">2 sin leer</span>
          <button className="text-sm text-accent font-medium hover:underline">Marcar todo como leído</button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-warm-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
            <input type="text" placeholder="Buscar mensajes..." className="w-full pl-9 pr-4 py-2.5 bg-warm-50 border border-warm-200 rounded-xl text-sm focus:outline-none focus:border-accent" />
          </div>
          <div className="flex gap-2">
            <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
              <option>Todos</option>
              <option>Sin leer</option>
              <option>Destacados</option>
            </select>
            <select className="bg-warm-50 border border-warm-200 rounded-xl px-3 py-2.5 text-sm">
              <option>Todos los tipos</option>
              <option>Presupuesto</option>
              <option>Alquiler</option>
              <option>Servicio técnico</option>
            </select>
          </div>
        </div>
      </div>

      {/* Messages list */}
      <div className="bg-white rounded-2xl border border-warm-200 overflow-hidden">
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={`flex items-start gap-4 p-5 cursor-pointer transition-colors hover:bg-warm-50 ${
              i < messages.length - 1 ? "border-b border-warm-100" : ""
            } ${!msg.read ? "bg-accent/[0.02]" : ""}`}
          >
            <div className="flex flex-col items-center gap-2 pt-1">
              <button className={`${msg.starred ? "text-amber-400" : "text-warm-300"} hover:text-amber-400`}>
                <Star size={16} fill={msg.starred ? "currentColor" : "none"} />
              </button>
              {msg.read ? (
                <MailOpen size={16} className="text-warm-300" />
              ) : (
                <Mail size={16} className="text-accent" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className={`text-sm font-medium ${!msg.read ? "text-primary font-semibold" : "text-warm-600"}`}>
                  {msg.name}
                </span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[msg.type]}`}>
                  {msg.type}
                </span>
              </div>
              <div className={`text-sm mb-1 ${!msg.read ? "text-primary font-medium" : "text-warm-600"}`}>
                {msg.subject}
              </div>
              <p className="text-xs text-warm-400 truncate">{msg.message}</p>
            </div>

            <div className="flex flex-col items-end gap-2 shrink-0">
              <span className="text-xs text-warm-400 flex items-center gap-1">
                <Clock size={12} /> {msg.date}
              </span>
              <div className="flex gap-1">
                <button className="p-1 text-warm-300 hover:text-accent rounded" title="Responder">
                  <Reply size={14} />
                </button>
                <button className="p-1 text-warm-300 hover:text-red-500 rounded" title="Eliminar">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
