import { ArrowLeft, Search, Heart, ShoppingCart, MapPin, Scissors, X, Sparkles, Package } from 'lucide-react';
import { useState } from 'react';

export default function ProductosMujer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: 'Huipil Bordado Teotitlán',
      descripcion: 'Huipil tradicional con bordado floral de Teotitlán del Valle',
      precio: 2850,
      stock: 5,
      categoria: 'Huipiles',
      tecnica: 'Bordado a mano',
      origen: 'Teotitlán del Valle',
      materiales: 'Algodón, hilo de seda',
      imagen: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop'
    },
    {
      id: 2,
      nombre: 'Huipil Zapoteco Negro',
      descripcion: 'Huipil ceremonial con bordado tradicional zapoteco',
      precio: 3200,
      stock: 3,
      categoria: 'Huipiles',
      tecnica: 'Bordado tradicional',
      origen: 'Yalalag',
      materiales: 'Terciopelo, hilo metálico',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Blusa Tehuana Roja',
      descripcion: 'Blusa tradicional istmeña con flores bordadas',
      precio: 2450,
      stock: 4,
      categoria: 'Blusas Bordadas',
      tecnica: 'Bordado de flores',
      origen: 'Juchitán de Zaragoza',
      materiales: 'Satín, hilo de colores',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Blusa Istmeña Azul',
      descripcion: 'Blusa con bordado floral tradicional del Istmo',
      precio: 2100,
      stock: 6,
      categoria: 'Blusas Bordadas',
      tecnica: 'Bordado con cadeneta',
      origen: 'Tehuantepec',
      materiales: 'Terciopelo, hilo metálico',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Rebozo de Algodón Azul',
      descripcion: 'Rebozo tejido en telar de pedal con diseños tradicionales',
      precio: 1650,
      stock: 6,
      categoria: 'Rebozos',
      tecnica: 'Telar de pedal',
      origen: 'Santo Tomás Jalieza',
      materiales: 'Algodón 100%',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    },
    {
      id: 6,
      nombre: 'Rebozo Multicolor',
      descripcion: 'Rebozo tejido con diseños geométricos zapotecos',
      precio: 1850,
      stock: 4,
      categoria: 'Rebozos',
      tecnica: 'Telar de cintura',
      origen: 'San Miguel del Valle',
      materiales: 'Algodón natural, tintes vegetales',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    },
    {
      id: 7,
      nombre: 'Falda de Enredo Multicolor',
      descripcion: 'Falda tradicional tejida con diseños vibrantes',
      precio: 1850,
      stock: 5,
      categoria: 'Faldas',
      tecnica: 'Telar de pedal',
      origen: 'Teotitlán del Valle',
      materiales: 'Lana natural, tintes vegetales',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    },
    {
      id: 8,
      nombre: 'Falda Zapoteca Roja',
      descripcion: 'Falda tradicional con diseños geométricos tejidos',
      precio: 2200,
      stock: 3,
      categoria: 'Faldas',
      tecnica: 'Telar de pedal',
      origen: 'Villa Díaz Ordaz',
      materiales: 'Lana merino, tintes naturales',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    },
    {
      id: 9,
      nombre: 'Quechquémitl Ceremonial',
      descripcion: 'Quechquémitl tradicional con bordado zapoteco',
      precio: 2200,
      stock: 3,
      categoria: 'Quechquémitl',
      tecnica: 'Telar de cintura con brocado',
      origen: 'Lambityeco',
      materiales: 'Algodón natural, hilos de colores',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 10,
      nombre: 'Quechquémitl Festivo',
      descripcion: 'Prenda ceremonial con diseños tradicionales mixtecos',
      precio: 2600,
      stock: 2,
      categoria: 'Quechquémitl',
      tecnica: 'Telar de cintura',
      origen: 'Santos Reyes Nopala',
      materiales: 'Algodón, lana, seda',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    }
  ];

  const handleVerDetalles = (producto) => {
    setProductoSeleccionado(producto);
    setDetalleModalOpen(true);
  };

  const handleVolver = () => {
    console.log('Volver a departamentos');
  };

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #F8FAFC, #E2E8F0)' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #ec4899, #db2777)',
        padding: '4rem 1rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          content: '',
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>
        <div style={{
          content: '',
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button
            onClick={handleVolver}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            <ArrowLeft size={20} />
            Volver a Departamentos
          </button>

          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem 0', textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            Departamento Mujer
          </h1>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '-3rem auto 0', padding: '0 1rem 4rem', position: 'relative', zIndex: 2 }}>
        {/* Search Bar */}
        <div style={{
          background: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 12px rgba(30, 41, 59, 0.1)',
          border: '1px solid #E2E8F0',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ position: 'relative' }}>
            <Search style={{
              position: 'absolute',
              left: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#334155',
              opacity: 0.5
            }} size={20} />
            <input
              type="text"
              placeholder="Buscar productos por nombre o categoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '93%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                border: '1px solid #E2E8F0',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#334155'
              }}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProductos.map((producto) => (
            <div
              key={producto.id}
              style={{
                background: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 1px 3px rgba(30, 41, 59, 0.1)',
                border: '1px solid #E2E8F0',
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
              <div style={{ position: 'relative', height: '16rem', overflow: 'hidden' }}>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s'
                  }}
                >
                  <Heart size={20} color="#334155" />
                </button>
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: producto.stock > 0 ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)',
                    color: 'white',
                    backdropFilter: 'blur(8px)'
                  }}>
                    {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#ec4899',
                  background: 'rgba(236, 72, 153, 0.1)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  display: 'inline-block'
                }}>
                  {producto.categoria}
                </span>

                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#1E293B',
                  margin: '0.5rem 0 0.5rem 0'
                }}>
                  {producto.nombre}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: '#334155',
                  marginBottom: '1rem',
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
                  borderBottom: '1px solid #E2E8F0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <MapPin size={16} color="#ec4899" />
                    <span style={{ color: '#334155' }}>{producto.origen}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <Scissors size={16} color="#ec4899" />
                    <span style={{ color: '#334155' }}>{producto.tecnica}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ec4899', margin: 0 }}>
                      ${producto.precio.toLocaleString('es-MX')}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#334155', opacity: 0.7, margin: 0 }}>MXN</p>
                  </div>
                  <button
                    onClick={() => handleVerDetalles(producto)}
                    style={{
                      background: '#ec4899',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '2.75rem',
                      height: '2.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow: '0 2px 8px rgba(236, 72, 153, 0.3)'
                    }}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProductos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <Package size={64} color="#E2E8F0" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1E293B', margin: '0 0 0.5rem 0' }}>
              No se encontraron productos
            </h3>
            <p style={{ color: '#334155', margin: 0 }}>Intenta con otro término de búsqueda</p>
          </div>
        )}
      </div>

      {/* Modal Detalle */}
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
            background: 'white',
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
              background: 'white',
              borderBottom: '1px solid #E2E8F0',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1E293B', margin: 0 }}>
                Detalles del Producto
              </h2>
              <button
                onClick={() => setDetalleModalOpen(false)}
                style={{
                  color: '#334155',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                gap: '2rem'
              }}>
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
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#ec4899',
                      background: 'rgba(236, 72, 153, 0.1)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      display: 'inline-block'
                    }}>
                      {productoSeleccionado.categoria}
                    </span>
                    <h3 style={{
                      fontSize: '1.875rem',
                      fontWeight: 'bold',
                      color: '#1E293B',
                      margin: '0.5rem 0 0.5rem 0'
                    }}>
                      {productoSeleccionado.nombre}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#334155', lineHeight: '1.6' }}>
                      {productoSeleccionado.descripcion}
                    </p>
                  </div>

                  <div style={{
                    background: '#F8FAFC',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #E2E8F0'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <Scissors size={20} color="#ec4899" />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: '#334155', margin: 0 }}>Técnica</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', margin: 0 }}>
                          {productoSeleccionado.tecnica}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <MapPin size={20} color="#ec4899" />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: '#334155', margin: 0 }}>Origen</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', margin: 0 }}>
                          {productoSeleccionado.origen}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Sparkles size={20} color="#ec4899" />
                      <div>
                        <p style={{ fontSize: '0.75rem', color: '#334155', margin: 0 }}>Materiales</p>
                        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', margin: 0 }}>
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
                    background: 'linear-gradient(135deg, #f9a8d4, #ec4899)',
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

                  <button style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#ec4899',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)'
                  }}>
                    <ShoppingCart size={20} />
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}