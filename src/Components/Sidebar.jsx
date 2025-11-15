import { NavLink } from "react-router-dom";
import { FiHome, FiShoppingBag, FiList, FiUser, FiSettings } from "react-icons/fi";

export default function Sidebar({ open, onClose }) {
  const base = "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium";
  const idle = "text-text hover:bg-background";
  const active = "bg-accent text-white";

  const Item = ({ to, icon, label }) => (
    <NavLink
      to={to}
      end
      className={({ isActive }) => `${base} ${isActive ? active : idle}`}
      onClick={onClose}
    >
      <span className="text-base">{icon}</span>
      {label}
    </NavLink>
  );

  const Dummy = ({ icon, label }) => (
    <button type="button" className={`${base} ${idle} w-full text-left`} onClick={onClose}>
      <span className="text-base">{icon}</span>
      {label}
    </button>
  );

  return (
    <>
      {/* Drawer izquierdo (nunca fijo) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-accentLight shadow-lg
        transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="h-16 flex items-center px-5 font-semibold text-dark">
          Raíz Oaxaca
        </div>

        <nav className="px-3 py-2 space-y-1">
          <Item to="/" icon={<FiHome />} label="Inicio" />
          <Item to="/catalogo" icon={<FiShoppingBag />} label="Catálogo" />
          <Item to="/usercategoria" icon={<FiShoppingBag />} label="Categoria" />
          <Item to="/userdepartamento" icon={<FiShoppingBag />} label="Departamento" />
          {/* Solo botones (no cambian vista por ahora) */}
          <Dummy icon={<FiList />} label="Mis Órdenes" />
          <Dummy icon={<FiUser />} label="Perfil" />
          <Dummy icon={<FiSettings />} label="Ajustes" />
        </nav>
      </aside>

      {/* Overlay para cerrar el drawer */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 z-40 ${open ? "block" : "hidden"}`}
      />
    </>
  );
}
