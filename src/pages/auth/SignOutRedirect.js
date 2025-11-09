// src/pages/auth/SignOutRedirect.js
import { useEffect } from "react";

const HOSTED_UI = "https://us-east-2wp37wscul.auth.us-east-2.amazoncognito.com";
const CLIENT_ID  = "4nr6lj99hvjlid4nl62reognu0";
const LOGOUT_URI = "https://d84l1y8p4kdic.cloudfront.net";

export default function SignOutRedirect() {
  useEffect(() => {
    const url = `${HOSTED_UI}/logout?client_id=${encodeURIComponent(CLIENT_ID)}`
      + `&logout_uri=${encodeURIComponent(LOGOUT_URI)}`;
    window.location.href = url;
  }, []);
  return <div>Cerrando sesión…</div>;
}
