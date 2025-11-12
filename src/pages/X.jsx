// src/pages/X.jsx
import { useAuth } from "react-oidc-context";
import MenuX from "./MenuX";

export default function X() {
  const auth = useAuth();
  const nombre = auth.user?.profile?.name || auth.user?.profile?.email || "Usuario";
  const grupos = auth.user?.profile?.["cognito:groups"] || [];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <MenuX />
      <main style={{ flex: 1, padding: 24 }}>
        <h1>Vista X (sandbox)</h1>
        <p>Bienvenido, <strong>{nombre}</strong>.</p>
        <p>Grupos: {grupos.length ? grupos.join(", ") : "—"}</p>
        <div style={{ marginTop: 16, padding: 16, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <p>Aquí puedes probar componentes, llamadas a APIs, etc.</p>
        </div>
      </main>
    </div>
  );
}
