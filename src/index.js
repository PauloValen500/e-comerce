import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-oidc-context";
import { WebStorageStateStore } from "oidc-client-ts"; // 👈 ESTA LÍNEA ES LA CLAVE

const cognitoAuthConfig = {
  authority: "https://us-east-2wp37wscul.auth.us-east-2.amazoncognito.com",
  client_id: "4nr6lj99hvjlid4nl62reognu0",
  redirect_uri: "http://localhost:3000/signin", // cámbialo por tu dominio en producción
  response_type: "code",
  scope: "email openid profile phone",
  automaticSilentRenew: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
