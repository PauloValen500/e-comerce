// src/pages/auth/SignOutCallback.jsx
import { useEffect, useRef } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

export default function SignOutCallback() {
  const auth = useAuth();
  const navigate = useNavigate();
  const ranOnce = useRef(false);

  useEffect(() => {
    if (ranOnce.current) return;
    ranOnce.current = true;

    (async () => {
      try {
        await auth.signoutRedirectCallback();
      } catch (e) {
        console.error("[SignOutCallback] ERROR:", e);
      } finally {
        navigate("/", { replace: true });
      }
    })();
  }, [auth, navigate]);

  return <div>Cerrando sesión…</div>;
}
