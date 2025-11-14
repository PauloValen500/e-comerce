// src/Models/Usuario.js
export class Usuario {
  constructor(profile, tokens) {
    this.id = profile.sub || profile["cognito:username"];
    this.email = profile.email;
    this.nombre = profile.name || "No especificado";
    this.telefono = profile.phone_number || "No especificado";
    this.verificado =
      profile.email_verified === "true" || profile.email_verified === true;
    this.roles = profile["cognito:groups"] || ["cliente"];
    this.tokens = tokens;
  }

  esAdmin() {
    return this.roles.includes("admin");
  }

  esCliente() {
    return this.roles.includes("cliente");
  }

  // ✅ Enviar id_token al backend (no access_token)
  getToken() {
    const token = this.tokens?.id_token || "";
    console.log("🟢 Enviando id_token al backend");
    return token;
  }

  async fetchAPI(endpoint, method = "GET", body = null) {
    const token = this.getToken();

    // Mostrar tipo de token
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("🧩 Tipo de token:", payload.token_use);
      console.log("📅 Expira:", new Date(payload.exp * 1000).toLocaleString());
    } catch (err) {
      console.warn("⚠️ No se pudo decodificar el token");
    }

    console.log(`🔍 [fetchAPI] ${method} ${endpoint}`);
    console.log(`🔑 Token enviado (primeros 50): ${token.slice(0, 50)}...`);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const res = await fetch(endpoint, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const text = await res.text();
    console.log("📡 Respuesta HTTP:", res.status);
    console.log("📦 Respuesta RAW del backend:", text);

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${text}`);
    }

    return JSON.parse(text);
  }
}
