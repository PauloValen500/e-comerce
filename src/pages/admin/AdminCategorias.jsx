import React, { useState } from 'react';
import { Plus, Edit, Trash2, Filter, Search, X, Tag, ShoppingBag } from 'lucide-react';
import './AdminCategorias.css'; // Importar el CSS

export default function AdminCategorias() {
  const [categorias, setCategorias] = useState([
    {
      id: 1,
      nombre: 'Mujer',
      activo: true,
      totalProductos: 18
    },
    {
      id: 2,
      nombre: 'Hombre',
      activo: true,
      totalProductos: 12
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
      departamento: 'Huipiles',
      tecnica: 'Bordado a mano',
      origen: 'Teotitlán del Valle',
      materiales: 'Algodón, hilo de seda',
      imagen: ''
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
      departamento: 'Bordados',
      tecnica: 'Bordado punto de cruz',
      origen: 'San Antonino Castillo Velasco',
      materiales: 'Manta de algodón',
      imagen: ''
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
      departamento: 'Huipiles',
      tecnica: 'Bordado tradicional',
      origen: 'Yalalag',
      materiales: 'Terciopelo, hilo metálico',
      imagen: ''
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
      departamento: 'Rebozos',
      tecnica: 'Telar de pedal',
      origen: 'Santo Tomás Jalieza',
      materiales: 'Algodón 100%',
      imagen: ''
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
      departamento: 'Bordados',
      tecnica: 'Bordado artesanal',
      origen: 'Oaxaca de Juárez',
      materiales: 'Lino, hilo de algodón',
      imagen: ''
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
      departamento: 'Bordados',
      tecnica: 'Bordado de flores',
      origen: 'Juchitán de Zaragoza',
      materiales: 'Satín, hilo de colores',
      imagen: ''
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
      departamento: 'Bordados',
      tecnica: 'Bordado simple',
      origen: 'San Antonino',
      materiales: 'Manta de algodón',
      imagen: ''
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
      departamento: 'Textiles para el Hogar',
      tecnica: 'Tejido en telar',
      origen: 'Teotitlán del Valle',
      materiales: 'Lana virgen',
      imagen: ''
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCat, setEditingCat] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    activo: true
  });

  const handleOpenModal = (cat = null) => {
    if (cat) {
      setEditingCat(cat);
      setFormData({
        nombre: cat.nombre,
        activo: cat.activo
      });
    } else {
      setEditingCat(null);
      setFormData({
        nombre: '',
        activo: true
      });
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingCat(null);
    setFormData({
      nombre: '',
      activo: true
    });
  };

  const handleSubmit = () => {
    if (editingCat) {
      setCategorias(categorias.map(c => 
        c.id === editingCat.id 
          ? { ...c, ...formData }
          : c
      ));
    } else {
      const newCat = {
        id: Math.max(...categorias.map(c => c.id)) + 1,
        ...formData,
        totalProductos: 0
      };
      setCategorias([...categorias, newCat]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta categoría?')) {
      setCategorias(categorias.filter(c => c.id !== id));
    }
  };

  const handleToggleActive = (id) => {
    setCategorias(categorias.map(c =>
      c.id === id ? { ...c, activo: !c.activo } : c
    ));
  };

  const filteredProductos = productos.filter(p => {
    const matchCategoria = selectedCategoria === 'todas' || p.categoriaId === parseInt(selectedCategoria);
    const matchSearch = p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       p.departamento.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategoria && matchSearch;
  });

  const statsData = {
    totalCategorias: categorias.length,
    categoriasActivas: categorias.filter(c => c.activo).length,
    totalProductos: productos.length,
    productosActivos: productos.filter(p => p.activo).length
  };

  return (
    <div className="admin-categorias">
      <div className="admin-categorias__header">
        <div className="admin-categorias__header-content">
          <div className="admin-categorias__header-flex">
            <div>
              <h1 className="admin-categorias__title">Gestión de Categorías</h1>
              <p className="admin-categorias__subtitle">Administra las categorías y visualiza productos asociados</p>
            </div>
            <button
              onClick={() => handleOpenModal()}
              className="admin-categorias__btn-new"
            >
              <Plus className="w-5 h-5" />
              Nueva Categoría
            </button>
          </div>
        </div>
      </div>

      <div className="admin-categorias__main">
        <div className="admin-categorias__stats">
          <div className="admin-categorias__stat-card">
            <div className="admin-categorias__stat-flex">
              <div>
                <p className="admin-categorias__stat-label">Total Categorías</p>
                <p className="admin-categorias__stat-value admin-categorias__stat-value--purple">{statsData.totalCategorias}</p>
              </div>
              <div className="admin-categorias__stat-icon admin-categorias__stat-icon--purple">
                <Tag />
              </div>
            </div>
          </div>

          <div className="admin-categorias__stat-card">
            <div className="admin-categorias__stat-flex">
              <div>
                <p className="admin-categorias__stat-label">Categorías Activas</p>
                <p className="admin-categorias__stat-value admin-categorias__stat-value--green">{statsData.categoriasActivas}</p>
              </div>
              <div className="admin-categorias__stat-icon admin-categorias__stat-icon--green">
                <Tag />
              </div>
            </div>
          </div>

          <div className="admin-categorias__stat-card">
            <div className="admin-categorias__stat-flex">
              <div>
                <p className="admin-categorias__stat-label">Total Productos</p>
                <p className="admin-categorias__stat-value admin-categorias__stat-value--blue">{statsData.totalProductos}</p>
              </div>
              <div className="admin-categorias__stat-icon admin-categorias__stat-icon--blue">
                <ShoppingBag />
              </div>
            </div>
          </div>

          <div className="admin-categorias__stat-card">
            <div className="admin-categorias__stat-flex">
              <div>
                <p className="admin-categorias__stat-label">Productos Activos</p>
                <p className="admin-categorias__stat-value admin-categorias__stat-value--teal">{statsData.productosActivos}</p>
              </div>
              <div className="admin-categorias__stat-icon admin-categorias__stat-icon--teal">
                <ShoppingBag />
              </div>
            </div>
          </div>
        </div>

        <div className="admin-categorias__grid">
          <div>
            <div className="admin-categorias__sidebar">
              <h3 className="admin-categorias__sidebar-title">Categorías</h3>
              <div className="admin-categorias__category-list">
                <button
                  onClick={() => setSelectedCategoria('todas')}
                  className={`admin-categorias__category-btn ${
                    selectedCategoria === 'todas' ? 'admin-categorias__category-btn--active' : ''
                  }`}
                >
                  <div className="admin-categorias__category-btn-flex">
                    <span>Todas las categorías</span>
                    <span className="admin-categorias__category-count">
                      {productos.length}
                    </span>
                  </div>
                </button>
                
                {categorias.map((cat) => (
                  <div key={cat.id} className="admin-categorias__category-item">
                    <button
                      onClick={() => setSelectedCategoria(cat.id.toString())}
                      className={`admin-categorias__category-btn ${
                        selectedCategoria === cat.id.toString() ? 'admin-categorias__category-btn--active' : ''
                      }`}
                    >
                      <div className="admin-categorias__category-btn-flex">
                        <div className="admin-categorias__category-name">
                          <span>{cat.nombre}</span>
                          {!cat.activo && (
                            <span className="admin-categorias__category-badge">
                              Inactiva
                            </span>
                          )}
                        </div>
                        <span className="admin-categorias__category-count">
                          {productos.filter(p => p.categoriaId === cat.id).length}
                        </span>
                      </div>
                    </button>
                    
                    <div className="admin-categorias__category-actions">
                      <button
                        onClick={() => handleOpenModal(cat)}
                        className="admin-categorias__action-btn admin-categorias__action-btn--edit"
                      >
                        <Edit className="w-3 h-3" />
                        Editar
                      </button>
                      <button
                        onClick={() => handleToggleActive(cat.id)}
                        className={`admin-categorias__action-btn ${
                          cat.activo
                            ? 'admin-categorias__action-btn--toggle'
                            : 'admin-categorias__action-btn--activate'
                        }`}
                      >
                        {cat.activo ? 'Desactivar' : 'Activar'}
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="admin-categorias__action-btn admin-categorias__action-btn--delete"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="admin-categorias__products">
            <div className="admin-categorias__search-box">
              <div className="admin-categorias__search-wrapper">
                <Search className="admin-categorias__search-icon" />
                <input
                  type="text"
                  placeholder="Buscar productos por nombre o departamento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="admin-categorias__search-input"
                />
              </div>
            </div>

            <div className="admin-categorias__products-grid">
              {filteredProductos.map((producto) => (
                <div
                  key={producto.id}
                  className="admin-categorias__product-card"
                >
                  <div className="admin-categorias__product-image-wrapper">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="admin-categorias__product-image"
                    />
                    <div className="admin-categorias__product-badges">
                      <span className={`admin-categorias__product-badge ${
                        producto.stock > 0
                          ? 'admin-categorias__product-badge--stock'
                          : 'admin-categorias__product-badge--out'
                      }`}>
                        {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
                      </span>
                      <span className="admin-categorias__product-badge admin-categorias__product-badge--category">
                        {producto.categoriaNombre}
                      </span>
                    </div>
                  </div>

                  <div className="admin-categorias__product-body">
                    <span className="admin-categorias__product-dept">
                      {producto.departamento}
                    </span>
                    
                    <h3 className="admin-categorias__product-name">
                      {producto.nombre}
                    </h3>
                    
                    <p className="admin-categorias__product-desc">
                      {producto.descripcion}
                    </p>

                    <div className="admin-categorias__product-details">
                      <div className="admin-categorias__product-detail">
                        <span className="admin-categorias__product-detail-label">Técnica:</span>
                        <span className="admin-categorias__product-detail-value">{producto.tecnica}</span>
                      </div>
                      <div className="admin-categorias__product-detail">
                        <span className="admin-categorias__product-detail-label">Origen:</span>
                        <span className="admin-categorias__product-detail-value">{producto.origen}</span>
                      </div>
                      <div className="admin-categorias__product-detail">
                        <span className="admin-categorias__product-detail-label">Materiales:</span>
                        <span className="admin-categorias__product-detail-value">{producto.materiales}</span>
                      </div>
                    </div>

                    <div className="admin-categorias__product-footer">
                      <div className="admin-categorias__product-price-wrapper">
                        <p className="admin-categorias__product-price">
                          ${producto.precio.toLocaleString('es-MX')}
                        </p>
                        <p className="admin-categorias__product-currency">MXN</p>
                      </div>
                      <button className="admin-categorias__product-btn">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProductos.length === 0 && (
              <div className="admin-categorias__empty">
                <ShoppingBag className="admin-categorias__empty-icon" />
                <h3 className="admin-categorias__empty-title">No se encontraron productos</h3>
                <p className="admin-categorias__empty-text">Intenta con otro filtro o término de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="admin-categorias__modal-overlay">
          <div className="admin-categorias__modal">
            <div className="admin-categorias__modal-header">
              <h2 className="admin-categorias__modal-title">
                {editingCat ? 'Editar Categoría' : 'Nueva Categoría'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="admin-categorias__modal-close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="admin-categorias__modal-body">
              <div className="admin-categorias__form-group">
                <label className="admin-categorias__form-label">
                  Nombre de Categoría *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="admin-categorias__form-input"
                  placeholder="Ej: Mujer, Hombre, Unisex..."
                />
              </div>

              <div className="admin-categorias__checkbox-group">
                <input
                  type="checkbox"
                  id="activo-cat"
                  checked={formData.activo}
                  onChange={(e) => setFormData({ ...formData, activo: e.target.checked })}
                  className="admin-categorias__checkbox"
                />
                <label htmlFor="activo-cat" className="admin-categorias__form-label">
                  Categoría activa
                </label>
              </div>

              <div className="admin-categorias__info-box">
                <p className="admin-categorias__info-text">
                  <strong>Nota:</strong> Las categorías te permiten organizar tus productos por género u otras clasificaciones. Los productos se pueden asignar a una categoría específica.
                </p>
              </div>

              <div className="admin-categorias__modal-actions">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="admin-categorias__btn-cancel"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="admin-categorias__btn-submit"
                >
                  {editingCat ? 'Actualizar' : 'Crear'} Categoría
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}