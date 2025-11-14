import React, { useState } from 'react';
import { Search, ShoppingBag, Package, MapPin, Scissors, Sparkles, Users, X } from 'lucide-react';

const departamentosFijos = [
  { id: 1, nombre: 'Mujer', totalProductos: 18, color: '#ec4899' },
  { id: 2, nombre: 'Hombre', totalProductos: 12, color: '#3b82f6' }
];

export default function AdminDepartamentos() {
  const [productos] = useState([
    {
      id: 1,
      nombre: 'Huipil Bordado Teotitlán',
      descripcion: 'Huipil tradicional con bordado floral de Teotitlán del Valle',
      precio: 2850,
      stock: 5,
      activo: true,
      departamentoId: 1,
      departamentoNombre: 'Mujer',
      categoriaNombre: 'Huipiles',
      tecnica: 'Bordado a mano',
      origen: 'Teotitlán del Valle',
      materiales: 'Algodón, hilo de seda',
      imagen: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop'
    },
    {
      id: 2,
      nombre: 'Camisa Bordada Oaxaca',
      descripcion: 'Camisa tradicional con bordado geométrico',
      precio: 1850,
      stock: 8,
      activo: true,
      departamentoId: 2,
      departamentoNombre: 'Hombre',
      categoriaNombre: 'Bordados',
      tecnica: 'Bordado punto de cruz',
      origen: 'San Antonino Castillo Velasco',
      materiales: 'Manta de algodón',
      imagen: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Huipil Zapoteco Negro',
      descripcion: 'Huipil ceremonial con bordado tradicional zapoteco',
      precio: 3200,
      stock: 3,
      activo: true,
      departamentoId: 1,
      departamentoNombre: 'Mujer',
      categoriaNombre: 'Huipiles',
      tecnica: 'Bordado tradicional',
      origen: 'Yalalag',
      materiales: 'Terciopelo, hilo metálico',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Rebozo de Algodón',
      descripcion: 'Rebozo tejido en telar de pedal con diseños tradicionales',
      precio: 1650,
      stock: 6,
      activo: true,
      departamentoId: 1,
      departamentoNombre: 'Mujer',
      categoriaNombre: 'Rebozos',
      tecnica: 'Telar de pedal',
      origen: 'Santo Tomás Jalieza',
      materiales: 'Algodón 100%',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Guayabera Bordada',
      descripcion: 'Guayabera tradicional con detalles bordados',
      precio: 1950,
      stock: 7,
      activo: true,
      departamentoId: 2,
      departamentoNombre: 'Hombre',
      categoriaNombre: 'Guayaberas',
      tecnica: 'Bordado artesanal',
      origen: 'Oaxaca de Juárez',
      materiales: 'Lino, hilo de algodón',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
    },
    {
      id: 6,
      nombre: 'Blusa Tehuana Roja',
      descripcion: 'Blusa tradicional istmeña con flores bordadas',
      precio: 2450,
      stock: 4,
      activo: true,
      departamentoId: 1,
      departamentoNombre: 'Mujer',
      categoriaNombre: 'Blusas Bordadas',
      tecnica: 'Bordado de flores',
      origen: 'Juchitán de Zaragoza',
      materiales: 'Satín, hilo de colores',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    },
    {
      id: 7,
      nombre: 'Falda de Enredo Multicolor',
      descripcion: 'Falda tradicional tejida con diseños vibrantes',
      precio: 1850,
      stock: 5,
      activo: true,
      departamentoId: 1,
      departamentoNombre: 'Mujer',
      categoriaNombre: 'Faldas',
      tecnica: 'Telar de pedal',
      origen: 'Teotitlán del Valle',
      materiales: 'Lana natural, tintes vegetales',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    },
  ]);

  const [selectedDepartamento, setSelectedDepartamento] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const filteredProductos = productos.filter(p => {
    const matchDepartamento = selectedDepartamento === 'todos' || p.departamentoId === parseInt(selectedDepartamento);
    const matchSearch = p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       p.categoriaNombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchDepartamento && matchSearch;
  });

  const handleVerDetalles = (producto) => {
    setProductoSeleccionado(producto);
    setDetalleModalOpen(true);
  };

  const statsData = {
    totalProductos: productos.length,
    productosActivos: productos.filter(p => p.activo).length,
    mujer: productos.filter(p => p.departamentoId === 1).length,
    hombre: productos.filter(p => p.departamentoId === 2).length
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, var(--color-light, #F8FAFC), var(--color-background, #E2E8F0))' }}>
      {/* Header */}
      <div style={{ background: 'var(--color-white, #FFFFFF)', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', borderBottom: '1px solid var(--color-background, #E2E8F0)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--color-dark, #1E293B)', margin: 0 }}>
                Gestión de Departamentos
              </h1>
              <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--color-text, #334155)' }}>
                Productos organizados por departamentos
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--color-light)', padding: '0.25rem', borderRadius: '0.5rem' }}>
              <span style={{ padding: '0.5rem 1rem', background: 'var(--color-white)', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Departamentos fijos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', margin: 0 }}>Total Productos</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '0.5rem', marginBottom: 0, color: 'var(--color-dark)' }}>{statsData.totalProductos}</p>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-background)' }}>
                <ShoppingBag style={{ width: '2rem', height: '2rem', color: 'var(--color-dark)' }} />
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', margin: 0 }}>Productos Activos</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '0.5rem', marginBottom: 0, color: '#10b981' }}>{statsData.productosActivos}</p>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: '#d1fae5' }}>
                <Package style={{ width: '2rem', height: '2rem', color: '#10b981' }} />
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', margin: 0 }}>Mujer</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '0.5rem', marginBottom: 0, color: '#ec4899' }}>{statsData.mujer}</p>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: '#fce7f3' }}>
                <Users style={{ width: '2rem', height: '2rem', color: '#ec4899' }} />
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', margin: 0 }}>Hombre</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '0.5rem', marginBottom: 0, color: 'var(--color-accent)' }}>{statsData.hombre}</p>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-accent-light)', opacity: 0.3 }}>
                <Users style={{ width: '2rem', height: '2rem', color: 'var(--color-accent)' }} />
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
                Departamentos
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => setSelectedDepartamento('todos')}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    background: selectedDepartamento === 'todos' ? 'linear-gradient(135deg, var(--color-accent-light), var(--color-accent))' : 'var(--color-light)',
                    color: selectedDepartamento === 'todos' ? 'var(--color-white)' : 'var(--color-text)',
                    fontWeight: selectedDepartamento === 'todos' ? 600 : 400,
                    boxShadow: selectedDepartamento === 'todos' ? '0 2px 8px rgba(59, 130, 246, 0.25)' : 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Todos los productos</span>
                    <span style={{
                      fontSize: '0.875rem',
                      background: selectedDepartamento === 'todos' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.8)',
                      color: selectedDepartamento === 'todos' ? 'var(--color-white)' : 'var(--color-text)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontWeight: 600
                    }}>
                      {productos.length}
                    </span>
                  </div>
                </button>

                {departamentosFijos.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartamento(dept.id.toString())}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      background: selectedDepartamento === dept.id.toString() ? 'linear-gradient(135deg, var(--color-accent-light), var(--color-accent))' : 'var(--color-light)',
                      color: selectedDepartamento === dept.id.toString() ? 'var(--color-white)' : 'var(--color-text)',
                      fontWeight: selectedDepartamento === dept.id.toString() ? 600 : 400,
                      boxShadow: selectedDepartamento === dept.id.toString() ? '0 2px 8px rgba(59, 130, 246, 0.25)' : 'none',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.25rem' }}>{dept.icon}</span>
                        <span>{dept.nombre}</span>
                        <span style={{
                          fontSize: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.6)',
                          color: 'var(--color-text)',
                          padding: '0.125rem 0.5rem',
                          borderRadius: '0.25rem'
                        }}>
                        </span>
                      </div>
                      <span style={{
                        fontSize: '0.875rem',
                        background: selectedDepartamento === dept.id.toString() ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.8)',
                        color: selectedDepartamento === dept.id.toString() ? 'var(--color-white)' : 'var(--color-text)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontWeight: 600
                      }}>
                        {productos.filter(p => p.departamentoId === dept.id).length}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Search */}
            <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)', border: '1px solid var(--color-background)', padding: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <Search style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text)', opacity: 0.5, width: '1.25rem', height: '1.25rem' }} />
                <input
                  type="text"
                  placeholder="Buscar productos por nombre o categoría..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '93%',
                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                    border: '1px solid var(--color-background)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    color: 'var(--color-text)'
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
                    background: 'var(--color-white)',
                    borderRadius: '0.75rem',
                    boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)',
                    border: '1px solid var(--color-background)',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
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
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                        background: producto.stock > 0 ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)',
                        color: 'var(--color-white)'
                      }}>
                        {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
                      </span>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                        background: 'rgba(59, 130, 246, 0.9)',
                        color: 'var(--color-white)'
                      }}>
                        {producto.departamentoNombre}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      background: 'rgba(59, 130, 246, 0.1)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      display: 'inline-block'
                    }}>
                      {producto.categoriaNombre}
                    </span>
                    
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: '0.5rem 0 0.25rem 0' }}>
                      {producto.nombre}
                    </h3>
                    
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                      marginBottom: '0.75rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {producto.descripcion}
                    </p>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '1rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid var(--color-background)'
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
                          background: 'rgba(59, 130, 246, 0.1)',
                          color: 'var(--color-accent)',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.5rem',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'var(--color-accent)';
                          e.target.style.color = 'var(--color-white)';
                          e.target.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                          e.target.style.color = 'var(--color-accent)';
                          e.target.style.transform = 'translateY(0)';
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
                <ShoppingBag style={{ width: '4rem', height: '4rem', color: 'var(--color-background)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-dark)', margin: '0 0 0.5rem 0' }}>
                  No se encontraron productos
                </h3>
                <p style={{ color: 'var(--color-text)', margin: 0 }}>Intenta con otro filtro o término de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Detalle Producto */}
      {detalleModalOpen && productoSeleccionado && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(30, 41, 59, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 60,
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'var(--color-white)',
            borderRadius: '1rem',
            boxShadow: '0 25px 50px rgba(30, 41, 59, 0.3)',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <div style={{
              position: 'sticky',
              top: 0,
              background: 'var(--color-white)',
              borderBottom: '1px solid var(--color-background)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-dark)', margin: 0 }}>
                Detalles del Producto
              </h2>
              <button
                onClick={() => setDetalleModalOpen(false)}
                style={{
                  color: 'var(--color-text)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.3s'
                }}
              >
                <X style={{ width: '1.5rem', height: '1.5rem' }} />
              </button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr', gap: '2rem' }}>
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
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: productoSeleccionado.stock > 0 ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)',
                      color: 'var(--color-white)'
                    }}>
                      {productoSeleccionado.stock > 0 ? `Stock: ${productoSeleccionado.stock}` : 'AGOTADO'}
                    </span>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: 'rgba(59, 130, 246, 0.9)',
                      color: 'var(--color-white)'
                    }}>
                      {productoSeleccionado.departamentoNombre}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      background: 'rgba(59, 130, 246, 0.1)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem'
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
                    background: 'var(--color-light)',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--color-background)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <Scissors style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)' }} />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', margin: 0 }}>Técnica</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-dark)', margin: 0 }}>
                          {productoSeleccionado.tecnica}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <MapPin style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)' }} />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', margin: 0 }}>Origen</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-dark)', margin: 0 }}>
                          {productoSeleccionado.origen}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Sparkles style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)' }} />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', margin: 0 }}>Materiales</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-dark)', margin: 0 }}>
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
                      <p style={{ fontSize: '0.875rem', color: 'white', opacity: 0.9, margin: 0 }}>Precio</p>
                      <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', margin: 0 }}>
                        ${productoSeleccionado.precio.toLocaleString('es-MX')}
                      </p>
                      <p style={{ fontSize: '0.875rem', color: 'white', opacity: 0.8, margin: 0 }}>MXN</p>
                    </div>
                    <Package style={{ width: '3rem', height: '3rem', color: 'white', opacity: 0.3 }} />
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