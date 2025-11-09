import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority: "https://us-east-2wp37wscul.auth.us-east-2.amazoncognito.com", // dominio del Hosted UI (el que ves en 'Inicio de sesión administrado')
  client_id: "4nr6lj99hvjlid4nl62reognu0",
  redirect_uri: "http://localhost:3000", // local: "http://localhost:3000" aws "https://main.d23x4f38qcy3mi.amplifyapp.com"
  response_type: "code",
  scope: "email openid phone",
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
