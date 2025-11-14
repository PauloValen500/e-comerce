import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, X, Tag, ShoppingBag, Package, MapPin, Scissors, Sparkles, Eye, EyeOff } from 'lucide-react';

export default function AdminCategorias() {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: 'Huipiles', activo: true, totalProductos: 5, descripcion: 'Prendas tradicionales bordadas' },
    { id: 2, nombre: 'Blusas Bordadas', activo: true, totalProductos: 6, descripcion: 'Blusas istmeñas con bordado floral' },
    { id: 3, nombre: 'Rebozos', activo: true, totalProductos: 5, descripcion: 'Rebozos tejidos en telar de cintura' },
    { id: 4, nombre: 'Guayaberas', activo: true, totalProductos: 5, descripcion: 'Guayaberas de lino artesanales' },
    { id: 5, nombre: 'Faldas', activo: true, totalProductos: 5, descripcion: 'Faldas de enredo tradicionales' },
    { id: 6, nombre: 'Quechquémitl', activo: true, totalProductos: 4, descripcion: 'Prenda tradicional ceremonial' }
  ]);

  const [productos] = useState([
    {
      id: 1,
      nombre: 'Huipil Bordado Teotitlán',
      descripcion: 'Huipil tradicional con bordado floral de Teotitlán del Valle',
      precio: 2850,
      stock: 5,
      activo: true,
      departamento: 'Mujer',
      categoriaId: 1,
      categoriaNombre: 'Huipiles',
      tecnica: 'Bordado a mano',
      origen: 'Teotitlán del Valle',
      materiales: 'Algodón, hilo de seda',
      imagen: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop'
    },
    {
      id: 2,
      nombre: 'Blusa Tehuana Roja',
      descripcion: 'Blusa tradicional istmeña con flores bordadas',
      precio: 2450,
      stock: 4,
      activo: true,
      departamento: 'Mujer',
      categoriaId: 2,
      categoriaNombre: 'Blusas Bordadas',
      tecnica: 'Bordado de flores',
      origen: 'Juchitán de Zaragoza',
      materiales: 'Satín, hilo de colores',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Rebozo de Algodón Azul',
      descripcion: 'Rebozo tejido en telar de pedal con diseños tradicionales',
      precio: 1650,
      stock: 6,
      activo: true,
      departamento: 'Mujer',
      categoriaId: 3,
      categoriaNombre: 'Rebozos',
      tecnica: 'Telar de pedal',
      origen: 'Santo Tomás Jalieza',
      materiales: 'Algodón 100%',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Guayabera Bordada Blanca',
      descripcion: 'Guayabera tradicional con detalles bordados',
      precio: 1950,
      stock: 7,
      activo: true,
      departamento: 'Hombre',
      categoriaId: 4,
      categoriaNombre: 'Guayaberas',
      tecnica: 'Bordado artesanal',
      origen: 'Oaxaca de Juárez',
      materiales: 'Lino, hilo de algodón',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Falda de Enredo Multicolor',
      descripcion: 'Falda tradicional tejida con diseños vibrantes',
      precio: 1850,
      stock: 5,
      activo: true,
      departamento: 'Mujer',
      categoriaId: 5,
      categoriaNombre: 'Faldas',
      tecnica: 'Telar de pedal',
      origen: 'Teotitlán del Valle',
      materiales: 'Lana natural, tintes vegetales',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    },
    {
      id: 6,
      nombre: 'Quechquémitl Ceremonial',
      descripcion: 'Quechquémitl tradicional con bordado zapoteco',
      precio: 2200,
      stock: 3,
      activo: true,
      departamento: 'Mujer',
      categoriaId: 6,
      categoriaNombre: 'Quechquémitl',
      tecnica: 'Telar de cintura con brocado',
      origen: 'Lambityeco',
      materiales: 'Algodón natural, hilos de colores',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [editingCat, setEditingCat] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', activo: true });

  const handleOpenModal = (cat = null) => {
    if (cat) {
      setEditingCat(cat);
      setFormData({ nombre: cat.nombre, descripcion: cat.descripcion, activo: cat.activo });
    } else {
      setEditingCat(null);
      setFormData({ nombre: '', descripcion: '', activo: true });
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingCat(null);
    setFormData({ nombre: '', descripcion: '', activo: true });
  };

  const handleSubmit = () => {
    if (editingCat) {
      setCategorias(categorias.map(c => c.id === editingCat.id ? { ...c, ...formData } : c));
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
    setCategorias(categorias.map(c => c.id === id ? { ...c, activo: !c.activo } : c));
  };

  const handleVerDetalles = (producto) => {
    setProductoSeleccionado(producto);
    setDetalleModalOpen(true);
  };

  const filteredProductos = productos.filter(p => {
    const matchCategoria = selectedCategoria === 'todas' || p.categoriaId === parseInt(selectedCategoria);
    const matchSearch = p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       p.categoriaNombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategoria && matchSearch;
  });

  const statsData = {
    totalCategorias: categorias.length,
    categoriasActivas: categorias.filter(c => c.activo).length,
    totalProductos: productos.length,
    productosActivos: productos.filter(p => p.activo).length
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, var(--color-light), var(--color-background))' }}>
      {/* Header */}
      <div style={{ background: 'var(--color-white)', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', borderBottom: '1px solid var(--color-background)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: 0 }}>
                Gestión de Categorías
              </h1>
              <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--color-text)' }}>
                Productos organizados por categorías
              </p>
            </div>
            <button onClick={() => handleOpenModal()} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: 'linear-gradient(to right, var(--color-accent), #2563eb)',
              color: 'var(--color-white)', padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)', transition: 'all 0.3s'
            }}>
              <Plus size={20} />
              Nueva Categoría
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem', transition: 'transform 0.3s' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', margin: 0 }}>Total Categorías</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '0.5rem', marginBottom: 0, color: 'var(--color-dark)' }}>{statsData.totalCategorias}</p>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-background)' }}>
                <Tag size={32} color="var(--color-dark)" />
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', margin: 0 }}>Categorías Activas</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '0.5rem', marginBottom: 0, color: '#10b981' }}>{statsData.categoriasActivas}</p>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: '#d1fae5' }}>
                <Tag size={32} color="#10b981" />
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', margin: 0 }}>Total Productos</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '0.5rem', marginBottom: 0, color: 'var(--color-accent)' }}>{statsData.totalProductos}</p>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-accent-light)', opacity: 0.3 }}>
                <ShoppingBag size={32} color="var(--color-accent)" />
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', margin: 0 }}>Productos Activos</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '0.5rem', marginBottom: 0, color: '#06b6d4' }}>{statsData.productosActivos}</p>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: '#cffafe' }}>
                <ShoppingBag size={32} color="#06b6d4" />
              </div>
            </div>
          </div>
        </div>

        {/* Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth >= 1024 ? '300px 1fr' : '1fr', gap: '1.5rem' }}>
          {/* Sidebar */}
          <div>
            <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: '0 0 1rem 0' }}>
                Categorías
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => setSelectedCategoria('todas')}
                  style={{
                    width: '100%', textAlign: 'left', padding: '0.75rem 1rem',
                    borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
                    background: selectedCategoria === 'todas' ? 'linear-gradient(135deg, var(--color-accent-light), var(--color-accent))' : 'var(--color-light)',
                    color: selectedCategoria === 'todas' ? 'var(--color-white)' : 'var(--color-text)',
                    fontWeight: selectedCategoria === 'todas' ? 600 : 400,
                    boxShadow: selectedCategoria === 'todas' ? '0 2px 8px rgba(59, 130, 246, 0.25)' : 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Todas las categorías</span>
                    <span style={{
                      fontSize: '0.875rem',
                      background: selectedCategoria === 'todas' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.8)',
                      color: selectedCategoria === 'todas' ? 'var(--color-white)' : 'var(--color-text)',
                      padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 600
                    }}>
                      {productos.length}
                    </span>
                  </div>
                </button>
                
                {categorias.map((cat) => (
                  <div key={cat.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button
                      onClick={() => setSelectedCategoria(cat.id.toString())}
                      style={{
                        width: '100%', textAlign: 'left', padding: '0.75rem 1rem',
                        borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
                        background: selectedCategoria === cat.id.toString() ? 'linear-gradient(135deg, var(--color-accent-light), var(--color-accent))' : 'var(--color-light)',
                        color: selectedCategoria === cat.id.toString() ? 'var(--color-white)' : 'var(--color-text)',
                        fontWeight: selectedCategoria === cat.id.toString() ? 600 : 400,
                        boxShadow: selectedCategoria === cat.id.toString() ? '0 2px 8px rgba(59, 130, 246, 0.25)' : 'none',
                        transition: 'all 0.3s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span>{cat.nombre}</span>
                          {!cat.activo && <span style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.6)', color: 'var(--color-text)', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>Inactiva</span>}
                        </div>
                        <span style={{
                          fontSize: '0.875rem',
                          background: selectedCategoria === cat.id.toString() ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.8)',
                          color: selectedCategoria === cat.id.toString() ? 'var(--color-white)' : 'var(--color-text)',
                          padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 600
                        }}>
                          {productos.filter(p => p.categoriaId === cat.id).length}
                        </span>
                      </div>
                    </button>
                    
                    <div style={{ display: 'flex', gap: '0.5rem', padding: '0 0.5rem' }}>
                      <button onClick={() => handleOpenModal(cat)} style={{
                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem',
                        fontSize: '0.75rem', padding: '0.5rem 0.75rem', borderRadius: '0.375rem',
                        border: 'none', cursor: 'pointer', background: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--color-accent)', fontWeight: 500, transition: 'all 0.3s'
                      }}>
                        <Edit size={12} />
                        Editar
                      </button>
                      <button
                        onClick={() => handleToggleActive(cat.id)}
                        style={{
                          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.75rem', padding: '0.5rem 0.75rem', borderRadius: '0.375rem',
                          border: 'none', cursor: 'pointer',
                          background: cat.activo ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                          color: cat.activo ? '#f59e0b' : '#10b981',
                          fontWeight: 500, transition: 'all 0.3s'
                        }}
                      >
                        {cat.activo ? <EyeOff size={12} /> : <Eye size={12} />}
                      </button>
                      <button onClick={() => handleDelete(cat.id)} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '0.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer',
                        background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', transition: 'all 0.3s'
                      }}>
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Search */}
            <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <Search style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text)', opacity: 0.5 }} size={20} />
                <input
                  type="text"
                  placeholder="Buscar productos por nombre o categoría..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '93%', padding: '0.75rem 1rem 0.75rem 2.5rem',
                    border: '1px solid var(--color-background)', borderRadius: '0.5rem',
                    fontSize: '1rem', color: 'var(--color-text)'
                  }}
                />
              </div>
            </div>

            {/* Products Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {filteredProductos.map((producto) => (
                <div
                  key={producto.id}
                  style={{
                    background: 'var(--color-white)', borderRadius: '0.75rem',
                    boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)',
                    overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px rgba(30, 41, 59, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(30, 41, 59, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ position: 'relative', height: '14rem', overflow: 'hidden', background: 'var(--color-light)' }}>
                    <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem',
                        fontWeight: 600, backdropFilter: 'blur(10px)',
                        background: producto.stock > 0 ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)',
                        color: 'var(--color-white)'
                      }}>
                        {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
                      </span>
                      <span style={{
                        padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem',
                        fontWeight: 600, backdropFilter: 'blur(10px)',
                        background: 'rgba(59, 130, 246, 0.9)', color: 'var(--color-white)'
                      }}>
                        {producto.departamento}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem' }}>
                    <span style={{
                      fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)',
                      background: 'rgba(59, 130, 246, 0.1)', padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem', display: 'inline-block'
                    }}>
                      {producto.categoriaNombre}
                    </span>
                    
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: '0.5rem 0 0.25rem 0' }}>
                      {producto.nombre}
                    </h3>
                    
                    <p style={{
                      fontSize: '0.875rem', color: 'var(--color-text)', marginBottom: '0.75rem',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                    }}>
                      {producto.descripcion}
                    </p>

                    <div style={{
                      display: 'flex', flexDirection: 'column', gap: '0.5rem',
                      marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-background)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                        <span style={{ color: 'var(--color-text)' }}>Técnica:</span>
                        <span style={{ fontWeight: 500, color: 'var(--color-dark)', textAlign: 'right' }}>{producto.tecnica}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                        <span style={{ color: 'var(--color-text)' }}>Origen:</span>
                        <span style={{ fontWeight: 500, color: 'var(--color-dark)', textAlign: 'right' }}>{producto.origen}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)', margin: 0 }}>
                          ${producto.precio.toLocaleString('es-MX')}
                        </p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', opacity: 0.7, margin: 0 }}>MXN</p>
                      </div>
                      <button
                        onClick={() => handleVerDetalles(producto)}
                        style={{
                          background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-accent)',
                          padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none',
                          cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600, transition: 'all 0.3s'
                        }}
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProductos.length === 0 && (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <ShoppingBag size={64} color="var(--color-background)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-dark)', margin: '0 0 0.5rem 0' }}>
                  No se encontraron productos
                </h3>
                <p style={{ color: 'var(--color-text)', margin: 0 }}>Intenta con otro filtro o término de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Categoría */}
      {modalOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(30, 41, 59, 0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem', zIndex: 50, backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'var(--color-white)', borderRadius: '1rem',
            boxShadow: '0 25px 50px rgba(30, 41, 59, 0.3)', maxWidth: '32rem', width: '100%'
          }}>
            <div style={{
              background: 'var(--color-white)', borderBottom: '1px solid var(--color-background)',
              padding: '1rem 1.5rem', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', borderRadius: '1rem 1rem 0 0'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: 0 }}>
                {editingCat ? 'Editar Categoría' : 'Nueva Categoría'}
              </h2>
              <button onClick={handleCloseModal} style={{
                color: 'var(--color-text)', background: 'none', border: 'none',
                cursor: 'pointer', padding: 0, transition: 'color 0.3s'
              }}>
                <X size={24} />
              </button>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>
                  Nombre de Categoría *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  style={{
                    width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--color-background)',
                    borderRadius: '0.5rem', fontSize: '1rem', color: 'var(--color-text)'
                  }}
                  placeholder="Ej: Huipiles, Blusas Bordadas, Rebozos..."
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>
                  Descripción
                </label>
                <textarea
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  rows={3}
                  style={{
                    width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--color-background)',
                    borderRadius: '0.5rem', fontSize: '1rem', color: 'var(--color-text)', resize: 'none'
                  }}
                  placeholder="Breve descripción de la categoría..."
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input
                  type="checkbox"
                  id="activo-cat"
                  checked={formData.activo}
                  onChange={(e) => setFormData({ ...formData, activo: e.target.checked })}
                  style={{
                    width: '1.25rem', height: '1.25rem', accentColor: 'var(--color-accent)',
                    border: '1px solid var(--color-background)', borderRadius: '0.25rem', cursor: 'pointer'
                  }}
                />
                <label htmlFor="activo-cat" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark)' }}>
                  Categoría activa
                </label>
              </div>

              <div style={{
                background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '0.5rem', padding: '1rem'
              }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text)', margin: 0 }}>
                  <strong>Nota:</strong> Las categorías organizan tus productos por tipo (Huipiles, Blusas, rebozos, etc.). 
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem' }}>
                <button type="button" onClick={handleCloseModal} style={{
                  flex: 1, padding: '0.75rem 1.5rem', border: '1px solid var(--color-background)',
                  color: 'var(--color-text)', background: 'var(--color-white)',
                  borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 500, transition: 'all 0.3s'
                }}>
                  Cancelar
                </button>
                <button type="button" onClick={handleSubmit} style={{
                  flex: 1, padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(to right, var(--color-accent), #2563eb)',
                  color: 'var(--color-white)', border: 'none', borderRadius: '0.5rem',
                  cursor: 'pointer', fontWeight: 600, boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)',
                  transition: 'all 0.3s'
                }}>
                  {editingCat ? 'Actualizar' : 'Crear'} Categoría
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detalle Producto */}
      {detalleModalOpen && productoSeleccionado && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(30, 41, 59, 0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem', zIndex: 60, backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'var(--color-white)', borderRadius: '1rem',
            boxShadow: '0 25px 50px rgba(30, 41, 59, 0.3)',
            maxWidth: '900px', width: '100%', maxHeight: '90vh', overflow: 'auto'
          }}>
            <div style={{
              position: 'sticky', top: 0, background: 'var(--color-white)',
              borderBottom: '1px solid var(--color-background)', padding: '1rem 1.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: 0 }}>
                Detalles del Producto
              </h2>
              <button onClick={() => setDetalleModalOpen(false)} style={{
                color: 'var(--color-text)', background: 'none', border: 'none',
                cursor: 'pointer', padding: 0, transition: 'color 0.3s'
              }}>
                <X size={24} />
              </button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr', gap: '2rem' }}>
                <div>
                  <img 
                    src={productoSeleccionado.imagen} 
                    alt={productoSeleccionado.nombre}
                    style={{
                      width: '100%', height: '400px', objectFit: 'cover',
                      borderRadius: '0.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem', borderRadius: '9999px',
                      fontSize: '0.75rem', fontWeight: 600,
                      background: productoSeleccionado.stock > 0 ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)',
                      color: 'var(--color-white)'
                    }}>
                      {productoSeleccionado.stock > 0 ? `Stock: ${productoSeleccionado.stock}` : 'AGOTADO'}
                    </span>
                    <span style={{
                      padding: '0.25rem 0.75rem', borderRadius: '9999px',
                      fontSize: '0.75rem', fontWeight: 600,
                      background: 'rgba(59, 130, 246, 0.9)', color: 'var(--color-white)'
                    }}>
                      {productoSeleccionado.departamento}
                    </span>
                    <span style={{
                      fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)',
                      background: 'rgba(59, 130, 246, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem'
                    }}>
                      {productoSeleccionado.categoriaNombre}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: '0 0 0.5rem 0' }}>
                      {productoSeleccionado.nombre}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: '1.6' }}>
                      {productoSeleccionado.descripcion}
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--color-light)', padding: '1.5rem',
                    borderRadius: '0.75rem', border: '1px solid var(--color-background)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <Scissors size={20} color="var(--color-accent)" />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', margin: 0 }}>Técnica</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-dark)', margin: 0 }}>
                          {productoSeleccionado.tecnica}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <MapPin size={20} color="var(--color-accent)" />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', margin: 0 }}>Origen</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-dark)', margin: 0 }}>
                          {productoSeleccionado.origen}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Sparkles size={20} color="var(--color-accent)" />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', margin: 0 }}>Materiales</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-dark)', margin: 0 }}>
                          {productoSeleccionado.materiales}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, var(--color-accent-light), var(--color-accent))',
                    borderRadius: '0.75rem'
                  }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'white', opacity: 0.9, margin: 0 }}>Precio</p>
                      <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', margin: 0 }}>
                        ${productoSeleccionado.precio.toLocaleString('es-MX')}
                      </p>
                      <p style={{ fontSize: '0.875rem', color: 'white', opacity: 0.8, margin: 0 }}>MXN</p>
                    </div>
                    <Package size={48} color="white" style={{ opacity: 0.3 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}