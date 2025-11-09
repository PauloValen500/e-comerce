// src/pages/auth/SignInRedirect.js
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

export default function SignInRedirect() {
  const auth = useAuth();
  useEffect(() => { auth.signinRedirect(); }, [auth]);
  return <div>Redirigiendo a Cognito…</div>;
}
