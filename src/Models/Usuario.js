// src/models/Usuario.js
export default class Usuario {
  constructor(profile, idToken, accessToken) {
    this.id = profile?.sub || null;
    this.nombre = profile?.name || null;
    this.email = profile?.email || null;
    this.telefono = profile?.phone_number || null;
    this.grupos = profile["cognito:groups"] || []; // Si el usuario pertenece a un grupo (admin, cliente)
    this.idToken = idToken;
    this.accessToken = accessToken;
  }

  esAdmin() {
    return this.grupos.includes("admin");
  }

  esCliente() {
    return this.grupos.includes("cliente");
  }

  obtenerToken() {
    return this.accessToken;
  }

  info() {
    return {
      id: this.id,
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      grupos: this.grupos,
    };
  }
}
