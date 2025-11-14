// src/Components/MenuX.jsx
import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

export default function MenuX() {
  const auth = useAuth();

  const salir = async () => {
    try { await auth.signoutRedirect(); } catch (e) { console.error(e); }
  };

  const Item = ({ to, children }) => (
    <li style={{ marginBottom: 8 }}>
      <Link to={to} style={{ textDecoration: "none", color: "#1e293b" }}>
        {children}
      </Link>
    </li>
  );

  return (
    <aside style={{
      width: 260, padding: 20, borderRight: "1px solid #e5e7eb", background: "#f8fafc"
    }}>
      <h2 style={{ marginTop: 0 }}>Menu X</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <Item to="/x">Dashboard X</Item>
        <Item to="/catalogo">Catálogo</Item>
        <Item to="/perfil">Perfil</Item>
        <Item to="/categoria">Admin: Categorías</Item>
        <Item to="/departamento">Admin: Departamentos</Item>
      </ul>

      <button
        onClick={salir}
        style={{ marginTop: 16, padding: "8px 12px", borderRadius: 8, border: "1px solid #1e293b", background: "white", cursor: "pointer" }}
      >
        Cerrar sesión
      </button>
    </aside>
  );
}
