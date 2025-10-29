import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Package, Search, X } from 'lucide-react';
import './AdminDepartamentos.css'; // Importar el CSS

export default function AdminDepartamentos() {
  const [departamentos, setDepartamentos] = useState([
    {
      id: 1,
      codigo: 'HUI',
      nombre: 'Huipiles',
      descripcion: 'Prendas tradicionales femeninas bordadas a mano',
      activo: true,
      imagen: '',
      totalProductos: 8
    },
    {
      id: 2,
      codigo: 'BOR',
      nombre: 'Bordados',
      descripcion: 'Textiles con técnicas de bordado tradicional oaxaqueño',
      activo: true,
      imagen: '',
      totalProductos: 6
    },
    {
      id: 3,
      codigo: 'REB',
      nombre: 'Rebozos',
      descripcion: 'Textiles versátiles tejidos en telar de pedal',
      activo: true,
      imagen: '',
      totalProductos: 5
    },
    {
      id: 4,
      codigo: 'ACC',
      nombre: 'Accesorios',
      descripcion: 'Bolsas, carteras y accesorios tejidos artesanalmente',
      activo: false,
      imagen: '',
      totalProductos: 4
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    activo: true,
    imagen: ''
  });

  const handleOpenModal = (dept = null) => {
    if (dept) {
      setEditingDept(dept);
      setFormData({
        codigo: dept.codigo,
        nombre: dept.nombre,
        descripcion: dept.descripcion,
        activo: dept.activo,
        imagen: dept.imagen
      });
    } else {
      setEditingDept(null);
      setFormData({
        codigo: '',
        nombre: '',
        descripcion: '',
        activo: true,
        imagen: ''
      });
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingDept(null);
    setFormData({
      codigo: '',
      nombre: '',
      descripcion: '',
      activo: true,
      imagen: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingDept) {
      setDepartamentos(departamentos.map(d => 
        d.id === editingDept.id 
          ? { ...d, ...formData }
          : d
      ));
    } else {
      const newDept = {
        id: Math.max(...departamentos.map(d => d.id)) + 1,
        ...formData,
        totalProductos: 0
      };
      setDepartamentos([...departamentos, newDept]);
    }
    
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este departamento?')) {
      setDepartamentos(departamentos.filter(d => d.id !== id));
    }
  };

  const handleToggleActive = (id) => {
    setDepartamentos(departamentos.map(d =>
      d.id === id ? { ...d, activo: !d.activo } : d
    ));
  };

  const filteredDepartamentos = departamentos.filter(d =>
    d.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.codigo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statsData = {
    total: departamentos.length,
    activos: departamentos.filter(d => d.activo).length,
    inactivos: departamentos.filter(d => !d.activo).length,
    totalProductos: departamentos.reduce((sum, d) => sum + d.totalProductos, 0)
  };

  return (
    <div className="admin-departamentos">
      <div className="admin-departamentos__header">
        <div className="admin-departamentos__header-content">
          <div className="admin-departamentos__header-flex">
            <div>
              <h1 className="admin-departamentos__title">Gestión de Departamentos</h1>
              <p className="admin-departamentos__subtitle">Administra los departamentos de productos de Raíz Oaxaca</p>
            </div>
            <button
              onClick={() => handleOpenModal()}
              className="admin-departamentos__btn-new"
            >
              <Plus className="w-5 h-5" />
              Nuevo Departamento
            </button>
          </div>
        </div>
      </div>

      <div className="admin-departamentos__main">
        <div className="admin-departamentos__stats">
          <div className="admin-departamentos__stat-card">
            <div className="admin-departamentos__stat-flex">
              <div>
                <p className="admin-departamentos__stat-label">Total Productos</p>
                <p className="admin-departamentos__stat-value admin-departamentos__stat-value--purple">{statsData.totalProductos}</p>
              </div>
              <div className="admin-departamentos__stat-icon admin-departamentos__stat-icon--purple">
                <Package />
              </div>
            </div>
          </div>
        </div>

        <div className="admin-departamentos__search-box">
          <div className="admin-departamentos__search-wrapper">
            <Search className="admin-departamentos__search-icon" />
            <input
              type="text"
              placeholder="Buscar departamentos por nombre o código..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="admin-departamentos__search-input"
            />
          </div>
        </div>

        <div className="admin-departamentos__grid">
          {filteredDepartamentos.map((dept) => (
            <div
              key={dept.id}
              className="admin-departamentos__card"
            >
              <div className="admin-departamentos__card-image-wrapper">
                <img
                  src={dept.imagen}
                  alt={dept.nombre}
                  className="admin-departamentos__card-image"
                />
                <div className="admin-departamentos__card-badges">
                  <span className={`admin-departamentos__card-badge ${
                    dept.activo 
                      ? 'admin-departamentos__card-badge--active' 
                      : 'admin-departamentos__card-badge--inactive'
                  }`}>
                    {dept.activo ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
              </div>

              <div className="admin-departamentos__card-body">
                <div className="admin-departamentos__card-header">
                  <div>
                    <span className="admin-departamentos__card-code">
                      {dept.codigo}
                    </span>
                    <h3 className="admin-departamentos__card-name">{dept.nombre}</h3>
                  </div>
                </div>

                <p className="admin-departamentos__card-desc">
                  {dept.descripcion}
                </p>

                <div className="admin-departamentos__card-stats">
                  <div className="admin-departamentos__card-stat">
                    <p className="admin-departamentos__card-stat-value">{dept.totalProductos}</p>
                    <p className="admin-departamentos__card-stat-label">Productos</p>
                  </div>
                </div>

                <div className="admin-departamentos__card-actions">
                  <button
                    onClick={() => handleOpenModal(dept)}
                    className="admin-departamentos__action-btn admin-departamentos__action-btn--edit"
                  >
                    <Edit className="w-4 h-4" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleToggleActive(dept.id)}
                    className={`admin-departamentos__action-btn ${
                      dept.activo
                        ? 'admin-departamentos__action-btn--toggle'
                        : 'admin-departamentos__action-btn--activate'
                    }`}
                  >
                    {dept.activo ? 'Desactivar' : 'Activar'}
                  </button>
                  <button
                    onClick={() => handleDelete(dept.id)}
                    className="admin-departamentos__action-btn admin-departamentos__action-btn--delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDepartamentos.length === 0 && (
          <div className="admin-departamentos__empty">
            <Package className="admin-departamentos__empty-icon" />
            <h3 className="admin-departamentos__empty-title">No se encontraron departamentos</h3>
            <p className="admin-departamentos__empty-text">Intenta con otro término de búsqueda</p>
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="admin-departamentos__modal-overlay">
          <div className="admin-departamentos__modal">
            <div className="admin-departamentos__modal-header">
              <h2 className="admin-departamentos__modal-title">
                {editingDept ? 'Editar Departamento' : 'Nuevo Departamento'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="admin-departamentos__modal-close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="admin-departamentos__modal-body">
              <div className="admin-departamentos__form-group">
                <label className="admin-departamentos__form-label">
                  Código *
                </label>
                <input
                  type="text"
                  required
                  maxLength={3}
                  value={formData.codigo}
                  onChange={(e) => setFormData({ ...formData, codigo: e.target.value.toUpperCase() })}
                  className="admin-departamentos__form-input"
                  placeholder="HUI"
                />
                <p className="admin-departamentos__form-hint">Máximo 3 caracteres</p>
              </div>

              <div className="admin-departamentos__form-group">
                <label className="admin-departamentos__form-label">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="admin-departamentos__form-input"
                  placeholder="Huipiles"
                />
              </div>

              <div className="admin-departamentos__form-group">
                <label className="admin-departamentos__form-label">
                  Descripción *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  className="admin-departamentos__form-textarea"
                  placeholder="Describe el departamento..."
                />
              </div>

              <div className="admin-departamentos__form-group">
                <label className="admin-departamentos__form-label">
                  URL de Imagen *
                </label>
                <input
                  type="url"
                  required
                  value={formData.imagen}
                  onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
                  className="admin-departamentos__form-input"
                  placeholder="https://..."
                />
              </div>

              <div className="admin-departamentos__checkbox-group">
                <input
                  type="checkbox"
                  id="activo"
                  checked={formData.activo}
                  onChange={(e) => setFormData({ ...formData, activo: e.target.checked })}
                  className="admin-departamentos__checkbox"
                />
                <label htmlFor="activo" className="admin-departamentos__form-label">
                  Departamento activo
                </label>
              </div>

              <div className="admin-departamentos__modal-actions">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="admin-departamentos__btn-cancel"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="admin-departamentos__btn-submit"
                >
                  {editingDept ? 'Actualizar' : 'Crear'} Departamento
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}