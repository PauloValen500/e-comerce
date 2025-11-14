import { ArrowLeft, Search, Heart, ShoppingCart, MapPin, Scissors, X, Sparkles, Package } from 'lucide-react';
import { useState } from 'react';
import './ProductosCategoria.css';

export default function ProductosGuayaberas() {
  const [categoriaActual] = useState({
    id: 4,
    nombre: 'Guayaberas',
    descripcion: 'Guayaberas de lino artesanales con detalles bordados. Elegancia y tradición oaxaqueña en cada puntada',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: 'Guayabera Blanca Lisa Tradicional',
      descripcion: 'Guayabera clásica de lino blanco con cuatro bolsillos y alforzas verticales',
      precio: 1800,
      stock: 5,
      categoria: 'Guayaberas',
      tecnica: 'Confección artesanal con costuras francesas',
      origen: 'Oaxaca de Juárez, Valles Centrales',
      materiales: 'Lino blanco 100% natural',
      tiempoElaboracion: '1-2 semanas',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
    },
    {
      id: 2,
      nombre: 'Guayabera Beige con Bordado Discreto',
      descripcion: 'Guayabera de lino beige con bordado geométrico tono sobre tono',
      precio: 1950,
      stock: 4,
      categoria: 'Guayaberas',
      tecnica: 'Confección con bordado a mano',
      origen: 'Zimatlán, Valles Centrales',
      materiales: 'Lino beige, hilos de algodón tono sobre tono',
      tiempoElaboracion: '2-3 semanas',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Guayabera Azul Cielo con Aplicaciones',
      descripcion: 'Guayabera única con aplicaciones de manta en forma de grecas zapotecas',
      precio: 2100,
      stock: 3,
      categoria: 'Guayaberas',
      tecnica: 'Confección con aplicaciones de manta',
      origen: 'Ejutla, Valles Centrales',
      materiales: 'Lino azul claro, aplicaciones de manta blanca',
      tiempoElaboracion: '2-3 semanas',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Guayabera Gris con Detalles Artesanales',
      descripcion: 'Guayabera elegante con botones artesanales de coco y corte recto',
      precio: 2000,
      stock: 4,
      categoria: 'Guayaberas',
      tecnica: 'Confección con botones de coco',
      origen: 'Zaachila, Valles Centrales',
      materiales: 'Lino gris, botones de coco natural',
      tiempoElaboracion: '1-2 semanas',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Guayabera Natural con Bordado Zapoteco',
      descripcion: 'Guayabera de lino natural con motivos zapotecos en cuello y bolsillos',
      precio: 2200,
      stock: 3,
      categoria: 'Guayaberas',
      tecnica: 'Confección con bordado tradicional',
      origen: 'Mitla, Valles Centrales',
      materiales: 'Lino natural sin blanquear, hilos de algodón',
      tiempoElaboracion: '2-3 semanas',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
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
    </div>
  );
}