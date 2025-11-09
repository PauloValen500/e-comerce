import React, { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

export default function SignInRedirect() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/perfil"); // 👈 redirige a la página del usuario
    }
  }, [auth.isAuthenticated, navigate]);

  if (auth.isLoading) return <p>Cargando sesión...</p>;
  if (auth.error) return <p>Error: {auth.error.message}</p>;

  return <p>Redirigiendo...</p>;
}
