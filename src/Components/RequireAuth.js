// src/components/RequireAuth.jsx
import { useAuth } from "react-oidc-context";

export default function RequireAuth({ children, groups = [] }) {
  const auth = useAuth();

  if (auth.isLoading) return <div>Cargando…</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;
  if (!auth.isAuthenticated) {
    auth.signinRedirect();
    return null;
  }

  if (groups.length > 0) {
    const userGroups = auth.user?.profile?.["cognito:groups"] || [];
    const allowed = groups.some((g) => userGroups.includes(g));
    if (!allowed) return <div>No tienes permisos para ver esta sección.</div>;
  }

  return children;
}
