// src/App.jsx
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_wp37WSCul",
  client_id: "4nr6lj99hvjlid4nl62reognu0",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net", // o http://localhost:3000 en dev
  response_type: "code",
  scope: "email openid phone",
  loadUserInfo: true,
  onSigninCallback: () => {
    // Limpia el query ?code=... tras el callback
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

export default function App() {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <AppRoutes />
    </AuthProvider>
  );
}
