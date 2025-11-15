import { ArrowRight, Users, Sparkles, Heart, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UserDepartamento() {
  const navigate = useNavigate();
  
  const departamentos = [
    {
      id: 'mujer',
      nombre: 'Mujer',
      descripcion: 'Descubre nuestra colección de textiles tradicionales para mujer. Huipiles bordados, blusas istmeñas, rebozos y faldas elaboradas con técnicas ancestrales por artesanas oaxaqueñas.',
      imagen: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop',
      totalProductos: 24,
      categorias: ['Huipiles', 'Blusas Bordadas', 'Rebozos', 'Faldas', 'Quechquémitl'],
      rangoPrecios: '$1,650 - $3,500'
    },
    {
      id: 'hombre',
      nombre: 'Hombre',
      descripcion: 'Explora nuestra selección de prendas tradicionales para hombre. Guayaberas de lino artesanales con bordados únicos que combinan elegancia y tradición oaxaqueña.',
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=600&fit=crop',
      totalProductos: 6,
      categorias: ['Guayaberas', 'Camisas Bordadas'],
      rangoPrecios: '$1,800 - $2,400'
    }
  ];

  const handleNavigateDept = (deptId) => {
    const rutasPorDept = {
      'mujer': '/userproductomujer',
      'hombre': '/userproductoshombre'
    };
    
    const ruta = rutasPorDept[deptId];
    if (ruta) {
      navigate(ruta);
    }
  };

        return (
    <div className="space-y-6 mt-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Explora Nuestros Departamentos</h2>
        <p className="text-gray-600">Textiles tradicionales oaxaqueños para toda la familia, elaborados con técnicas ancestrales</p>
      </div>

      {/* Department Cards Grid */}
      <div className="user-departamento__grid">
        {departamentos.map((dept) => (
          <div 
            key={dept.id} 
            className="user-departamento__card"
            onClick={() => handleNavigateDept(dept.id)}
          >
            {/* Imagen del departamento */}
            <div className="user-departamento__card-image-wrapper">
              <img 
                src={dept.imagen} 
                alt={dept.nombre}
                className="user-departamento__card-image"
              />
              <div className="user-departamento__card-overlay">
                <h3 className="user-departamento__card-name">{dept.nombre}</h3>
              </div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="user-departamento__card-body">
              <p className="user-departamento__card-desc">{dept.descripcion}</p>

              {/* Stats */}
              <div className="user-departamento__stats">
                <div className="user-departamento__stat">
                  <p className="user-departamento__stat-value">{dept.totalProductos}</p>
                  <p className="user-departamento__stat-label">Productos</p>
                </div>
                <div className="user-departamento__stat">
                  <p className="user-departamento__stat-value">{dept.categorias.length}</p>
                  <p className="user-departamento__stat-label">Categorías</p>
                </div>
                <div className="user-departamento__stat user-departamento__stat--price">
                  <p className="user-departamento__stat-value-small">{dept.rangoPrecios}</p>
                  <p className="user-departamento__stat-label">Rango Precio</p>
                </div>
              </div>

              {/* Categorías disponibles */}
              <div className="user-departamento__categories">
                <p className="user-departamento__categories-title">Categorías disponibles:</p>
                <div className="user-departamento__categories-list">
                  {dept.categorias.map((cat, idx) => (
                    <span key={idx} className="user-departamento__category-tag">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigateDept(dept.id);
                }}
                className="user-departamento__btn"
              >
                Explorar {dept.nombre}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="user-departamento__info">
        <div className="user-departamento__info-header">
          <h2 className="user-departamento__info-title">¿Por qué elegir Raíz Oaxaca?</h2>
          <p className="user-departamento__info-subtitle">
            En Raíz Oaxaca conectamos el trabajo artesanal de comunidades tradicionales oaxaqueñas 
            con personas que valoran la autenticidad, calidad y la preservación cultural. 
            Cada pieza cuenta una historia única de tradición y dedicación.
          </p>
        </div>

        <div className="user-departamento__features">
          <div className="user-departamento__feature">
            <div className="user-departamento__feature-icon">
              <Heart size={22} />
            </div>
            <h3 className="user-departamento__feature-title">100% Artesanal</h3>
            <p className="user-departamento__feature-desc">
              Cada pieza elaborada a mano por artesanos oaxaqueños
            </p>
          </div>

          <div className="user-departamento__feature">
            <div className="user-departamento__feature-icon">
              <Award size={22} />
            </div>
            <h3 className="user-departamento__feature-title">Técnicas Ancestrales</h3>
            <p className="user-departamento__feature-desc">
              Preservamos métodos tradicionales de más de 3,000 años
            </p>
          </div>

          <div className="user-departamento__feature">
            <div className="user-departamento__feature-icon">
              <Users size={22} />
            </div>
            <h3 className="user-departamento__feature-title">Comercio Justo</h3>
            <p className="user-departamento__feature-desc">
              Relación directa con artesanos, precios justos
            </p>
          </div>

          <div className="user-departamento__feature">
            <div className="user-departamento__feature-icon">
              <Sparkles size={22} />
            </div>
            <h3 className="user-departamento__feature-title">Piezas Únicas</h3>
            <p className="user-departamento__feature-desc">
              Cada producto es una obra de arte irrepetible
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .user-departamento {
          min-height: 100vh;
          padding: 2rem 1rem;
        }

        .user-departamento__header {
          margin-bottom: 2rem;
        }

        .user-departamento__title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #1E293B;
          margin: 0 0 1rem 0;
        }

        .user-departamento__subtitle {
          font-size: 1rem;
          color: #475569;
          margin: 0;
        }

        .user-departamento__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .user-departamento__card {
          background: #FFFFFF;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(30, 41, 59, 0.1);
          transition: all 0.3s;
          cursor: pointer;
        }

        .user-departamento__card:hover {
          box-shadow: 0 12px 24px rgba(30, 41, 59, 0.15);
          transform: translateY(-4px);
        }

        .user-departamento__card-image-wrapper {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .user-departamento__card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .user-departamento__card:hover .user-departamento__card-image {
          transform: scale(1.1);
        }

        .user-departamento__card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(30, 41, 59, 0.7));
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
        }

        .user-departamento__card-name {
          font-size: 2rem;
          font-weight: bold;
          color: #FFFFFF;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .user-departamento__card-body {
          padding: 1.5rem;
        }

        .user-departamento__card-desc {
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .user-departamento__stats {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: #F8FAFC;
          border-radius: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .user-departamento__stat {
          text-align: center;
          flex: 1;
        }

        .user-departamento__stat-value {
          font-size: 1.75rem;
          font-weight: bold;
          color: #3B82F6;
          line-height: 1;
          margin: 0;
        }

        .user-departamento__stat--price .user-departamento__stat-value-small {
          font-size: 1.125rem;
          font-weight: bold;
          color: #3B82F6;
          line-height: 1;
          margin: 0;
        }

        .user-departamento__stat-label {
          font-size: 0.625rem;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.25rem;
        }

        .user-departamento__categories {
          margin-bottom: 1.25rem;
        }

        .user-departamento__categories-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #1E293B;
          margin: 0 0 0.5rem 0;
        }

        .user-departamento__categories-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .user-departamento__category-tag {
          font-size: 0.625rem;
          padding: 0.375rem 0.75rem;
          background: rgba(59, 130, 246, 0.1);
          color: #3B82F6;
          border-radius: 9999px;
          font-weight: 500;
        }

        .user-departamento__btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #3B82F6;
          color: #FFFFFF;
          border: none;
          padding: 0.875rem 1rem;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .user-departamento__btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .user-departamento__info {
          background: #FFFFFF;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 1px 3px rgba(30, 41, 59, 0.1);
        }

        .user-departamento__info-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .user-departamento__info-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #1E293B;
          margin: 0 0 0.75rem 0;
        }

        .user-departamento__info-subtitle {
          font-size: 1rem;
          color: #475569;
          max-width: 48rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        .user-departamento__features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .user-departamento__feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
        }

        .user-departamento__feature-icon {
          width: 3rem;
          height: 3rem;
          background: #3B82F6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
        }

        .user-departamento__feature-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1E293B;
          margin: 0;
        }

        .user-departamento__feature-desc {
          font-size: 0.75rem;
          color: #475569;
          margin: 0;
        }

        @media (max-width: 768px) {
          .user-departamento__grid {
            grid-template-columns: 1fr;
          }

          .user-departamento__title {
            font-size: 1.5rem;
          }

          .user-departamento__info-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}