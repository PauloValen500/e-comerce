import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from "react-oidc-context";
import reportWebVitals from './reportWebVitals';

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_aU7sgfE6o",
  client_id: "4a8s94fkhmitpvtgcnv3chi1k3",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
  response_type: "code",
  scope: "phone openid email",
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
          <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
