// src/pages/auth/SignUpRedirect.js
import { useEffect } from "react";

const HOSTED_UI = "https://us-east-2wp37wscul.auth.us-east-2.amazoncognito.com";
const CLIENT_ID  = "4nr6lj99hvjlid4nl62reognu0";
const REDIRECT   = "https://d84l1y8p4kdic.cloudfront.net";
const SCOPE      = "openid email phone";

export default function SignUpRedirect() {
  useEffect(() => {
    const url = `${HOSTED_UI}/signup?client_id=${encodeURIComponent(CLIENT_ID)}`
      + `&response_type=code`
      + `&redirect_uri=${encodeURIComponent(REDIRECT)}`
      + `&scope=${encodeURIComponent(SCOPE)}`;
    window.location.href = url;
  }, []);
  return <div>Redirigiendo a registro…</div>;
}
