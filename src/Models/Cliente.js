import { Usuario } from "./Usuario";

const API_BASE = "https://hvuvmhndcb.execute-api.us-east-2.amazonaws.com/prod";

export class Cliente extends Usuario {
  constructor(profile, tokens) {
    super(profile, tokens);
    this.tipo = "cliente";
  }

  // 🧩 Obtener perfil del cliente
  async obtenerPerfil() {
    console.log("📡 Solicitando perfil del cliente...");
    return await this.fetchAPI(`${API_BASE}/cliente/perfil`);
  }

  // ✏️ Actualizar perfil del cliente
  async actualizarPerfil(datos) {
    console.log("📡 Enviando actualización de perfil...");
    return await this.fetchAPI(`${API_BASE}/cliente/perfil`, "PUT", datos);
  }

  // 📦 Listar pedidos del cliente (si lo agregas después)
  async obtenerPedidos() {
    console.log("📡 Obteniendo pedidos del cliente...");
    return await this.fetchAPI(`${API_BASE}/cliente/pedidos`);
  }
}
