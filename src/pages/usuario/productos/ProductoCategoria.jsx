import { ArrowLeft, Search, Heart, ShoppingCart, MapPin, Scissors, X, Sparkles, Package, Filter } from 'lucide-react';
import { useState } from 'react';
import './ProductosCategoria.css';

export default function ProductosCategoria() {
  // En una implementación real, la categoría vendría de los parámetros de la ruta
  const [categoriaActual] = useState({
    id: 1,
    nombre: 'Huipiles',
    descripcion: 'Prendas tradicionales bordadas a mano con técnicas ancestrales zapotecas',
  }); 

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevancia');
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Productos de ejemplo - filtrados por categoría
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
    console.log('Volver a categorías');
  };

  const handleSort = (value) => {
    setSortBy(value);
    // Implementar lógica de ordenamiento
  };

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="productos-categoria">
      {/* Hero Section */}
      <div className="productos-categoria__hero">
        <div className="productos-categoria__hero-content">
          <button onClick={handleVolver} className="productos-categoria__back-btn">
            <ArrowLeft size={20} />
            Volver a Categorías
          </button>

          <div className="productos-categoria__hero-info">
            <span className="productos-categoria__hero-icon">{categoriaActual.icono}</span>
            <h1 className="productos-categoria__hero-title">{categoriaActual.nombre}</h1>
            <p className="productos-categoria__hero-subtitle">{categoriaActual.descripcion}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="productos-categoria__main">
        {/* Filters Bar */}
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

        {/* Products Grid */}
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

      {/* Modal Detalle */}
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
    </div>
  );
}