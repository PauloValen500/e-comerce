// UserCategoria.jsx - ACTUALIZADO con navegación correcta

import { ArrowRight, Package, MapPin, Scissors, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './UserCategoria.css';

export default function UserCategoria() {
  const navigate = useNavigate();

  const categorias = [
    {
      id: 1,
      nombre: 'Huipiles',
      ruta: '/productos/huipiles',
      descripcion: 'Prendas tradicionales bordadas a mano con técnicas ancestrales zapotecas. Cada huipil cuenta una historia única.',
      imagen: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop',
      totalProductos: 5,
      rangoPrecios: '$2,650 - $3,500',
      tecnicas: ['Bordado a mano', 'Bordado en realce', 'Telar de pedal'],
      coloresDisponibles: 6
    },
    {
      id: 2,
      nombre: 'Blusas Bordadas',
      ruta: '/productos/blusas',
      descripcion: 'Blusas istmeñas con flores bordadas tradicionales. Cada pieza representa la belleza y tradición de las tehuanas oaxaqueñas.',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
      totalProductos: 5,
      rangoPrecios: '$1,950 - $2,450',
      tecnicas: ['Bordado de flores', 'Bordado con cadeneta', 'Bordado a máquina'],
      coloresDisponibles: 8
    },
    {
      id: 3,
      nombre: 'Rebozos',
      ruta: '/productos/rebozos',
      descripcion: 'Rebozos tejidos en telar de pedal con diseños tradicionales. Elaborados con algodón 100% y técnicas transmitidas por generaciones.',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop',
      totalProductos: 5,
      rangoPrecios: '$1,650 - $1,950',
      tecnicas: ['Telar de cintura', 'Tinte natural', 'Urdimbre jaspeada'],
      coloresDisponibles: 5
    },
    {
      id: 4,
      nombre: 'Guayaberas',
      ruta: '/productos/guayaberas',
      descripcion: 'Guayaberas de lino artesanales con detalles bordados. Elegancia y tradición oaxaqueña en cada puntada.',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=600&fit=crop',
      totalProductos: 5,
      rangoPrecios: '$1,800 - $2,200',
      tecnicas: ['Bordado artesanal', 'Confección tradicional'],
      coloresDisponibles: 5
    },
    {
      id: 5,
      nombre: 'Faldas',
      ruta: '/productos/faldas',
      descripcion: 'Faldas de enredo tradicionales tejidas con diseños vibrantes. Elaboradas con lana natural y tintes vegetales.',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=600&fit=crop',
      totalProductos: 5,
      rangoPrecios: '$1,750 - $2,100',
      tecnicas: ['Telar de pedal', 'Brocado', 'Tintes naturales'],
      coloresDisponibles: 7
    },
    {
      id: 6,
      nombre: 'Quechquémitl',
      ruta: '/productos/quechquemitl',
      descripcion: 'Prenda tradicional ceremonial con bordado zapoteco. Tejida en telar de cintura con técnica de brocado ancestral.',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=600&fit=crop',
      totalProductos: 5,
      rangoPrecios: '$1,850 - $2,300',
      tecnicas: ['Telar de cintura con brocado', 'Bordado tradicional'],
      coloresDisponibles: 4
    }
  ];

  const handleNavigateCategoria = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="user-categoria">
      {/* Hero Section */}
      <div className="user-categoria__hero">
        <div className="user-categoria__hero-content">
          <h1 className="user-categoria__hero-title">Explora Nuestras Categorías</h1>
          <p className="user-categoria__hero-subtitle">
            Descubre piezas únicas organizadas por tipo de producto artesanal
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="user-categoria__main">
        {/* Category Cards */}
        <div className="user-categoria__categories-grid">
          {categorias.map((categoria) => (
            <div 
              key={categoria.id} 
              className="user-categoria__category-card"
              onClick={() => handleNavigateCategoria(categoria.ruta)}
            >
              <div className="user-categoria__category-image-wrapper">
                <img 
                  src={categoria.imagen} 
                  alt={categoria.nombre}
                  className="user-categoria__category-image"
                />
                <div className="user-categoria__category-overlay">
                  <h2 className="user-categoria__category-label">{categoria.nombre}</h2>
                </div>
              </div>

              <div className="user-categoria__category-body">
                <p className="user-categoria__category-desc">{categoria.descripcion}</p>

                <div className="user-categoria__category-stats">
                  <div className="user-categoria__category-stats-row">
                    <div className="user-categoria__category-stat">
                      <p className="user-categoria__category-stat-value">{categoria.totalProductos}</p>
                      <p className="user-categoria__category-stat-label">Productos</p>
                    </div>
                    <div className="user-categoria__category-stat">
                      <p className="user-categoria__category-stat-value">{categoria.coloresDisponibles}</p>
                      <p className="user-categoria__category-stat-label">Colores</p>
                    </div>
                  </div>
                  <div className="user-categoria__category-stats-row">
                    <div className="user-categoria__category-stat">
                      <p className="user-categoria__category-stat-value">{categoria.rangoPrecios}</p>
                      <p className="user-categoria__category-stat-label">Rango Precio</p>
                    </div>
                  </div>
                </div>

                <div className="user-categoria__category-techniques">
                  <p className="user-categoria__category-techniques-title">Técnicas artesanales:</p>
                  <div className="user-categoria__category-techniques-list">
                    {categoria.tecnicas.map((tecnica, idx) => (
                      <span key={idx} className="user-categoria__category-technique-tag">
                        {tecnica}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateCategoria(categoria.ruta);
                  }}
                  className="user-categoria__category-btn"
                >
                  Ver {categoria.nombre}
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="user-categoria__info">
          <h2 className="user-categoria__info-title">
            Nuestras Categorías Artesanales
          </h2>
          <p className="user-categoria__info-text">
            Cada categoría representa una tradición única de Oaxaca. Desde huipiles ceremoniales 
            hasta rebozos tejidos a mano, cada pieza es creada con técnicas ancestrales transmitidas 
            por generaciones de artesanos oaxaqueños.
          </p>

          <div className="user-categoria__info-features">
            <div className="user-categoria__info-feature">
              <div className="user-categoria__info-icon">
                <Scissors size={24} />
              </div>
              <h3 className="user-categoria__info-feature-title">Técnicas Ancestrales</h3>
              <p className="user-categoria__info-feature-desc">
                Bordados a mano y tejidos en telar tradicional
              </p>
            </div>

            <div className="user-categoria__info-feature">
              <div className="user-categoria__info-icon">
                <Sparkles size={24} />
              </div>
              <h3 className="user-categoria__info-feature-title">Diseños Únicos</h3>
              <p className="user-categoria__info-feature-desc">
                Cada pieza es una obra de arte irrepetible
              </p>
            </div>

            <div className="user-categoria__info-feature">
              <div className="user-categoria__info-icon">
                <MapPin size={24} />
              </div>
              <h3 className="user-categoria__info-feature-title">Origen Certificado</h3>
              <p className="user-categoria__info-feature-desc">
                Directo de comunidades artesanales de Oaxaca
              </p>
            </div>

            <div className="user-categoria__info-feature">
              <div className="user-categoria__info-icon">
                <Package size={24} />
              </div>
              <h3 className="user-categoria__info-feature-title">Calidad Premium</h3>
              <p className="user-categoria__info-feature-desc">
                Materiales naturales de la más alta calidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}