// src/Components/RequireAuth.jsx
import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children, groups }) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si hay restricción de grupo
  const userGroups = auth.user?.profile["cognito:groups"] || [];
  if (groups && !groups.some(g => userGroups.includes(g))) {
    // Redirige según rol del usuario
    const destino = userGroups.includes("admin") ? "/categoria" : "/catalogo";
    return <Navigate to={destino} replace />;
  }

  return children;
}
