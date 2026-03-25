"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    motivo: "",
    maquina: "",
    mensaje: "",
    privacidad: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.nombre.trim()) errs.nombre = "El nombre es obligatorio";
    if (!form.email.trim()) errs.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Email no válido";
    if (!form.motivo) errs.motivo = "Selecciona un motivo";
    if (!form.mensaje.trim()) errs.mensaje = "El mensaje es obligatorio";
    if (!form.privacidad) errs.privacidad = "Debes aceptar la política de privacidad";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    // Simulate send
    setTimeout(() => setStatus("sent"), 1500);
  }

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  }

  if (status === "sent") {
    return (
      <div className="bg-white rounded-2xl border border-warm-200 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-display)]">
          Mensaje enviado
        </h2>
        <p className="text-warm-500 mb-6">
          Gracias por contactar con nosotros. Te responderemos en menos de 24 horas.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ nombre: "", apellidos: "", email: "", telefono: "", motivo: "", maquina: "", mensaje: "", privacidad: false });
          }}
          className="text-accent font-medium text-sm hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-warm-200 p-8">
      <h2 className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-display)]">
        Envíanos un mensaje
      </h2>
      <p className="text-warm-500 text-sm mb-8">
        Rellena el formulario y te responderemos en menos de 24 horas.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Nombre *</label>
            <input type="text" value={form.nombre} onChange={(e) => update("nombre", e.target.value)}
              className={`w-full bg-warm-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${errors.nombre ? "border-red-400 focus:border-red-500" : "border-warm-200 focus:border-accent"}`}
              placeholder="Tu nombre" />
            {errors.nombre && <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Apellidos</label>
            <input type="text" value={form.apellidos} onChange={(e) => update("apellidos", e.target.value)}
              className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
              placeholder="Tus apellidos" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Email *</label>
            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
              className={`w-full bg-warm-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${errors.email ? "border-red-400 focus:border-red-500" : "border-warm-200 focus:border-accent"}`}
              placeholder="tu@email.com" />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Teléfono</label>
            <input type="tel" value={form.telefono} onChange={(e) => update("telefono", e.target.value)}
              className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
              placeholder="+34 600 000 000" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Motivo de contacto *</label>
          <select value={form.motivo} onChange={(e) => update("motivo", e.target.value)}
            className={`w-full bg-warm-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${errors.motivo ? "border-red-400 focus:border-red-500" : "border-warm-200 focus:border-accent"}`}>
            <option value="">Selecciona una opción</option>
            <option value="presupuesto">Solicitar presupuesto</option>
            <option value="alquiler">Información sobre alquiler</option>
            <option value="venta">Información sobre compra</option>
            <option value="tecnico">Servicio técnico</option>
            <option value="otro">Otro</option>
          </select>
          {errors.motivo && <p className="text-xs text-red-500 mt-1">{errors.motivo}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">¿Qué máquina te interesa?</label>
          <input type="text" value={form.maquina} onChange={(e) => update("maquina", e.target.value)}
            className="w-full bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
            placeholder="Ej: Tractor John Deere 6130R, cosechadora de cereales..." />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Mensaje *</label>
          <textarea value={form.mensaje} onChange={(e) => update("mensaje", e.target.value)} rows={5}
            className={`w-full bg-warm-50 border rounded-xl px-4 py-3 text-sm focus:outline-none resize-none transition-colors ${errors.mensaje ? "border-red-400 focus:border-red-500" : "border-warm-200 focus:border-accent"}`}
            placeholder="Cuéntanos qué necesitas..." />
          {errors.mensaje && <p className="text-xs text-red-500 mt-1">{errors.mensaje}</p>}
        </div>

        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" checked={form.privacidad} onChange={(e) => update("privacidad", e.target.checked)}
              className="mt-1 accent-accent" />
            <span className={`text-xs ${errors.privacidad ? "text-red-500" : "text-warm-500"}`}>
              He leído y acepto la política de privacidad. *
            </span>
          </label>
        </div>

        <button type="submit" disabled={status === "sending"}
          className="w-full bg-accent hover:bg-accent-dark disabled:bg-accent/50 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
          {status === "sending" ? (
            <><Loader2 size={18} className="animate-spin" /> Enviando...</>
          ) : (
            <><Send size={18} /> Enviar Mensaje</>
          )}
        </button>
      </form>
    </div>
  );
}
