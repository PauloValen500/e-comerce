// src/pages/auth/SignInRedirect.jsx
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

export default function SignInRedirect() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      const groups = auth.user?.profile["cognito:groups"] || ["cliente"];

      // Redirección automática según grupo
      if (groups.includes("admin")) {
        navigate("/categoria");
      } else {
        navigate("/catalogo");
      }
    } else if (auth.error) {
      console.error("Error en autenticación:", auth.error);
      navigate("/");
    }
  }, [auth, navigate]);

  return <p>Redirigiendo...</p>;
}
