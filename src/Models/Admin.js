import { Usuario } from "./Usuario";

export class Administrador extends Usuario {
  constructor(profile, tokens) {
    super(profile, tokens);
    this.tipo = "admin";
  }

  async obtenerCategorias() {
    return await this.fetchAPI("https://tu-api.amazonaws.com/admin/categorias");
  }

  async crearCategoria(nombre) {
    return await this.fetchAPI("https://tu-api.amazonaws.com/admin/categorias", "POST", { nombre });
  }

  async obtenerDepartamentos() {
    return await this.fetchAPI("https://tu-api.amazonaws.com/admin/departamentos");
  }
}
