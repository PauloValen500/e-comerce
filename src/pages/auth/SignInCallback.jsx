// src/pages/auth/SignInCallback.jsx
import { useEffect, useRef } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

export default function SignInCallback() {
  const auth = useAuth();
  const navigate = useNavigate();
  const ranOnce = useRef(false); // evita doble ejecución

  useEffect(() => {
    if (ranOnce.current) return;
    ranOnce.current = true;

    (async () => {
      try {
        const url = new URL(window.location.href);
        console.debug("[SignInCallback] code:", url.searchParams.get("code"));
        console.debug("[SignInCallback] state:", url.searchParams.get("state"));

        await auth.signinRedirectCallback();

        // Sandbox de pruebas: manda SIEMPRE a /x
        navigate("/x", { replace: true });

        // (cuando termines pruebas, usa esto)
        // const isAdmin = (auth.user?.profile?.["cognito:groups"] || []).includes("admin");
        // const destino = auth.user?.state?.returnUrl || (isAdmin ? "/categoria" : "/catalogo");
        // navigate(destino, { replace: true });
      } catch (e) {
        console.error("[SignInCallback] ERROR:", e);
        navigate("/", { replace: true });
      }
    })();
  }, [auth, navigate]);

  return <div>Finalizando inicio de sesión…</div>;
}
