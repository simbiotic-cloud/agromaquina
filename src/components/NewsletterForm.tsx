"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setEmail("");
  }

  if (status === "sent") {
    return (
      <div className="flex items-center gap-2 text-sm text-green-400">
        <CheckCircle size={16} />
        <span>Suscrito correctamente</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
        placeholder="tu@email.com"
        className={`bg-primary-light border rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-warm-500 focus:outline-none ${
          status === "error" ? "border-red-400" : "border-white/10 focus:border-accent"
        }`}
      />
      {status === "error" && <p className="text-xs text-red-400">Introduce un email válido</p>}
      <button type="submit" className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
        Suscribirme
      </button>
    </form>
  );
}
