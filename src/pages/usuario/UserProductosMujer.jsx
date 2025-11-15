import { ArrowLeft, Search, Heart, ShoppingCart, MapPin, Scissors, X, Sparkles, Package } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductosMujer() {
  const navigate = useNavigate();
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
    }
  ];

  const handleVerDetalles = (producto) => {
    setProductoSeleccionado(producto);
    setDetalleModalOpen(true);
  };

  const handleVolver = () => {
    navigate('/userdepartamento');
  };

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="productos-departamento">
      {/* Hero Section */}
      <div className="productos-departamento__hero">
        <div className="productos-departamento__hero-content">
          <button onClick={handleVolver} className="productos-departamento__back-btn">
            <ArrowLeft size={20} />
            Volver a Departamentos
          </button>

          <div className="productos-departamento__hero-info">
            <h1 className="productos-departamento__hero-title">Departamento Mujer</h1>
            <p className="productos-departamento__hero-subtitle">
              Textiles tradicionales elaborados con técnicas ancestrales por artesanas oaxaqueñas
            </p>
          </div>
        </div>
      </div>

      <div className="productos-departamento__main">
        {/* Search Bar */}
        <div className="productos-departamento__search">
          <Search className="productos-departamento__search-icon" size={20} />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="productos-departamento__search-input"
          />
        </div>

        {/* Products Grid */}
        <div className="productos-departamento__grid">
          {filteredProductos.map((producto) => (
            <div key={producto.id} className="productos-departamento__card">
              <div className="productos-departamento__card-image-wrapper">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="productos-departamento__card-image"
                />
                <button className="productos-departamento__card-favorite">
                  <Heart size={20} />
                </button>
                <span className={`productos-departamento__card-badge ${producto.stock > 0 ? 'productos-departamento__card-badge--stock' : 'productos-departamento__card-badge--out'}`}>
                  {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
                </span>
              </div>

              <div className="productos-departamento__card-body">
                <span className="productos-departamento__card-category">
                  {producto.categoria}
                </span>

                <h3 className="productos-departamento__card-name">{producto.nombre}</h3>
                <p className="productos-departamento__card-desc">{producto.descripcion}</p>

                <div className="productos-departamento__card-details">
                  <div className="productos-departamento__card-detail">
                    <MapPin size={16} />
                    <span>{producto.origen}</span>
                  </div>
                  <div className="productos-departamento__card-detail">
                    <Scissors size={16} />
                    <span>{producto.tecnica}</span>
                  </div>
                </div>

                <div className="productos-departamento__card-footer">
                  <div className="productos-departamento__card-price-wrapper">
                    <p className="productos-departamento__card-price">
                      ${producto.precio.toLocaleString('es-MX')}
                    </p>
                    <p className="productos-departamento__card-currency">MXN</p>
                  </div>
                  <button
                    onClick={() => handleVerDetalles(producto)}
                    className="productos-departamento__card-btn"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProductos.length === 0 && (
          <div className="productos-departamento__empty">
            <Package size={64} className="productos-departamento__empty-icon" />
            <h3 className="productos-departamento__empty-title">No se encontraron productos</h3>
            <p className="productos-departamento__empty-text">Intenta con otro término de búsqueda</p>
          </div>
        )}
      </div>

      {/* Modal Detalle */}
      {detalleModalOpen && productoSeleccionado && (
        <div className="productos-departamento__modal-overlay">
          <div className="productos-departamento__modal">
            <div className="productos-departamento__modal-header">
              <h2 className="productos-departamento__modal-title">Detalles del Producto</h2>
              <button 
                onClick={() => setDetalleModalOpen(false)}
                className="productos-departamento__modal-close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="productos-departamento__modal-body">
              <div className="productos-departamento__modal-grid">
                <div>
                  <img
                    src={productoSeleccionado.imagen}
                    alt={productoSeleccionado.nombre}
                    className="productos-departamento__modal-image"
                  />
                </div>

                <div className="productos-departamento__modal-info">
                  <div>
                    <span className="productos-departamento__modal-category">
                      {productoSeleccionado.categoria}
                    </span>
                    <h3 className="productos-departamento__modal-name">
                      {productoSeleccionado.nombre}
                    </h3>
                    <p className="productos-departamento__modal-desc">
                      {productoSeleccionado.descripcion}
                    </p>
                  </div>

                  <div className="productos-departamento__modal-specs">
                    <div className="productos-departamento__modal-spec">
                      <Scissors size={20} />
                      <div>
                        <p className="productos-departamento__modal-spec-label">Técnica</p>
                        <p className="productos-departamento__modal-spec-value">
                          {productoSeleccionado.tecnica}
                        </p>
                      </div>
                    </div>

                    <div className="productos-departamento__modal-spec">
                      <MapPin size={20} />
                      <div>
                        <p className="productos-departamento__modal-spec-label">Origen</p>
                        <p className="productos-departamento__modal-spec-value">
                          {productoSeleccionado.origen}
                        </p>
                      </div>
                    </div>

                    <div className="productos-departamento__modal-spec">
                      <Sparkles size={20} />
                      <div>
                        <p className="productos-departamento__modal-spec-label">Materiales</p>
                        <p className="productos-departamento__modal-spec-value">
                          {productoSeleccionado.materiales}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="productos-departamento__modal-price-box">
                    <div>
                      <p className="productos-departamento__modal-price-label">Precio</p>
                      <p className="productos-departamento__modal-price-value">
                        ${productoSeleccionado.precio.toLocaleString('es-MX')}
                      </p>
                      <p className="productos-departamento__modal-price-currency">MXN</p>
                    </div>
                    <Package size={48} className="productos-departamento__modal-price-icon" />
                  </div>

                  <button className="productos-departamento__modal-add-btn">
                    <ShoppingCart size={20} />
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .productos-departamento {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #F8FAFC, #E2E8F0);
        }

        .productos-departamento__hero {
          background: linear-gradient(135deg, #3B82F6, #2563eb);
          padding: 4rem 1rem 3rem;
          color: #FFFFFF;
          position: relative;
          overflow: hidden;
        }

        .productos-departamento__hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          z-index: 0;
        }

        .productos-departamento__hero-content {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .productos-departamento__back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
          font-weight: 500;
        }

        .productos-departamento__back-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateX(-4px);
        }

        .productos-departamento__hero-info {
          text-align: center;
        }

        .productos-departamento__hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin: 0 0 1rem 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .productos-departamento__hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.95;
          margin: 0;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .productos-departamento__main {
          max-width: 1280px;
          margin: -2rem auto 0;
          padding: 0 1rem 4rem;
          position: relative;
          z-index: 2;
        }

        .productos-departamento__search {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 1rem;
          padding: 0.875rem 1rem;
          gap: 0.75rem;
          box-shadow: 0 4px 12px rgba(30, 41, 59, 0.1);
          margin-bottom: 2rem;
        }

        .productos-departamento__search-icon {
          color: #3B82F6;
          flex-shrink: 0;
        }

        .productos-departamento__search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          color: #1E293B;
          font-size: 1rem;
        }

        .productos-departamento__search-input::placeholder {
          color: #94A3B8;
        }

        .productos-departamento__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .productos-departamento__card {
          background: #FFFFFF;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(30, 41, 59, 0.1);
          transition: all 0.3s;
        }

        .productos-departamento__card:hover {
          box-shadow: 0 12px 24px rgba(30, 41, 59, 0.15);
          transform: translateY(-4px);
        }

        .productos-departamento__card-image-wrapper {
          position: relative;
          height: 16rem;
          overflow: hidden;
        }

        .productos-departamento__card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .productos-departamento__card:hover .productos-departamento__card-image {
          transform: scale(1.05);
        }

        .productos-departamento__card-favorite {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          color: #334155;
        }

        .productos-departamento__card-favorite:hover {
          background: #3B82F6;
          color: #FFFFFF;
        }

        .productos-departamento__card-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: blur(8px);
        }

        .productos-departamento__card-badge--stock {
          background: rgba(16, 185, 129, 0.95);
          color: #FFFFFF;
        }

        .productos-departamento__card-badge--out {
          background: rgba(239, 68, 68, 0.95);
          color: #FFFFFF;
        }

        .productos-departamento__card-body {
          padding: 1.25rem;
        }

        .productos-departamento__card-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: #3B82F6;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .productos-departamento__card-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1E293B;
          margin: 0 0 0.5rem 0;
        }

        .productos-departamento__card-desc {
          font-size: 0.875rem;
          color: #475569;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .productos-departamento__card-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid #E2E8F0;
        }

        .productos-departamento__card-detail {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #475569;
        }

        .productos-departamento__card-detail svg {
          color: #3B82F6;
          flex-shrink: 0;
        }

        .productos-departamento__card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .productos-departamento__card-price {
          font-size: 1.75rem;
          font-weight: bold;
          color: #3B82F6;
          margin: 0;
        }

        .productos-departamento__card-currency {
          font-size: 0.75rem;
          color: #475569;
        }

        .productos-departamento__card-btn {
          background: #3B82F6;
          border: none;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #FFFFFF;
          transition: all 0.3s;
        }

        .productos-departamento__card-btn:hover {
          background: #2563eb;
          transform: scale(1.1);
        }

        .productos-departamento__empty {
          text-align: center;
          padding: 4rem 1rem;
        }

        .productos-departamento__empty-icon {
          color: #E2E8F0;
          margin: 0 auto 1.5rem;
        }

        .productos-departamento__empty-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1E293B;
          margin-bottom: 0.5rem;
        }

        .productos-departamento__empty-text {
          color: #475569;
        }

        .productos-departamento__modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(30, 41, 59, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 60;
          backdrop-filter: blur(4px);
        }

        .productos-departamento__modal {
          background: #FFFFFF;
          border-radius: 1rem;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: auto;
        }

        .productos-departamento__modal-header {
          border-bottom: 1px solid #E2E8F0;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .productos-departamento__modal-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1E293B;
          margin: 0;
        }

        .productos-departamento__modal-close {
          color: #334155;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s;
        }

        .productos-departamento__modal-close:hover {
          color: #1E293B;
        }

        .productos-departamento__modal-body {
          padding: 1.5rem;
        }

        .productos-departamento__modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .productos-departamento__modal-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 0.75rem;
        }

        .productos-departamento__modal-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .productos-departamento__modal-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: #3B82F6;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          display: inline-block;
        }

        .productos-departamento__modal-name {
          font-size: 1.875rem;
          font-weight: bold;
          color: #1E293B;
          margin: 0.5rem 0;
        }

        .productos-departamento__modal-desc {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
        }

        .productos-departamento__modal-specs {
          background: #F8FAFC;
          padding: 1.5rem;
          border-radius: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .productos-departamento__modal-spec {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .productos-departamento__modal-spec svg {
          color: #3B82F6;
        }

        .productos-departamento__modal-spec-label {
          font-size: 0.75rem;
          color: #475569;
          margin: 0;
        }

        .productos-departamento__modal-spec-value {
          font-size: 1rem;
          font-weight: 600;
          color: #1E293B;
          margin: 0;
        }

        .productos-departamento__modal-price-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: linear-gradient(135deg, #93C5FD, #3B82F6);
          border-radius: 0.75rem;
        }

        .productos-departamento__modal-price-label {
          font-size: 0.875rem;
          color: white;
          opacity: 0.9;
          margin: 0;
        }

        .productos-departamento__modal-price-value {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin: 0;
        }

        .productos-departamento__modal-price-currency {
          font-size: 0.875rem;
          color: white;
          opacity: 0.8;
        }

        .productos-departamento__modal-price-icon {
          color: white;
          opacity: 0.3;
        }

        .productos-departamento__modal-add-btn {
          width: 100%;
          padding: 1rem;
          background: #3B82F6;
          color: #FFFFFF;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .productos-departamento__modal-add-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .productos-departamento__hero-title {
            font-size: 2.25rem;
          }

          .productos-departamento__modal-grid {
            grid-template-columns: 1fr;
          }

          .productos-departamento__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}