import React from "react";
import { useAuth } from "react-oidc-context";

export default function Perfil() {
  const auth = useAuth();

  if (!auth || !auth.user) return <p>Cargando sesión...</p>;

  const { profile, access_token, id_token, expires_at } = auth.user;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Perfil del usuario</h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Información básica</h3>
        <p><strong>Sub (ID único):</strong> {profile.sub}</p>
        <p><strong>Nombre:</strong> {profile.name || "No especificado"}</p>
        <p><strong>Correo:</strong> {profile.email}</p>
        <p><strong>Teléfono:</strong> {profile.phone_number || "No especificado"}</p>
        <p><strong>Email verificado:</strong> {String(profile.email_verified)}</p>
        <p><strong>Phone verificado:</strong> {String(profile.phone_number_verified)}</p>
      </div>

      <div className="bg-gray-100 p-4 mt-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Tokens</h3>
        <p><strong>Expira en:</strong> {new Date(expires_at * 1000).toLocaleString()}</p>
        <p><strong>ID Token:</strong></p>
        <pre className="bg-gray-200 p-2 rounded text-xs overflow-auto">{id_token}</pre>
        <p><strong>Access Token:</strong></p>
        <pre className="bg-gray-200 p-2 rounded text-xs overflow-auto">{access_token}</pre>
      </div>

      <div className="bg-gray-100 p-4 mt-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Claims (todos los atributos)</h3>
        <pre className="bg-gray-200 p-2 rounded text-xs overflow-auto">
          {JSON.stringify(profile, null, 2)}
        </pre>
      </div>
    </div>
  );
}
