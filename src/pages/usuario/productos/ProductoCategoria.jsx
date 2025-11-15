import { ArrowLeft, Search, Heart, ShoppingCart, MapPin, Scissors, X, Sparkles, Package } from 'lucide-react';
import { useState } from 'react';

export default function ProductosCategoria() {
  const [categoriaActual] = useState({
    id: 1,
    nombre: 'Huipiles',
    descripcion: 'Prendas tradicionales bordadas a mano con técnicas ancestrales zapotecas. Cada huipil cuenta una historia única.',
  });

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
      tiempoElaboracion: '3-4 semanas',
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
      tiempoElaboracion: '8-10 semanas',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Huipil de Algodón Natural',
      descripcion: 'Huipil zapoteco tejido con algodón orgánico y tintes naturales',
      precio: 2650,
      stock: 4,
      categoria: 'Huipiles',
      tecnica: 'Telar de pedal',
      origen: 'Mitla',
      materiales: 'Algodón orgánico, tintes naturales',
      tiempoElaboracion: '4-5 semanas',
      imagen: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Huipil Istmeño de Terciopelo',
      descripcion: 'Huipil ceremonial con flores grandes bordadas',
      precio: 3500,
      stock: 2,
      categoria: 'Huipiles',
      tecnica: 'Bordado sobre terciopelo',
      origen: 'Tehuantepec',
      materiales: 'Terciopelo, hilos de seda',
      tiempoElaboracion: '8-10 semanas',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Huipil con Grecas Tradicionales',
      descripcion: 'Huipil blanco con grecas geométricas zapotecas',
      precio: 2900,
      stock: 6,
      categoria: 'Huipiles',
      tecnica: 'Telar de cintura con brocado',
      origen: 'Santo Tomás Jalieza',
      materiales: 'Algodón natural, hilos teñidos',
      tiempoElaboracion: '6-8 semanas',
      imagen: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop'
    }
  ];

  const handleVerDetalles = (producto) => {
    setProductoSeleccionado(producto);
    setDetalleModalOpen(true);
  };

  const handleVolver = () => {
    window.history.back();
  };

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="productos-categoria">
      <div className="productos-categoria__hero">
        <div className="productos-categoria__hero-content">
          <button onClick={handleVolver} className="productos-categoria__back-btn">
            <ArrowLeft size={20} />
            Volver a Categorías
          </button>

          <div className="productos-categoria__hero-info">
            <h1 className="productos-categoria__hero-title">{categoriaActual.nombre}</h1>
            <p className="productos-categoria__hero-subtitle">{categoriaActual.descripcion}</p>
          </div>
        </div>
      </div>

      <div className="productos-categoria__main">
        <div className="productos-categoria__filters">
          <div className="productos-categoria__search-wrapper">
            <Search className="productos-categoria__search-icon" size={20} />
            <input
              type="text"
              placeholder="Buscar en esta categoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="productos-categoria__search-input"
            />
          </div>
        </div>

        <div className="productos-categoria__grid">
          {filteredProductos.map((producto) => (
            <div key={producto.id} className="productos-categoria__card">
              <div className="productos-categoria__card-image-wrapper">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="productos-categoria__card-image"
                />
                <button className="productos-categoria__card-favorite">
                  <Heart size={20} />
                </button>
                <div className="productos-categoria__card-badges">
                  <span className={`productos-categoria__card-badge ${producto.stock > 0 ? 'productos-categoria__card-badge--stock' : 'productos-categoria__card-badge--out'}`}>
                    {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
                  </span>
                </div>
              </div>

              <div className="productos-categoria__card-body">
                <h3 className="productos-categoria__card-name">{producto.nombre}</h3>
                <p className="productos-categoria__card-desc">{producto.descripcion}</p>

                <div className="productos-categoria__card-details">
                  <div className="productos-categoria__card-detail">
                    <MapPin size={16} />
                    <span>{producto.origen}</span>
                  </div>
                  <div className="productos-categoria__card-detail">
                    <Scissors size={16} />
                    <span>{producto.tecnica}</span>
                  </div>
                </div>

                <div className="productos-categoria__card-footer">
                  <div className="productos-categoria__card-price-wrapper">
                    <p className="productos-categoria__card-price">
                      ${producto.precio.toLocaleString('es-MX')}
                    </p>
                    <p className="productos-categoria__card-currency">MXN</p>
                  </div>
                  <button 
                    onClick={() => handleVerDetalles(producto)}
                    className="productos-categoria__card-btn"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProductos.length === 0 && (
          <div className="productos-categoria__empty">
            <Package size={64} className="productos-categoria__empty-icon" />
            <h3 className="productos-categoria__empty-title">No se encontraron productos</h3>
            <p className="productos-categoria__empty-text">
              Intenta con otro término de búsqueda
            </p>
          </div>
        )}
      </div>

      {detalleModalOpen && productoSeleccionado && (
        <div className="productos-categoria__modal-overlay">
          <div className="productos-categoria__modal">
            <div className="productos-categoria__modal-header">
              <h2 className="productos-categoria__modal-title">Detalles del Producto</h2>
              <button 
                onClick={() => setDetalleModalOpen(false)}
                className="productos-categoria__modal-close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="productos-categoria__modal-body">
              <div className="productos-categoria__modal-grid">
                <div>
                  <img
                    src={productoSeleccionado.imagen}
                    alt={productoSeleccionado.nombre}
                    className="productos-categoria__modal-image"
                  />
                </div>

                <div className="productos-categoria__modal-info">
                  <div>
                    <span className="productos-categoria__modal-category">
                      {productoSeleccionado.categoria}
                    </span>
                    <h3 className="productos-categoria__modal-name">
                      {productoSeleccionado.nombre}
                    </h3>
                    <p className="productos-categoria__modal-desc">
                      {productoSeleccionado.descripcion}
                    </p>
                  </div>

                  <div className="productos-categoria__modal-specs">
                    <div className="productos-categoria__modal-spec">
                      <Scissors size={20} />
                      <div>
                        <p className="productos-categoria__modal-spec-label">Técnica</p>
                        <p className="productos-categoria__modal-spec-value">
                          {productoSeleccionado.tecnica}
                        </p>
                      </div>
                    </div>

                    <div className="productos-categoria__modal-spec">
                      <MapPin size={20} />
                      <div>
                        <p className="productos-categoria__modal-spec-label">Origen</p>
                        <p className="productos-categoria__modal-spec-value">
                          {productoSeleccionado.origen}
                        </p>
                      </div>
                    </div>

                    <div className="productos-categoria__modal-spec">
                      <Sparkles size={20} />
                      <div>
                        <p className="productos-categoria__modal-spec-label">Materiales</p>
                        <p className="productos-categoria__modal-spec-value">
                          {productoSeleccionado.materiales}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="productos-categoria__modal-price-box">
                    <div>
                      <p className="productos-categoria__modal-price-label">Precio</p>
                      <p className="productos-categoria__modal-price-value">
                        ${productoSeleccionado.precio.toLocaleString('es-MX')}
                      </p>
                      <p className="productos-categoria__modal-price-currency">MXN</p>
                    </div>
                    <Package size={48} className="productos-categoria__modal-price-icon" />
                  </div>

                  <button className="productos-categoria__modal-add-btn">
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
        .productos-categoria {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #F8FAFC, #E2E8F0);
        }

        .productos-categoria__hero {
          background: linear-gradient(135deg, #3B82F6, #2563eb);
          padding: 4rem 1rem 3rem;
          color: #FFFFFF;
          position: relative;
          overflow: hidden;
        }

        .productos-categoria__hero::before {
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

        .productos-categoria__hero-content {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .productos-categoria__back-btn {
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

        .productos-categoria__back-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateX(-4px);
        }

        .productos-categoria__hero-info {
          text-align: center;
        }

        .productos-categoria__hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin: 0 0 1rem 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .productos-categoria__hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.95;
          margin: 0;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .productos-categoria__main {
          max-width: 1280px;
          margin: -2rem auto 0;
          padding: 0 1rem 4rem;
          position: relative;
          z-index: 2;
        }

        .productos-categoria__filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          background: #FFFFFF;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(30, 41, 59, 0.1);
        }

        .productos-categoria__search-wrapper {
          position: relative;
          flex: 1;
        }

        .productos-categoria__search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #334155;
          opacity: 0.5;
        }

        .productos-categoria__search-input {
          width: 93%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 1px solid #E2E8F0;
          border-radius: 0.5rem;
          font-size: 1rem;
          color: #334155;
        }

        .productos-categoria__search-input:focus {
          outline: none;
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .productos-categoria__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .productos-categoria__card {
          background: #FFFFFF;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(30, 41, 59, 0.1);
          transition: all 0.3s;
          cursor: pointer;
        }

        .productos-categoria__card:hover {
          box-shadow: 0 12px 24px rgba(30, 41, 59, 0.15);
          transform: translateY(-4px);
        }

        .productos-categoria__card-image-wrapper {
          position: relative;
          height: 20rem;
          overflow: hidden;
        }

        .productos-categoria__card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .productos-categoria__card:hover .productos-categoria__card-image {
          transform: scale(1.05);
        }

        .productos-categoria__card-favorite {
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

        .productos-categoria__card-favorite:hover {
          background: #3B82F6;
          color: #FFFFFF;
        }

        .productos-categoria__card-badges {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
        }

        .productos-categoria__card-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .productos-categoria__card-badge--stock {
          background: rgba(16, 185, 129, 0.95);
          color: #FFFFFF;
        }

        .productos-categoria__card-badge--out {
          background: rgba(239, 68, 68, 0.95);
          color: #FFFFFF;
        }

        .productos-categoria__card-body {
          padding: 1.5rem;
        }

        .productos-categoria__card-name {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1E293B;
          margin: 0 0 0.5rem 0;
        }

        .productos-categoria__card-desc {
          font-size: 0.875rem;
          color: #334155;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .productos-categoria__card-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #E2E8F0;
        }

        .productos-categoria__card-detail {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #334155;
        }

        .productos-categoria__card-detail svg {
          color: #3B82F6;
        }

        .productos-categoria__card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .productos-categoria__card-price {
          font-size: 1.75rem;
          font-weight: bold;
          color: #3B82F6;
          margin: 0;
        }

        .productos-categoria__card-currency {
          font-size: 0.75rem;
          color: #334155;
          opacity: 0.7;
        }

        .productos-categoria__card-btn {
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

        .productos-categoria__card-btn:hover {
          background: #2563eb;
          transform: scale(1.1);
        }

        .productos-categoria__empty {
          text-align: center;
          padding: 4rem 1rem;
        }

        .productos-categoria__empty-icon {
          color: #E2E8F0;
          margin: 0 auto 1.5rem;
        }

        .productos-categoria__empty-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1E293B;
        }

        .productos-categoria__modal-overlay {
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

        .productos-categoria__modal {
          background: #FFFFFF;
          border-radius: 1rem;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: auto;
        }

        .productos-categoria__modal-header {
          border-bottom: 1px solid #E2E8F0;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .productos-categoria__modal-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1E293B;
          margin: 0;
        }

        .productos-categoria__modal-close {
          color: #334155;
          background: none;
          border: none;
          cursor: pointer;
        }

        .productos-categoria__modal-body {
          padding: 1.5rem;
        }

        .productos-categoria__modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .productos-categoria__modal-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 0.75rem;
        }

        .productos-categoria__modal-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .productos-categoria__modal-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: #3B82F6;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          display: inline-block;
        }

        .productos-categoria__modal-name {
          font-size: 1.875rem;
          font-weight: bold;
          color: #1E293B;
          margin: 0.5rem 0;
        }

        .productos-categoria__modal-desc {
          font-size: 1rem;
          color: #334155;
        }

        .productos-categoria__modal-specs {
          background: #F8FAFC;
          padding: 1.5rem;
          border-radius: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .productos-categoria__modal-spec {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .productos-categoria__modal-spec svg {
          color: #3B82F6;
        }

        .productos-categoria__modal-spec-label {
          font-size: 0.75rem;
          color: #334155;
          margin: 0;
        }

        .productos-categoria__modal-spec-value {
          font-size: 1rem;
          font-weight: 600;
          color: #1E293B;
          margin: 0;
        }

        .productos-categoria__modal-price-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: linear-gradient(135deg, #93C5FD, #3B82F6);
          border-radius: 0.75rem;
        }

        .productos-categoria__modal-price-label {
          font-size: 0.875rem;
          color: white;
          opacity: 0.9;
          margin: 0;
        }

        .productos-categoria__modal-price-value {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin: 0;
        }

        .productos-categoria__modal-price-currency {
          font-size: 0.875rem;
          color: white;
          opacity: 0.8;
        }

        .productos-categoria__modal-price-icon {
          color: white;
          opacity: 0.3;
        }

        .productos-categoria__modal-add-btn {
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
          justify-center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .productos-categoria__modal-add-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .productos-categoria__hero-title {
            font-size: 2.25rem;
          }

          .productos-categoria__modal-grid {
            grid-template-columns: 1fr;
          }

          .productos-categoria__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}