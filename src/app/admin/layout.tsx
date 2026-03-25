"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
  CalendarClock,
  MessageSquare,
  Settings,
  LogOut,
  Tractor,
  ChevronLeft,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/productos", label: "Productos", icon: Package },
  { href: "/admin/pedidos", label: "Pedidos", icon: ShoppingCart },
  { href: "/admin/alquileres", label: "Alquileres", icon: CalendarClock },
  { href: "/admin/usuarios", label: "Usuarios", icon: Users },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/mensajes", label: "Mensajes", icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  const sidebar = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center gap-2 px-5 border-b border-warm-800">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <Tractor size={18} className="text-white" />
        </div>
        <div className="leading-tight">
          <span className="text-sm font-bold text-white">AgroMàquina</span>
          <span className="block text-[10px] text-warm-500">Panel Admin</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive(href)
                ? "bg-accent text-white"
                : "text-warm-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-warm-800 p-3 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-warm-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <ChevronLeft size={18} /> Ver la web
        </Link>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-warm-400 hover:text-white hover:bg-white/5 transition-colors w-full">
          <Settings size={18} /> Configuración
        </button>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors w-full">
          <LogOut size={18} /> Cerrar Sesión
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-warm-100 flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-60 bg-primary-dark fixed inset-y-0 left-0 z-40">
        {sidebar}
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-60 bg-primary-dark h-full">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-warm-400 hover:text-white"
            >
              <X size={20} />
            </button>
            {sidebar}
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-60">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-warm-200 h-16 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-warm-500 hover:text-primary"
            >
              <Menu size={20} />
            </button>
            <div className="relative hidden sm:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-9 pr-4 py-2 bg-warm-100 border border-warm-200 rounded-xl text-sm w-64 focus:outline-none focus:border-accent"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-warm-500 hover:text-primary rounded-xl hover:bg-warm-100 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-warm-200">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                AM
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium text-primary">Admin</div>
                <div className="text-xs text-warm-400">admin@agromaquina.cat</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
