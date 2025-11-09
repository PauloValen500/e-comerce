import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, X, Package, ShoppingBag, Layers, MapPin, Scissors, Sparkles } from 'lucide-react';
import './AdminDepartamentos.css';

export default function AdminDepartamentos() {
  const [departamentos, setDepartamentos] = useState([
    {
      id: 1,
      codigo: 'HUI',
      nombre: 'Huipiles',
      descripcion: 'Prendas tradicionales femeninas bordadas a mano',
      activo: true,
      imagen: '',
      totalProductos: 3
    },
    {
      id: 2,
      codigo: 'BOR',
      nombre: 'Bordados',
      descripcion: 'Textiles con técnicas de bordado tradicional oaxaqueño',
      activo: true,
      imagen: '',
      totalProductos: 3
    },
    {
      id: 3,
      codigo: 'REB',
      nombre: 'Rebozos',
      descripcion: 'Textiles versátiles tejidos en telar de pedal',
      activo: true,
      imagen: '',
      totalProductos: 1
    },
    {
      id: 4,
      codigo: 'TEX',
      nombre: 'Textiles para el Hogar',
      descripcion: 'Textiles decorativos y funcionales para el hogar',
      activo: true,
      imagen: '',
      totalProductos: 1
    }
  ]);

  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Huipil Bordado Teotitlán',
      descripcion: 'Huipil tradicional con bordado floral de Teotitlán del Valle',
      precio: 2850,
      stock: 5,
      activo: true,
      categoriaId: 1,
      categoriaNombre: 'Mujer',
      departamentoId: 1,
      departamentoNombre: 'Huipiles',
      tecnica: 'Bordado a mano',
      origen: 'Teotitlán del Valle',
      materiales: 'Algodón, hilo de seda',
      imagen: 'https://placehold.co/800x800/e8f4f8/0369a1?text=Huipil+Bordado+Teotitlán'
    },
    {
      id: 2,
      nombre: 'Camisa Bordada Oaxaca',
      descripcion: 'Camisa tradicional con bordado geométrico',
      precio: 1850,
      stock: 8,
      activo: true,
      categoriaId: 2,
      categoriaNombre: 'Hombre',
      departamentoId: 2,
      departamentoNombre: 'Bordados',
      tecnica: 'Bordado punto de cruz',
      origen: 'San Antonino Castillo Velasco',
      materiales: 'Manta de algodón',
      imagen: 'https://placehold.co/800x800/e8f4f8/0369a1?text=Camisa+Bordada+Oaxaca'
    },
    {
      id: 3,
      nombre: 'Huipil Zapoteco Negro',
      descripcion: 'Huipil ceremonial con bordado tradicional zapoteco',
      precio: 3200,
      stock: 3,
      activo: true,
      categoriaId: 1,
      categoriaNombre: 'Mujer',
      departamentoId: 1,
      departamentoNombre: 'Huipiles',
      tecnica: 'Bordado tradicional',
      origen: 'Yalalag',
      materiales: 'Terciopelo, hilo metálico',
      imagen: 'https://placehold.co/800x800/e8f4f8/0369a1?text=Huipil+Zapoteco+Negro'
    },
    {
      id: 4,
      nombre: 'Rebozo de Algodón',
      descripcion: 'Rebozo tejido en telar de pedal con diseños tradicionales',
      precio: 1650,
      stock: 6,
      activo: true,
      categoriaId: 1,
      categoriaNombre: 'Mujer',
      departamentoId: 3,
      departamentoNombre: 'Rebozos',
      tecnica: 'Telar de pedal',
      origen: 'Santo Tomás Jalieza',
      materiales: 'Algodón 100%',
      imagen: 'https://placehold.co/800x800/e8f4f8/0369a1?text=Rebozo+de+Algodón'
    },
    {
      id: 5,
      nombre: 'Guayabera Bordada',
      descripcion: 'Guayabera tradicional con detalles bordados',
      precio: 1950,
      stock: 7,
      activo: true,
      categoriaId: 2,
      categoriaNombre: 'Hombre',
      departamentoId: 2,
      departamentoNombre: 'Bordados',
      tecnica: 'Bordado artesanal',
      origen: 'Oaxaca de Juárez',
      materiales: 'Lino, hilo de algodón',
      imagen: 'https://placehold.co/800x800/e8f4f8/0369a1?text=Guayabera+Bordada'
    },
    {
      id: 6,
      nombre: 'Blusa Tehuana Roja',
      descripcion: 'Blusa tradicional istmeña con flores bordadas',
      precio: 2450,
      stock: 4,
      activo: true,
      categoriaId: 1,
      categoriaNombre: 'Mujer',
      departamentoId: 2,
      departamentoNombre: 'Bordados',
      tecnica: 'Bordado de flores',
      origen: 'Juchitán de Zaragoza',
      materiales: 'Satín, hilo de colores',
      imagen: 'https://placehold.co/800x800/e8f4f8/0369a1?text=Blusa+Tehuana+Roja'
    },
    {
      id: 7,
      nombre: 'Camisa Artesanal Blanca',
      descripcion: 'Camisa de manta con bordado minimalista',
      precio: 1550,
      stock: 0,
      activo: false,
      categoriaId: 2,
      categoriaNombre: 'Hombre',
      departamentoId: 2,
      departamentoNombre: 'Bordados',
      tecnica: 'Bordado simple',
      origen: 'San Antonino',
      materiales: 'Manta de algodón',
      imagen: 'https://placehold.co/800x800/e8f4f8/0369a1?text=Camisa+Artesanal+Blanca'
    },
    {
      id: 8,
      nombre: 'Enredo Zapoteco',
      descripcion: 'Falda tradicional zapoteca tejida a mano',
      precio: 2100,
      stock: 5,
      activo: true,
      categoriaId: 1,
      categoriaNombre: 'Mujer',
      departamentoId: 4,
      departamentoNombre: 'Textiles para el Hogar',
      tecnica: 'Tejido en telar',
      origen: 'Teotitlán del Valle',
      materiales: 'Lana virgen',
      imagen: 'https://placehold.co/800x800/e8f4f8/0369a1?text=Enredo+Zapoteco'
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [stockModalOpen, setStockModalOpen] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [selectedDepartamento, setSelectedDepartamento] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    activo: true,
    imagen: ''
  });
  const [stockForm, setStockForm] = useState({ stock: 0, activo: true });

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

  const handleVerDetalles = (producto) => {
    setProductoSeleccionado(producto);
    setDetalleModalOpen(true);
  };

  const handleGestionarStock = (producto) => {
    setProductoSeleccionado(producto);
    setStockForm({ stock: producto.stock, activo: producto.activo });
    setStockModalOpen(true);
  };

  const handleActualizarStock = () => {
    setProductos(productos.map(p => 
      p.id === productoSeleccionado.id 
        ? { ...p, ...stockForm }
        : p
    ));
    setStockModalOpen(false);
    setProductoSeleccionado(null);
  };

  const filteredProductos = productos.filter(p => {
    const matchDepartamento = selectedDepartamento === 'todos' || p.departamentoId === parseInt(selectedDepartamento);
    const matchSearch = p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       p.departamentoNombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchDepartamento && matchSearch;
  });

  const statsData = {
    totalDepartamentos: departamentos.length,
    departamentosActivos: departamentos.filter(d => d.activo).length,
    totalProductos: productos.length,
    productosActivos: productos.filter(p => p.activo).length
  };

  return (
    <div className="admin-departamentos">
      <div className="admin-departamentos__header">
        <div className="admin-departamentos__header-content">
          <div className="admin-departamentos__header-flex">
            <div>
              <h1 className="admin-departamentos__title">Gestión de Departamentos</h1>
              <p className="admin-departamentos__subtitle">Administra los departamentos y visualiza productos asociados</p>
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
                <p className="admin-departamentos__stat-label">Total Departamentos</p>
                <p className="admin-departamentos__stat-value admin-departamentos__stat-value--default">{statsData.totalDepartamentos}</p>
              </div>
              <div className="admin-departamentos__stat-icon admin-departamentos__stat-icon--blue">
                <Layers />
              </div>
            </div>
          </div>

          <div className="admin-departamentos__stat-card">
            <div className="admin-departamentos__stat-flex">
              <div>
                <p className="admin-departamentos__stat-label">Departamentos Activos</p>
                <p className="admin-departamentos__stat-value admin-departamentos__stat-value--green">{statsData.departamentosActivos}</p>
              </div>
              <div className="admin-departamentos__stat-icon admin-departamentos__stat-icon--green">
                <Layers />
              </div>
            </div>
          </div>

          <div className="admin-departamentos__stat-card">
            <div className="admin-departamentos__stat-flex">
              <div>
                <p className="admin-departamentos__stat-label">Total Productos</p>
                <p className="admin-departamentos__stat-value admin-departamentos__stat-value--purple">{statsData.totalProductos}</p>
              </div>
              <div className="admin-departamentos__stat-icon admin-departamentos__stat-icon--purple">
                <ShoppingBag />
              </div>
            </div>
          </div>

          <div className="admin-departamentos__stat-card">
            <div className="admin-departamentos__stat-flex">
              <div>
                <p className="admin-departamentos__stat-label">Productos Activos</p>
                <p className="admin-departamentos__stat-value admin-departamentos__stat-value--amber">{statsData.productosActivos}</p>
              </div>
              <div className="admin-departamentos__stat-icon admin-departamentos__stat-icon--amber">
                <ShoppingBag />
              </div>
            </div>
          </div>
        </div>

        <div className="admin-departamentos__grid">
          <div>
            <div className="admin-departamentos__sidebar">
              <h3 className="admin-departamentos__sidebar-title">Departamentos</h3>
              <div className="admin-departamentos__department-list">
                <button
                  onClick={() => setSelectedDepartamento('todos')}
                  className={`admin-departamentos__department-btn ${
                    selectedDepartamento === 'todos' ? 'admin-departamentos__department-btn--active' : ''
                  }`}
                >
                  <div className="admin-departamentos__department-btn-flex">
                    <span>Todos los departamentos</span>
                    <span className="admin-departamentos__department-count">
                      {productos.length}
                    </span>
                  </div>
                </button>
                
                {departamentos.map((dept) => (
                  <div key={dept.id} className="admin-departamentos__department-item">
                    <button
                      onClick={() => setSelectedDepartamento(dept.id.toString())}
                      className={`admin-departamentos__department-btn ${
                        selectedDepartamento === dept.id.toString() ? 'admin-departamentos__department-btn--active' : ''
                      }`}
                    >
                      <div className="admin-departamentos__department-btn-flex">
                        <div className="admin-departamentos__department-name">
                          <span>{dept.nombre}</span>
                          {!dept.activo && (
                            <span className="admin-departamentos__department-badge">
                              Inactivo
                            </span>
                          )}
                        </div>
                        <span className="admin-departamentos__department-count">
                          {productos.filter(p => p.departamentoId === dept.id).length}
                        </span>
                      </div>
                    </button>
                    
                    <div className="admin-departamentos__department-actions">
                      <button
                        onClick={() => handleOpenModal(dept)}
                        className="admin-departamentos__action-btn admin-departamentos__action-btn--edit"
                      >
                        <Edit className="w-3 h-3" />
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
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="admin-departamentos__products">
            <div className="admin-departamentos__search-box">
              <div className="admin-departamentos__search-wrapper">
                <Search className="admin-departamentos__search-icon" />
                <input
                  type="text"
                  placeholder="Buscar productos por nombre o departamento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="admin-departamentos__search-input"
                />
              </div>
            </div>

            <div className="admin-departamentos__products-grid">
              {filteredProductos.map((producto) => (
                <div
                  key={producto.id}
                  className="admin-departamentos__product-card"
                >
                  <div className="admin-departamentos__product-image-wrapper">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="admin-departamentos__product-image"
                    />
                    <div className="admin-departamentos__product-badges">
                      <span className={`admin-departamentos__product-badge ${
                        producto.stock > 0
                          ? 'admin-departamentos__product-badge--stock'
                          : 'admin-departamentos__product-badge--out'
                      }`}>
                        {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
                      </span>
                      <span className="admin-departamentos__product-badge admin-departamentos__product-badge--category">
                        {producto.categoriaNombre}
                      </span>
                    </div>
                  </div>

                  <div className="admin-departamentos__product-body">
                    <span className="admin-departamentos__product-dept">
                      {producto.departamentoNombre}
                    </span>
                    
                    <h3 className="admin-departamentos__product-name">
                      {producto.nombre}
                    </h3>
                    
                    <p className="admin-departamentos__product-desc">
                      {producto.descripcion}
                    </p>

                    <div className="admin-departamentos__product-details">
                      <div className="admin-departamentos__product-detail">
                        <span className="admin-departamentos__product-detail-label">Técnica:</span>
                        <span className="admin-departamentos__product-detail-value">{producto.tecnica}</span>
                      </div>
                      <div className="admin-departamentos__product-detail">
                        <span className="admin-departamentos__product-detail-label">Origen:</span>
                        <span className="admin-departamentos__product-detail-value">{producto.origen}</span>
                      </div>
                      <div className="admin-departamentos__product-detail">
                        <span className="admin-departamentos__product-detail-label">Materiales:</span>
                        <span className="admin-departamentos__product-detail-value">{producto.materiales}</span>
                      </div>
                    </div>

                    <div className="admin-departamentos__product-footer">
                      <div className="admin-departamentos__product-price-wrapper">
                        <p className="admin-departamentos__product-price">
                          ${producto.precio.toLocaleString('es-MX')}
                        </p>
                        <p className="admin-departamentos__product-currency">MXN</p>
                      </div>
                      <button 
                        onClick={() => handleVerDetalles(producto)}
                        className="admin-departamentos__product-btn"
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProductos.length === 0 && (
              <div className="admin-departamentos__empty">
                <ShoppingBag className="admin-departamentos__empty-icon" />
                <h3 className="admin-departamentos__empty-title">No se encontraron productos</h3>
                <p className="admin-departamentos__empty-text">Intenta con otro filtro o término de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Departamento */}
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

      {/* Modal Detalle Producto */}
      {detalleModalOpen && productoSeleccionado && (
        <div className="admin-departamentos__modal-overlay" style={{zIndex: 60}}>
          <div className="admin-departamentos__modal" style={{maxWidth: '900px'}}>
            <div className="admin-departamentos__modal-header">
              <h2 className="admin-departamentos__modal-title">Detalles del Producto</h2>
              <button onClick={() => setDetalleModalOpen(false)} className="admin-departamentos__modal-close">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="admin-departamentos__modal-body">
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                <div>
                  <img 
                    src={productoSeleccionado.imagen} 
                    alt={productoSeleccionado.nombre}
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: '0.75rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <div style={{marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                    <span className={`admin-departamentos__product-badge ${productoSeleccionado.stock > 0 ? 'admin-departamentos__product-badge--stock' : 'admin-departamentos__product-badge--out'}`}>
                      {productoSeleccionado.stock > 0 ? `Stock: ${productoSeleccionado.stock}` : 'AGOTADO'}
                    </span>
                    <span className="admin-departamentos__product-badge admin-departamentos__product-badge--category">
                      {productoSeleccionado.categoriaNombre}
                    </span>
                    <span className="admin-departamentos__product-dept">
                      {productoSeleccionado.departamentoNombre}
                    </span>
                  </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                  <div>
                    <h3 style={{fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: '0 0 0.5rem 0'}}>
                      {productoSeleccionado.nombre}
                    </h3>
                    <p style={{fontSize: '1rem', color: 'var(--color-text)', lineHeight: '1.6'}}>
                      {productoSeleccionado.descripcion}
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--color-light)',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--color-background)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
                      <Scissors style={{width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)'}} />
                      <div>
                        <p style={{fontSize: '0.75rem', color: 'var(--color-text)', margin: 0}}>Técnica</p>
                        <p style={{fontSize: '1rem', fontWeight: '600', color: 'var(--color-dark)', margin: 0}}>
                          {productoSeleccionado.tecnica}
                        </p>
                      </div>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
                      <MapPin style={{width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)'}} />
                      <div>
                        <p style={{fontSize: '0.75rem', color: 'var(--color-text)', margin: 0}}>Origen</p>
                        <p style={{fontSize: '1rem', fontWeight: '600', color: 'var(--color-dark)', margin: 0}}>
                          {productoSeleccionado.origen}
                        </p>
                      </div>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                      <Sparkles style={{width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)'}} />
                      <div>
                        <p style={{fontSize: '0.75rem', color: 'var(--color-text)', margin: 0}}>Materiales</p>
                        <p style={{fontSize: '1rem', fontWeight: '600', color: 'var(--color-dark)', margin: 0}}>
                          {productoSeleccionado.materiales}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, var(--color-accent-light), var(--color-accent))',
                    borderRadius: '0.75rem'
                  }}>
                    <div>
                      <p style={{fontSize: '0.875rem', color: 'white', opacity: 0.9, margin: 0}}>Precio</p>
                      <p style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'white', margin: 0}}>
                        ${productoSeleccionado.precio.toLocaleString('es-MX')}
                      </p>
                      <p style={{fontSize: '0.875rem', color: 'white', opacity: 0.8, margin: 0}}>MXN</p>
                    </div>
                    <Package style={{width: '3rem', height: '3rem', color: 'white', opacity: 0.3}} />
                  </div>

                  <button
                    onClick={() => {
                      setDetalleModalOpen(false);
                      handleGestionarStock(productoSeleccionado);
                    }}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'linear-gradient(to right, var(--color-accent), #2563eb)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      fontWeight: '600',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <Package style={{width: '1.25rem', height: '1.25rem'}} />
                    Gestionar Stock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Gestión de Stock */}
      {stockModalOpen && productoSeleccionado && (
        <div className="admin-departamentos__modal-overlay" style={{zIndex: 70}}>
          <div className="admin-departamentos__modal">
            <div className="admin-departamentos__modal-header">
              <h2 className="admin-departamentos__modal-title">Gestión de Stock</h2>
              <button onClick={() => setStockModalOpen(false)} className="admin-departamentos__modal-close">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="admin-departamentos__modal-body">
              <div style={{
                background: 'var(--color-light)',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                border: '1px solid var(--color-background)'
              }}>
                <h4 style={{margin: '0 0 0.5rem 0', fontWeight: '600', color: 'var(--color-dark)'}}>
                  {productoSeleccionado.nombre}
                </h4>
                <p style={{margin: 0, fontSize: '0.875rem', color: 'var(--color-text)'}}>
                  Departamento: {productoSeleccionado.departamentoNombre} • Categoría: {productoSeleccionado.categoriaNombre}
                </p>
              </div>

              <div className="admin-departamentos__form-group">
                <label className="admin-departamentos__form-label">
                  Stock Disponible *
                </label>
                <input
                  type="number"
                  min="0"
                  value={stockForm.stock}
                  onChange={(e) => setStockForm({ ...stockForm, stock: parseInt(e.target.value) || 0 })}
                  className="admin-departamentos__form-input"
                  placeholder="0"
                />
                <p className="admin-departamentos__form-hint">
                  El producto se mostrará como "AGOTADO" automáticamente cuando el stock sea 0
                </p>
              </div>

              <div className="admin-departamentos__checkbox-group">
                <input
                  type="checkbox"
                  id="activo-producto"
                  checked={stockForm.activo}
                  onChange={(e) => setStockForm({ ...stockForm, activo: e.target.checked })}
                  className="admin-departamentos__checkbox"
                />
                <label htmlFor="activo-producto" className="admin-departamentos__form-label">
                  Producto activo (visible en el catálogo)
                </label>
              </div>

              <div style={{
                background: 'rgba(59, 130, 246, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '0.5rem',
                padding: '1rem'
              }}>
                <p style={{margin: 0, fontSize: '0.875rem', color: 'var(--color-text)'}}>
                  <strong>Estado Automático:</strong> El sistema detecta automáticamente cuando un producto está agotado (stock = 0).
                  Puedes desactivar manualmente un producto aunque tenga stock disponible.
                </p>
              </div>

              <div style={{
                background: stockForm.stock === 0 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: `1px solid ${stockForm.stock === 0 ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                marginTop: '1rem'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: stockForm.stock === 0 ? '#ef4444' : '#10b981'
                }}>
                  Estado actual: {stockForm.stock === 0 ? 'AGOTADO' : `${stockForm.stock} unidades disponibles`}
                </p>
              </div>

              <div className="admin-departamentos__modal-actions">
                <button
                  type="button"
                  onClick={() => setStockModalOpen(false)}
                  className="admin-departamentos__btn-cancel"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleActualizarStock}
                  className="admin-departamentos__btn-submit"
                >
                  Actualizar Stock
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}