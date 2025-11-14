import { ArrowLeft, Search, Heart, ShoppingCart, MapPin, Scissors, X, Sparkles, Package } from 'lucide-react';
import { useState } from 'react';
import './ProductosCategoria.css';

export default function ProductosRebozos() {
  const [categoriaActual] = useState({
    id: 3,
    nombre: 'Rebozos',
    descripcion: 'Rebozos tejidos en telar de pedal con diseños tradicionales. Elaborados con algodón 100% y técnicas transmitidas por generaciones',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: 'Rebozo de Algodón Azul Índigo',
      descripcion: 'Rebozo tradicional tejido en telar de cintura con tinte natural de añil',
      precio: 1650,
      stock: 5,
      categoria: 'Rebozos',
      tecnica: 'Telar de cintura con tinte natural',
      origen: 'San Pedro Cajonos, Sierra Norte',
      materiales: 'Algodón hilado a mano, tinte de añil',
      tiempoElaboracion: '3-4 semanas',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    },
    {
      id: 2,
      nombre: 'Rebozo de Seda Natural Beige',
      descripcion: 'Rebozo de seda silvestre con textura irregular y brillo sutil natural',
      precio: 1950,
      stock: 3,
      categoria: 'Rebozos',
      tecnica: 'Telar de cintura con seda silvestre',
      origen: 'Yalalag, Sierra Norte',
      materiales: 'Seda de gusano silvestre, tintes naturales',
      tiempoElaboracion: '4-5 semanas',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Rebozo Multicolor con Franjas',
      descripcion: 'Rebozo con técnica ikat y múltiples colores naturales en franjas',
      precio: 1800,
      stock: 4,
      categoria: 'Rebozos',
      tecnica: 'Telar de cintura con urdimbre jaspeada',
      origen: 'Villa de Etla, Valles Centrales',
      materiales: 'Algodón teñido, múltiples colores naturales',
      tiempoElaboracion: '4-5 semanas',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Rebozo Negro con Hilos Dorados',
      descripcion: 'Rebozo ceremonial con brocado metálico dorado para uso festivo',
      precio: 1900,
      stock: 2,
      categoria: 'Rebozos',
      tecnica: 'Telar de cintura con brocado metálico',
      origen: 'Ocotlán de Morelos, Valles Centrales',
      materiales: 'Algodón negro, hilos dorados sintéticos',
      tiempoElaboracion: '4-6 semanas',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Rebozo Tradicional Café con Flecos',
      descripcion: 'Rebozo de color café natural con flecos largos trabajados artesanalmente',
      precio: 1700,
      stock: 6,
      categoria: 'Rebozos',
      tecnica: 'Telar de cintura tradicional',
      origen: 'Tlacolula, Valles Centrales',
      materiales: 'Algodón teñido con corteza de encino',
      tiempoElaboracion: '3-4 semanas',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
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