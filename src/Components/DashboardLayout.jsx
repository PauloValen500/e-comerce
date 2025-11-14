import { useMemo, useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const [menuPerfil, setMenuPerfil] = useState(false);
  const loc = useLocation();

  const title = useMemo(() => {
    const map = { "/catalogo": "Catálogo", "/perfil": "Perfil", "/ajustes": "Ajustes", "/": "Inicio" };
    const match = Object.keys(map).sort((a,b)=>b.length-a.length).find(k => loc.pathname.startsWith(k));
    return map[match || "/"] || "Panel";
  }, [loc.pathname]);

  return (
    <div className="min-h-screen bg-background text-text">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* SIN margen lateral: el drawer nunca se fija */}
      <header className="sticky top-0 z-30 bg-light/80 backdrop-blur border-b border-accentLight">
        <div className="h-16 px-4 flex items-center gap-3 max-w-6xl mx-auto">
          {/* Hamburguesa SIEMPRE visible */}
          <button
            className="p-2 rounded-lg border border-accentLight"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <FiMenu className="text-accent" />
          </button>

          <h1 className="text-xl font-semibold text-dark">{title}</h1>

          <div className="ml-auto flex items-center gap-2">
            <button type="button" className="p-2 rounded-lg hover:bg-background" aria-label="Carrito">
              <FiShoppingCart className="text-dark text-lg" />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuPerfil(v => !v)}
                className="p-1 rounded-full border border-accentLight hover:bg-background"
                aria-haspopup="menu"
                aria-expanded={menuPerfil}
              >
                <div className="w-8 h-8 rounded-full bg-accent text-white grid place-items-center">
                  <FiUser />
                </div>
              </button>

              {menuPerfil && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setMenuPerfil(false)} />
                  <div className="absolute right-0 z-20 mt-2 w-44 bg-white border border-accentLight rounded-xl shadow-lg py-1">
                    <Link to="/perfil" className="block px-4 py-2 text-sm text-dark hover:bg-background" onClick={() => setMenuPerfil(false)}>
                      Perfil
                    </Link>
<Link
  to="/logout"
  className="block px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50"
  onClick={() => setMenuPerfil(false)}
>
  Cerrar sesión
</Link>

                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido centrado y con ancho máximo para que se vea igual en pantallas grandes */}
      <main className="p-4">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
