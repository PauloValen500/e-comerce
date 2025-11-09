import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_wp37WSCul", // dominio del Hosted UI (el que ves en 'Inicio de sesión administrado')
  client_id: "4nr6lj99hvjlid4nl62reognu0",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net", // o "http://localhost:3000" si pruebas loca "https://d84l1y8p4kdic.cloudfront.net"
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
