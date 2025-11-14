import { ArrowRight, Users, Sparkles, Heart, Award } from 'lucide-react';
import './UserDepartamento.css';

export default function UserDepartamento() {
  const departamentos = [
    {
      id: 'mujer',
      nombre: 'Mujer',
      descripcion: 'Descubre nuestra colección de textiles tradicionales para mujer. Huipiles bordados, blusas istmeñas, rebozos y faldas elaboradas con técnicas ancestrales por artesanas oaxaqueñas.',
      imagen: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop',
      totalProductos: 24,
      categorias: ['Huipiles', 'Blusas Bordadas', 'Rebozos', 'Faldas', 'Quechquémitl'],
      rangoPrecios: '$1,650 - $2,850'
    },
    {
      id: 'hombre',
      nombre: 'Hombre',
      descripcion: 'Explora nuestra selección de prendas tradicionales para hombre. Guayaberas de lino artesanales con bordados únicos que combinan elegancia y tradición oaxaqueña.',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=600&fit=crop',
      totalProductos: 6,
      categorias: ['Guayaberas', 'Camisas Bordadas'],
      rangoPrecios: '$1,950 - $2,400'
    }
  ];

  const handleNavigateDept = (deptId) => {
    console.log(`Navegando a departamento: ${deptId}`);
    // Aquí iría la navegación real en tu app
    // Por ejemplo: navigate(`/productos/${deptId}`);
  };

  return (
    <div className="user-departamentos">
      {/* Hero Section */}
      <div className="user-departamentos__hero">
        <div className="user-departamentos__hero-content">
          <h1 className="user-departamentos__hero-title">Explora Nuestros Departamentos</h1>
          <p className="user-departamentos__hero-subtitle">
            Textiles tradicionales oaxaqueños para toda la familia, elaborados con técnicas ancestrales
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="user-departamentos__main">
        {/* Department Cards */}
        <div className="user-departamentos__departments-grid">
          {departamentos.map((dept) => (
            <div 
              key={dept.id} 
              className="user-departamentos__dept-card"
              onClick={() => handleNavigateDept(dept.id)}
            >
              <div className="user-departamentos__dept-image-wrapper">
                <img 
                  src={dept.imagen} 
                  alt={dept.nombre}
                  className="user-departamentos__dept-image"
                />
                <div className="user-departamentos__dept-overlay">
                  <h2 className="user-departamentos__dept-label">{dept.nombre}</h2>
                </div>
              </div>

              <div className="user-departamentos__dept-body">
                <p className="user-departamentos__dept-desc">{dept.descripcion}</p>

                <div className="user-departamentos__dept-stats">
                  <div className="user-departamentos__dept-stat">
                    <p className="user-departamentos__dept-stat-value">{dept.totalProductos}</p>
                    <p className="user-departamentos__dept-stat-label">Productos</p>
                  </div>
                  <div className="user-departamentos__dept-stat">
                    <p className="user-departamentos__dept-stat-value">{dept.categorias.length}</p>
                    <p className="user-departamentos__dept-stat-label">Categorías</p>
                  </div>
                  <div className="user-departamentos__dept-stat">
                    <p className="user-departamentos__dept-stat-value">{dept.rangoPrecios}</p>
                    <p className="user-departamentos__dept-stat-label">Rango Precio</p>
                  </div>
                </div>

                <div className="user-departamentos__dept-categories">
                  <p className="user-departamentos__dept-categories-title">Categorías disponibles:</p>
                  <div className="user-departamentos__dept-categories-list">
                    {dept.categorias.map((cat, idx) => (
                      <span key={idx} className="user-departamentos__dept-category-tag">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateDept(dept.id);
                  }}
                  className="user-departamentos__dept-btn"
                >
                  Explorar {dept.nombre}
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="user-departamentos__info">
          <h2 className="user-departamentos__info-title">
            ¿Por qué elegir Raíz Oaxaca?
          </h2>
          <p className="user-departamentos__info-text">
            En Raíz Oaxaca conectamos el trabajo artesanal de comunidades tradicionales oaxaqueñas 
            con personas que valoran la autenticidad, calidad y la preservación cultural. 
            Cada pieza cuenta una historia única de tradición y dedicación.
          </p>

          <div className="user-departamentos__info-features">
            <div className="user-departamentos__info-feature">
              <div className="user-departamentos__info-icon">
                <Heart size={24} />
              </div>
              <h3 className="user-departamentos__info-feature-title">100% Artesanal</h3>
              <p className="user-departamentos__info-feature-desc">
                Cada pieza elaborada a mano por artesanos oaxaqueños
              </p>
            </div>

            <div className="user-departamentos__info-feature">
              <div className="user-departamentos__info-icon">
                <Award size={24} />
              </div>
              <h3 className="user-departamentos__info-feature-title">Técnicas Ancestrales</h3>
              <p className="user-departamentos__info-feature-desc">
                Preservamos métodos tradicionales de más de 3,000 años
              </p>
            </div>

            <div className="user-departamentos__info-feature">
              <div className="user-departamentos__info-icon">
                <Users size={24} />
              </div>
              <h3 className="user-departamentos__info-feature-title">Comercio Justo</h3>
              <p className="user-departamentos__info-feature-desc">
                Relación directa con artesanos, precios justos
              </p>
            </div>

            <div className="user-departamentos__info-feature">
              <div className="user-departamentos__info-icon">
                <Sparkles size={24} />
              </div>
              <h3 className="user-departamentos__info-feature-title">Piezas Únicas</h3>
              <p className="user-departamentos__info-feature-desc">
                Cada producto es una obra de arte irrepetible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}