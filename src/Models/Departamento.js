/**
 * CLASE DEPARTAMENTO
 */

class Departamento {
  /**
   * Constructor de la clase Departamento
   * @param {number} departamento_id - ID único del departamento (PK)
   * @param {string} codigo - Código del departamento
   * @param {string} nombre - Nombre del departamento
   */
  constructor(departamento_id, codigo, nombre) {
    this.departamento_id = departamento_id;
    this.codigo = codigo;
    this.nombre = nombre;
  }

  /**
   * Crea un nuevo departamento
   * @param {string} codigo - Código del departamento
   * @param {string} nombre - Nombre del departamento
   * @returns {Departamento} Nueva instancia de Departamento
   * @throws {Error} Si los datos no son válidos
   */
  static crearDepartamento(codigo, nombre) {
    // Validaciones
    if (!codigo || codigo.trim() === '') {
      throw new Error('El código del departamento es obligatorio');
    }
    if (!nombre || nombre.trim() === '') {
      throw new Error('El nombre del departamento es obligatorio');
    }

    // En un caso real, el ID se genera en la base de datos
    const departamento_id = null;
    return new Departamento(departamento_id, codigo, nombre);
  }

  /**
   * Edita la información del departamento
   * @param {string} codigo - Nuevo código del departamento (opcional)
   * @param {string} nombre - Nuevo nombre del departamento (opcional)
   */
  editarDepartamento(codigo, nombre) {
    if (codigo && codigo.trim() !== '') {
      this.codigo = codigo;
    }
    if (nombre && nombre.trim() !== '') {
      this.nombre = nombre;
    }
  }

  /**
   * Obtiene la información del departamento en formato JSON
   * @returns {Object} Objeto con los datos del departamento
   */
  toJSON() {
    return {
      departamento_id: this.departamento_id,
      codigo: this.codigo,
      nombre: this.nombre
    };
  }

  /**
   * Valida los datos del departamento
   * @returns {boolean} true si los datos son válidos
   * @throws {Error} Si los datos no son válidos
   */
  validar() {
    if (!this.codigo || this.codigo.trim() === '') {
      throw new Error('El código del departamento no puede estar vacío');
    }
    if (!this.nombre || this.nombre.trim() === '') {
      throw new Error('El nombre del departamento no puede estar vacío');
    }
    return true;
  }

  /**
   * Obtiene una representación en string del departamento
   * @returns {string} Código y nombre del departamento
   */
  toString() {
    return ${this.codigo} - ${this.nombre};
  }
}