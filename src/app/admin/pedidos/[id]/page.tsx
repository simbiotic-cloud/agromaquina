import Link from "next/link";
import { ArrowLeft, Package, User, CreditCard, Truck, FileText, Clock, MapPin, Phone, Mail, Edit } from "lucide-react";

export default async function PedidoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/pedidos" className="p-2 text-warm-400 hover:text-primary hover:bg-white rounded-xl transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
              Pedido {id}
            </h1>
            <p className="text-sm text-warm-500">25 de marzo de 2026, 14:32</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 rounded-xl text-sm text-warm-600 hover:border-accent transition-colors">
            <FileText size={16} /> Generar Factura
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors">
            <Edit size={16} /> Editar Estado
          </button>
        </div>
      </div>

      {/* Status timeline */}
      <div className="bg-white rounded-2xl border border-warm-200 p-6 mb-6">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-warm-200" />
          {[
            { label: "Pedido recibido", date: "25/03 14:32", done: true },
            { label: "Pago confirmado", date: "25/03 14:35", done: true },
            { label: "En preparación", date: "25/03 15:00", done: true },
            { label: "Enviado", date: "", done: false },
            { label: "Entregado", date: "", done: false },
          ].map(({ label, date, done }, i) => (
            <div key={i} className="relative flex flex-col items-center text-center z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                done ? "bg-accent text-white" : "bg-warm-200 text-warm-400"
              }`}>
                {i + 1}
              </div>
              <span className={`text-xs font-medium mt-2 ${done ? "text-primary" : "text-warm-400"}`}>{label}</span>
              {date && <span className="text-[10px] text-warm-400">{date}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Product */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Package size={18} /> Producto
            </h2>
            <div className="flex items-center gap-4 p-4 bg-warm-50 rounded-xl">
              <div className="w-20 h-20 bg-warm-200 rounded-xl flex items-center justify-center shrink-0">
                <Package size={24} className="text-warm-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-primary">John Deere 6130R</div>
                <div className="text-sm text-warm-500">Tractor 130 CV - Nueva</div>
                <div className="text-xs text-warm-400 mt-1">SKU: JD-6130R-2026</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary">95.000 €</div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">Venta</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-warm-200 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-warm-500">Subtotal</span>
                <span className="text-primary">95.000,00 €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-warm-500">IVA (21%)</span>
                <span className="text-primary">19.950,00 €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-warm-500">Transporte</span>
                <span className="text-primary">850,00 €</span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2 border-t border-warm-200">
                <span className="text-primary">Total</span>
                <span className="text-accent">115.800,00 €</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4">Notas internas</h2>
            <div className="space-y-3 mb-4">
              <div className="p-3 bg-warm-50 rounded-xl">
                <div className="flex justify-between text-xs text-warm-400 mb-1">
                  <span>Admin</span><span>25/03/2026 15:00</span>
                </div>
                <p className="text-sm text-warm-600">Cliente solicita entrega antes del 1 de abril para inicio de campaña.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Añadir nota..." className="flex-1 bg-warm-50 border border-warm-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent" />
              <button className="px-4 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors">Añadir</button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Client */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <User size={18} /> Cliente
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">JM</div>
                <div>
                  <div className="font-medium text-primary">Joan Martínez</div>
                  <div className="text-xs text-warm-400">Cliente desde 2024</div>
                </div>
              </div>
              <div className="space-y-2 pt-2 text-sm">
                <div className="flex items-center gap-2 text-warm-500"><Mail size={14} /> joan@email.com</div>
                <div className="flex items-center gap-2 text-warm-500"><Phone size={14} /> +34 666 123 456</div>
                <div className="flex items-center gap-2 text-warm-500"><MapPin size={14} /> Lleida, Catalunya</div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <CreditCard size={18} /> Pago
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-warm-500">Método</span><span className="text-primary font-medium">Transferencia</span></div>
              <div className="flex justify-between"><span className="text-warm-500">Estado</span><span className="text-green-600 font-medium">Pagado</span></div>
              <div className="flex justify-between"><span className="text-warm-500">Fecha pago</span><span className="text-primary">25/03/2026</span></div>
              <div className="flex justify-between"><span className="text-warm-500">Referencia</span><span className="text-primary font-mono text-xs">TRF-2026032514</span></div>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white rounded-2xl border border-warm-200 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Truck size={18} /> Envío
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-warm-500">Método</span><span className="text-primary font-medium">Transporte especial</span></div>
              <div className="flex justify-between"><span className="text-warm-500">Dirección</span><span className="text-primary text-right">Ctra. N-240 km 15<br/>25001 Lleida</span></div>
              <div className="flex justify-between"><span className="text-warm-500">Entrega est.</span><span className="text-primary">28/03/2026</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
