/**
 * CLASE CATEGORIA
 */

class Categoria {
  /**
   * Constructor de la clase Categoria
   * @param {number} categoria_id - ID único de la categoría (PK)
   * @param {string} nombre - Nombre de la categoría
   * @param {boolean} activo - Estado de la categoría (activa/inactiva)
   */
  constructor(categoria_id, nombre, activo = true) {
    this.categoria_id = categoria_id;
    this.nombre = nombre;
    this.activo = activo;
  }

  /**
   * Crea una nueva categoría
   * @param {string} nombre - Nombre de la categoría
   * @param {boolean} activo - Estado de la categoría (por defecto true)
   * @returns {Categoria} Nueva instancia de Categoria
   * @throws {Error} Si los datos no son válidos
   */
  static crearCategoria(nombre, activo = true) {
    // Validaciones
    if (!nombre || nombre.trim() === '') {
      throw new Error('El nombre de la categoría es obligatorio');
    }

    if (nombre.trim().length < 3) {
      throw new Error('El nombre de la categoría debe tener al menos 3 caracteres');
    }

    // En un caso real, el ID se genera en la base de datos
    const categoria_id = null;
    return new Categoria(categoria_id, nombre, activo);
  }

  /**
   * Edita la información de la categoría
   * @param {string} nombre - Nuevo nombre de la categoría (opcional)
   * @param {boolean} activo - Nuevo estado de la categoría (opcional)
   */
  editarCategoria(nombre, activo) {
    if (nombre && nombre.trim() !== '') {
      if (nombre.trim().length < 3) {
        throw new Error('El nombre de la categoría debe tener al menos 3 caracteres');
      }
      this.nombre = nombre;
    }
    if (typeof activo === 'boolean') {
      this.activo = activo;
    }
  }

  /**
   * Activa la categoría
   */
  activar() {
    this.activo = true;
  }

  /**
   * Desactiva la categoría
   */
  desactivar() {
    this.activo = false;
  }

  /**
   * Verifica si la categoría está activa
   * @returns {boolean} true si está activa, false si está inactiva
   */
  estaActiva() {
    return this.activo;
  }

  /**
   * Obtiene la información de la categoría en formato JSON
   * @returns {Object} Objeto con los datos de la categoría
   */
  toJSON() {
    return {
      categoria_id: this.categoria_id,
      nombre: this.nombre,
      activo: this.activo
    };
  }

  /**
   * Valida los datos de la categoría
   * @returns {boolean} true si los datos son válidos
   * @throws {Error} Si los datos no son válidos
   */
  validar() {
    if (!this.nombre || this.nombre.trim() === '') {
      throw new Error('El nombre de la categoría no puede estar vacío');
    }
    if (this.nombre.trim().length < 3) {
      throw new Error('El nombre de la categoría debe tener al menos 3 caracteres');
    }
    if (typeof this.activo !== 'boolean') {
      throw new Error('El estado activo debe ser un valor booleano');
    }
    return true;
  }

  /**
   * Obtiene una representación en string de la categoría
   * @returns {string} Nombre de la categoría con su estado
   */
  toString() {
    const estado = this.activo ? 'Activa' : 'Inactiva';
    return ${this.nombre} (${estado});
  }
}