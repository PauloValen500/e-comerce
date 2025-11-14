import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-oidc-context";
import { WebStorageStateStore } from "oidc-client-ts";

const cognitoAuthConfig = {
  authority: "https://us-east-2wp37wscul.auth.us-east-2.amazoncognito.com",
  client_id: "4nr6lj99hvjlid4nl62reognu0",
  redirect_uri: "http://localhost:3000/signin",
  response_type: "code",
  scope: "email openid profile phone",
  automaticSilentRenew: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

// Inyecta Tailwind CDN con tu config ANTES de cargar el script
function injectTailwindCDN() {
  return new Promise((resolve) => {
    // Config primero
    const cfg = document.createElement("script");
    cfg.text = `
      tailwind = window.tailwind || {};
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              light: "#F8FAFC",
              background: "#E2E8F0",
              dark: "#1E293B",
              accent: "#3B82F6",
              accentLight: "#93C5FD",
              text: "#334155",
              white: "#FFFFFF",
            },
            boxShadow: {
              card: "0 3px 6px rgba(0,0,0,0.08)",
              cardHover: "0 6px 12px rgba(0,0,0,0.12)",
            },
          },
        },
      };
    `;
    document.head.appendChild(cfg);

    // Script CDN
    const s = document.createElement("script");
    s.src = "https://cdn.tailwindcss.com";
    s.onload = () => resolve();
    s.onerror = () => resolve(); // no bloquea el render si falla
    document.head.appendChild(s);
  });
}

injectTailwindCDN().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <AuthProvider {...cognitoAuthConfig}>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );
});

reportWebVitals();
