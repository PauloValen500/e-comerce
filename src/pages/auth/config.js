// src/auth/config.js
const ORIGIN = window.location.origin.replace(/\/$/, ""); // sin barra final
export const COGNITO = {
  domain: "https://us-east-2wp37wscul.auth.us-east-2.amazoncognito.com",
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_wp37WSCul",
  clientId: "4nr6lj99hvjlid4nl62reognu0",
  redirectUri: ORIGIN,              // ← será https://d84l1y8p4kdic.cloudfront.net
  postLogoutRedirectUri: ORIGIN,     // idem
  scope: "openid email profile phone",
};
