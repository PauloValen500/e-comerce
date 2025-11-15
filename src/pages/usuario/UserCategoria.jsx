import { ArrowRight, Package, MapPin, Scissors, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <div className="space-y-6 mt-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Explora Nuestras Categorías</h2>
        <p className="text-gray-600">Descubre piezas únicas organizadas por tipo de producto artesanal</p>
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(350px,1fr))]">
        {categorias.map((categoria) => (
          <div 
            key={categoria.id} 
            className="bg-white rounded-2xl overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition cursor-pointer"
            onClick={() => handleNavigateCategoria(categoria.ruta)}
          >
            <div className="relative h-[300px] overflow-hidden group">
              <img 
                src={categoria.imagen} 
                alt={categoria.nombre}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 flex items-end p-6">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">{categoria.nombre}</h3>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">{categoria.descripcion}</p>

              <div className="space-y-2">
                <div className="flex justify-around items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="text-center flex-1">
                    <p className="text-2xl font-bold text-blue-600 leading-none">{categoria.totalProductos}</p>
                    <p className="text-[10px] text-gray-700 uppercase tracking-wider mt-0.5 font-semibold">Productos</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-2xl font-bold text-purple-600 leading-none">{categoria.coloresDisponibles}</p>
                    <p className="text-[10px] text-gray-700 uppercase tracking-wider mt-0.5 font-semibold">Colores</p>
                  </div>
                </div>
                <div className="flex justify-center items-center p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                  <div className="text-center flex-1">
                    <p className="text-xl font-bold text-emerald-600 leading-none">{categoria.rangoPrecios}</p>
                    <p className="text-[10px] text-gray-700 uppercase tracking-wider mt-0.5 font-semibold">Rango Precio</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">Técnicas artesanales:</p>
                <div className="flex flex-wrap gap-1.5">
                  {categoria.tecnicas.map((tecnica, idx) => (
                    <span key={idx} className="text-[10px] px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
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
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                Ver {categoria.nombre}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-[0_3px_6px_rgba(0,0,0,0.08)] space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Nuestras Categorías Artesanales</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada categoría representa una tradición única de Oaxaca. Desde huipiles ceremoniales 
            hasta rebozos tejidos a mano, cada pieza es creada con técnicas ancestrales transmitidas 
            por generaciones de artesanos oaxaqueños.
          </p>
        </div>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] mt-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Scissors size={22} />
            </div>
            <h3 className="text-sm font-semibold text-gray-800">Técnicas Ancestrales</h3>
            <p className="text-xs text-gray-600">Bordados a mano y tejidos en telar tradicional</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Sparkles size={22} />
            </div>
            <h3 className="text-sm font-semibold text-gray-800">Diseños Únicos</h3>
            <p className="text-xs text-gray-600">Cada pieza es una obra de arte irrepetible</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <MapPin size={22} />
            </div>
            <h3 className="text-sm font-semibold text-gray-800">Origen Certificado</h3>
            <p className="text-xs text-gray-600">Directo de comunidades artesanales de Oaxaca</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Package size={22} />
            </div>
            <h3 className="text-sm font-semibold text-gray-800">Calidad Premium</h3>
            <p className="text-xs text-gray-600">Materiales naturales de la más alta calidad</p>
          </div>
        </div>
      </div>
    </div>
  );
}