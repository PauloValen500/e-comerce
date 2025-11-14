// src/services/apiCliente.js
const API_BASE = "https://hvuvmhndcb.execute-api.us-east-2.amazonaws.com/prod";

export async function obtenerPerfilCliente(token) {
  console.log("🔍 [apiCliente] Iniciando solicitud GET /cliente/perfil");
  console.log("🔑 Token enviado (primeros 50 chars):", token?.slice(0, 50));

  const res = await fetch(`${API_BASE}/cliente/perfil`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  console.log("📡 Respuesta HTTP:", res.status);
  const text = await res.text();
  console.log("📦 Respuesta RAW del backend:", text);

  if (!res.ok) throw new Error(`Error ${res.status}: ${text}`);
  return JSON.parse(text);
}
