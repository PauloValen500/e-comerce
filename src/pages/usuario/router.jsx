import { ArrowRight, Package, MapPin, Scissors, Sparkles, Search, Heart, ShoppingCart, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

// Router simple para navegación
function Router() {
  const [currentView, setCurrentView] = useState('categorias');

  const navigate = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const views = {
    categorias: <UserCategoria navigate={navigate} />,
    huipiles: <ProductosCategoria navigate={navigate} />,
    blusas: <ProductosBlusas navigate={navigate} />,
    rebozos: <ProductosRebozos navigate={navigate} />,
    guayaberas: <ProductosGuayaberas navigate={navigate} />,
    faldas: <ProductosFaldas navigate={navigate} />,
    quechquemitl: <ProductosQuechquemitl navigate={navigate} />
  };

  return views[currentView] || views.categorias;
}

// Componente principal de categorías
function UserCategoria({ navigate }) {
  const categorias = [
    {
      id: 1,
      nombre: 'Huipiles',
      ruta: 'huipiles',
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
      ruta: 'blusas',
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
      ruta: 'rebozos',
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
      ruta: 'guayaberas',
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
      ruta: 'faldas',
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
      ruta: 'quechquemitl',
      descripcion: 'Prenda tradicional ceremonial con bordado zapoteco. Tejida en telar de cintura con técnica de brocado ancestral.',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=600&fit=crop',
      totalProductos: 5,
      rangoPrecios: '$1,850 - $2,300',
      tecnicas: ['Telar de cintura con brocado', 'Bordado tradicional'],
      coloresDisponibles: 4
    }
  ];

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
            onClick={() => navigate(categoria.ruta)}
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
                <div className="flex justify-around items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <div className="text-center flex-1">
                    <p className="text-2xl font-bold text-blue-600 leading-none">{categoria.totalProductos}</p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-wider mt-0.5">Productos</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-2xl font-bold text-purple-600 leading-none">{categoria.coloresDisponibles}</p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-wider mt-0.5">Colores</p>
                  </div>
                </div>
                <div className="flex justify-center items-center p-3 bg-slate-50 rounded-xl">
                  <div className="text-center flex-1">
                    <p className="text-xl font-bold text-emerald-600 leading-none">{categoria.rangoPrecios}</p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-wider mt-0.5">Rango Precio</p>
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
                  navigate(categoria.ruta);
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

// Componente de Productos Huipiles
function ProductosCategoria({ navigate }) {
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

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 mt-2">
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => navigate('categorias')}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a Categorías
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-800">Huipiles</h2>
        <p className="text-gray-600">Prendas tradicionales bordadas a mano con técnicas ancestrales zapotecas</p>
      </div>

      <div className="flex items-center bg-white border border-blue-200 rounded-2xl px-3 py-2 gap-2 shadow-sm">
        <Search className="text-blue-600" size={20} />
        <input
          type="text"
          placeholder="Buscar en esta categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {filteredProductos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
              <button className="absolute top-3 left-3 bg-white/95 hover:bg-blue-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all group">
                <Heart size={20} className="group-hover:fill-current" />
              </button>
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${producto.stock > 0 ? 'bg-emerald-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{producto.descripcion}</p>

              <div className="space-y-2 pb-4 border-b border-blue-200">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.origen}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.tecnica}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">${producto.precio.toLocaleString('es-MX')}</p>
                </div>
                <button
                  onClick={() => {
                    setProductoSeleccionado(producto);
                    setDetalleModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  <ShoppingCart size={20} /> Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProductos.length === 0 && (
        <div className="text-center py-12">
          <Package size={64} className="text-blue-200 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
          <p className="text-gray-600">Intenta con otro término de búsqueda</p>
        </div>
      )}

      {detalleModalOpen && productoSeleccionado && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-blue-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Detalles del Producto</h2>
              <button onClick={() => setDetalleModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={productoSeleccionado.imagen}
                    alt={productoSeleccionado.nombre}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">
                      {productoSeleccionado.categoria}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-2">{productoSeleccionado.nombre}</h3>
                    <p className="text-gray-600 leading-relaxed">{productoSeleccionado.descripcion}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-blue-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <Scissors size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Técnica</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.tecnica}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Origen</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.origen}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Materiales</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.materiales}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-blue-600 rounded-xl">
                    <div>
                      <p className="text-sm text-white/90">Precio</p>
                      <p className="text-5xl font-bold text-white">${productoSeleccionado.precio.toLocaleString('es-MX')}</p>
                      <p className="text-sm text-white/80">MXN</p>
                    </div>
                    <Package size={48} className="text-white/30" />
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-4 rounded-xl hover:bg-blue-700 transition font-semibold">
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

// Componente de Productos Blusas (simplificado - similar estructura)
function ProductosBlusas({ navigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: 'Blusa Bordada Negra con Flores Rojas',
      descripcion: 'Blusa de terciopelo con bordado a máquina, flores grandes tradicionales',
      precio: 2100,
      stock: 4,
      categoria: 'Blusas Bordadas',
      tecnica: 'Bordado a máquina sobre terciopelo',
      origen: 'Juchitán, Istmo de Tehuantepec',
      materiales: 'Terciopelo negro, hilos de seda roja y rosa',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    },
    {
      id: 2,
      nombre: 'Blusa Bordada Blanca Tradicional',
      descripcion: 'Blusa con motivos tradicionales en punto de cruz, manga corta',
      precio: 1950,
      stock: 6,
      categoria: 'Blusas Bordadas',
      tecnica: 'Bordado a mano con punto de cruz',
      origen: 'Ixtaltepec, Istmo de Tehuantepec',
      materiales: 'Manta blanca, hilos de algodón multicolor',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Blusa Bordada Azul con Pájaros',
      descripcion: 'Diseño único con pájaros tropicales y flores exóticas bordadas',
      precio: 2250,
      stock: 3,
      categoria: 'Blusas Bordadas',
      tecnica: 'Bordado en satín sobre popelina',
      origen: 'Espinal, Istmo de Tehuantepec',
      materiales: 'Popelina azul marino, hilos de seda',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Blusa Verde con Diseños Geométricos',
      descripcion: 'Patrones geométricos zapotecos con cadeneta y punto lleno',
      precio: 2200,
      stock: 5,
      categoria: 'Blusas Bordadas',
      tecnica: 'Bordado con cadeneta y punto lleno',
      origen: 'Unión Hidalgo, Istmo de Tehuantepec',
      materiales: 'Satín verde, hilos metálicos y de seda',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Blusa Morada con Mariposas',
      descripcion: 'Bordado en realce con mariposas tridimensionales y lentejuelas',
      precio: 2450,
      stock: 2,
      categoria: 'Blusas Bordadas',
      tecnica: 'Bordado en realce con aplicaciones',
      origen: 'Santo Domingo Ingenio, Istmo',
      materiales: 'Terciopelo morado, hilos multicolor, lentejuelas',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop'
    }
  ];

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 mt-2">
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => navigate('categorias')}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a Categorías
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-800">Blusas Bordadas Istmeñas</h2>
        <p className="text-gray-600">Blusas con flores bordadas tradicionales. Cada pieza representa la belleza y tradición de las tehuanas oaxaqueñas</p>
      </div>

      <div className="flex items-center bg-white border border-blue-200 rounded-2xl px-3 py-2 gap-2 shadow-sm">
        <Search className="text-blue-600" size={20} />
        <input
          type="text"
          placeholder="Buscar en esta categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition">
            <div className="relative h-56 overflow-hidden">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
              <button className="absolute top-3 left-3 bg-white/95 hover:bg-blue-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all group">
                <Heart size={20} className="group-hover:fill-current" />
              </button>
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${producto.stock > 0 ? 'bg-emerald-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{producto.descripcion}</p>

              <div className="space-y-2 pb-4 border-b border-blue-200">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.origen}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.tecnica}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">${producto.precio.toLocaleString('es-MX')}</p>
                </div>
                <button onClick={() => { setProductoSeleccionado(producto); setDetalleModalOpen(true); }} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                  <ShoppingCart size={20} /> Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProductos.length === 0 && (
        <div className="text-center py-12">
          <Package size={64} className="text-blue-200 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
          <p className="text-gray-600">Intenta con otro término de búsqueda</p>
        </div>
      )}

      {detalleModalOpen && productoSeleccionado && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-blue-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Detalles del Producto</h2>
              <button onClick={() => setDetalleModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className="w-full h-96 object-cover rounded-xl shadow-lg" />

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">{productoSeleccionado.categoria}</span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-2">{productoSeleccionado.nombre}</h3>
                    <p className="text-gray-600 leading-relaxed">{productoSeleccionado.descripcion}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-blue-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <Scissors size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Técnica</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.tecnica}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Origen</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.origen}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Materiales</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.materiales}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-blue-600 rounded-xl">
                    <div>
                      <p className="text-sm text-white/90">Precio</p>
                      <p className="text-5xl font-bold text-white">${productoSeleccionado.precio.toLocaleString('es-MX')}</p>
                      <p className="text-sm text-white/80">MXN</p>
                    </div>
                    <Package size={48} className="text-white/30" />
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-4 rounded-xl hover:bg-blue-700 transition font-semibold">
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

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <Router />
      </div>
    </div>
  );
}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProductos.length === 0 && (
        <div className="text-center py-12">
          <Package size={64} className="text-blue-200 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
          <p className="text-gray-600">Intenta con otro término de búsqueda</p>
        </div>
      )}

      {detalleModalOpen && productoSeleccionado && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-blue-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Detalles del Producto</h2>
              <button onClick={() => setDetalleModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className="w-full h-96 object-cover rounded-xl shadow-lg" />

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">{productoSeleccionado.categoria}</span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-2">{productoSeleccionado.nombre}</h3>
                    <p className="text-gray-600 leading-relaxed">{productoSeleccionado.descripcion}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-blue-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <Scissors size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Técnica</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.tecnica}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Origen</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.origen}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Materiales</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.materiales}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-blue-600 rounded-xl">
                    <div>
                      <p className="text-sm text-white/90">Precio</p>
                      <p className="text-5xl font-bold text-white">${productoSeleccionado.precio.toLocaleString('es-MX')}</p>
                      <p className="text-sm text-white/80">MXN</p>
                    </div>
                    <Package size={48} className="text-white/30" />
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-4 rounded-xl hover:bg-blue-700 transition font-semibold">
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

// Componente de Productos Rebozos
function ProductosRebozos({ navigate }) {
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
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop'
    }
  ];

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 mt-2">
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => navigate('categorias')}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a Categorías
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-800">Rebozos</h2>
        <p className="text-gray-600">Rebozos tejidos en telar de pedal con diseños tradicionales. Elaborados con algodón 100% y técnicas transmitidas por generaciones</p>
      </div>

      <div className="flex items-center bg-white border border-blue-200 rounded-2xl px-3 py-2 gap-2 shadow-sm">
        <Search className="text-blue-600" size={20} />
        <input
          type="text"
          placeholder="Buscar en esta categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition">
            <div className="relative h-56 overflow-hidden">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
              <button className="absolute top-3 left-3 bg-white/95 hover:bg-blue-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all group">
                <Heart size={20} className="group-hover:fill-current" />
              </button>
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${producto.stock > 0 ? 'bg-emerald-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{producto.descripcion}</p>

              <div className="space-y-2 pb-4 border-b border-blue-200">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.origen}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.tecnica}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">${producto.precio.toLocaleString('es-MX')}</p>
                </div>
                <button onClick={() => { setProductoSeleccionado(producto); setDetalleModalOpen(true); }} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                  <ShoppingCart size={20} /> Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProductos.length === 0 && (
        <div className="text-center py-12">
          <Package size={64} className="text-blue-200 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
          <p className="text-gray-600">Intenta con otro término de búsqueda</p>
        </div>
      )}

      {detalleModalOpen && productoSeleccionado && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-blue-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Detalles del Producto</h2>
              <button onClick={() => setDetalleModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className="w-full h-96 object-cover rounded-xl shadow-lg" />

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">{productoSeleccionado.categoria}</span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-2">{productoSeleccionado.nombre}</h3>
                    <p className="text-gray-600 leading-relaxed">{productoSeleccionado.descripcion}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-blue-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <Scissors size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Técnica</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.tecnica}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Origen</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.origen}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Materiales</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.materiales}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-blue-600 rounded-xl">
                    <div>
                      <p className="text-sm text-white/90">Precio</p>
                      <p className="text-5xl font-bold text-white">${productoSeleccionado.precio.toLocaleString('es-MX')}</p>
                      <p className="text-sm text-white/80">MXN</p>
                    </div>
                    <Package size={48} className="text-white/30" />
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-4 rounded-xl hover:bg-blue-700 transition font-semibold">
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

// Componente de Productos Guayaberas
function ProductosGuayaberas({ navigate }) {
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
      imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
    }
  ];

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 mt-2">
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => navigate('categorias')}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a Categorías
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-800">Guayaberas</h2>
        <p className="text-gray-600">Guayaberas de lino artesanales con detalles bordados. Elegancia y tradición oaxaqueña en cada puntada</p>
      </div>

      <div className="flex items-center bg-white border border-blue-200 rounded-2xl px-3 py-2 gap-2 shadow-sm">
        <Search className="text-blue-600" size={20} />
        <input
          type="text"
          placeholder="Buscar en esta categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition">
            <div className="relative h-56 overflow-hidden">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
              <button className="absolute top-3 left-3 bg-white/95 hover:bg-blue-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all group">
                <Heart size={20} className="group-hover:fill-current" />
              </button>
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${producto.stock > 0 ? 'bg-emerald-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{producto.descripcion}</p>

              <div className="space-y-2 pb-4 border-b border-blue-200">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.origen}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.tecnica}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">${producto.precio.toLocaleString('es-MX')}</p>
                </div>
                <button onClick={() => { setProductoSeleccionado(producto); setDetalleModalOpen(true); }} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                  <ShoppingCart size={20} /> Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProductos.length === 0 && (
        <div className="text-center py-12">
          <Package size={64} className="text-blue-200 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
          <p className="text-gray-600">Intenta con otro término de búsqueda</p>
        </div>
      )}

      {detalleModalOpen && productoSeleccionado && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-blue-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Detalles del Producto</h2>
              <button onClick={() => setDetalleModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className="w-full h-96 object-cover rounded-xl shadow-lg" />

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">{productoSeleccionado.categoria}</span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-2">{productoSeleccionado.nombre}</h3>
                    <p className="text-gray-600 leading-relaxed">{productoSeleccionado.descripcion}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-blue-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <Scissors size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Técnica</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.tecnica}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Origen</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.origen}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Materiales</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.materiales}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-blue-600 rounded-xl">
                    <div>
                      <p className="text-sm text-white/90">Precio</p>
                      <p className="text-5xl font-bold text-white">${productoSeleccionado.precio.toLocaleString('es-MX')}</p>
                      <p className="text-sm text-white/80">MXN</p>
                    </div>
                    <Package size={48} className="text-white/30" />
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-4 rounded-xl hover:bg-blue-700 transition font-semibold">
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

// Componente de Productos Faldas
function ProductosFaldas({ navigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: 'Falda de Enredo Roja con Bordado Floral',
      descripcion: 'Falda tejida en telar de pedal con tinte de cochinilla y flores bordadas',
      precio: 2100,
      stock: 4,
      categoria: 'Faldas de Enredo',
      tecnica: 'Telar de pedal con bordado posterior',
      origen: 'Teotitlán del Valle, Valles Centrales',
      materiales: 'Lana teñida con cochinilla, hilos de algodón',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    },
    {
      id: 2,
      nombre: 'Falda de Enredo Negra con Grecas Doradas',
      descripcion: 'Falda ceremonial con grecas geométricas y cinturón integrado',
      precio: 1950,
      stock: 3,
      categoria: 'Faldas de Enredo',
      tecnica: 'Telar de cintura con brocado',
      origen: 'Santo Tomás Jalieza, Valles Centrales',
      materiales: 'Algodón negro, hilos dorados',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Falda de Enredo Multicolor Tradicional',
      descripcion: 'Falda vibrante con colores naturales y patrón de flores ancestral',
      precio: 1850,
      stock: 5,
      categoria: 'Faldas de Enredo',
      tecnica: 'Telar de cintura con urdimbre jaspeada',
      origen: 'San Antonino Castillo Velasco, Valles Centrales',
      materiales: 'Algodón multicolor, tintes naturales',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Falda de Enredo Azul con Motivos Geométricos',
      descripcion: 'Falda con geometría zapoteca y largo tradicional ceremonial',
      precio: 1900,
      stock: 4,
      categoria: 'Faldas de Enredo',
      tecnica: 'Telar de pedal con diseño brocado',
      origen: 'Díaz Ordaz, Istmo de Tehuantepec',
      materiales: 'Algodón azul marino, hilos contrastantes',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Falda de Enredo Verde con Bordado Istmeño',
      descripcion: 'Falda amplia con bordado floral istmeño y vuelo tradicional',
      precio: 2050,
      stock: 3,
      categoria: 'Faldas de Enredo',
      tecnica: 'Confección con bordado a máquina',
      origen: 'Salina Cruz, Istmo de Tehuantepec',
      materiales: 'Popelina verde, hilos de seda multicolor',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    }
  ];

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 mt-2">
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => navigate('categorias')}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a Categorías
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-800">Faldas de Enredo</h2>
        <p className="text-gray-600">Faldas tradicionales tejidas con diseños vibrantes. Elaboradas con lana natural y tintes vegetales ancestrales</p>
      </div>

      <div className="flex items-center bg-white border border-blue-200 rounded-2xl px-3 py-2 gap-2 shadow-sm">
        <Search className="text-blue-600" size={20} />
        <input
          type="text"
          placeholder="Buscar en esta categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition">
            <div className="relative h-56 overflow-hidden">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
              <button className="absolute top-3 left-3 bg-white/95 hover:bg-blue-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all group">
                <Heart size={20} className="group-hover:fill-current" />
              </button>
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${producto.stock > 0 ? 'bg-emerald-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{producto.descripcion}</p>

              <div className="space-y-2 pb-4 border-b border-blue-200">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.origen}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.tecnica}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">${producto.precio.toLocaleString('es-MX')}</p>
                </div>
                <button onClick={() => { setProductoSeleccionado(producto); setDetalleModalOpen(true); }} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                  <ShoppingCart size={20} /> Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProductos.length === 0 && (
        <div className="text-center py-12">
          <Package size={64} className="text-blue-200 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
          <p className="text-gray-600">Intenta con otro término de búsqueda</p>
        </div>
      )}

      {detalleModalOpen && productoSeleccionado && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-blue-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Detalles del Producto</h2>
              <button onClick={() => setDetalleModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className="w-full h-96 object-cover rounded-xl shadow-lg" />

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">{productoSeleccionado.categoria}</span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-2">{productoSeleccionado.nombre}</h3>
                    <p className="text-gray-600 leading-relaxed">{productoSeleccionado.descripcion}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-blue-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <Scissors size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Técnica</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.tecnica}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Origen</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.origen}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Materiales</p>
                        <p className="text-base font-semibold text-gray-800">{productoSeleccionado.materiales}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-blue-600 rounded-xl">
                    <div>
                      <p className="text-sm text-white/90">Precio</p>
                      <p className="text-5xl font-bold text-white">${productoSeleccionado.precio.toLocaleString('es-MX')}</p>
                      <p className="text-sm text-white/80">MXN</p>
                    </div>
                    <Package size={48} className="text-white/30" />
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-4 rounded-xl hover:bg-blue-700 transition font-semibold">
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

// Componente de Productos Quechquémitl
function ProductosQuechquemitl({ navigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [detalleModalOpen, setDetalleModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: 'Quechquémitl de Lana Natural',
      descripcion: 'Quechquémitl tradicional tejido con lana de oveja natural sin teñir',
      precio: 1850,
      stock: 4,
      categoria: 'Quechquémitl',
      tecnica: 'Telar de cintura tradicional',
      origen: 'Ixtlán de Juárez, Sierra Norte',
      materiales: 'Lana de oveja natural, sin teñir',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 2,
      nombre: 'Quechquémitl Bordado con Flores',
      descripcion: 'Quechquémitl ceremonial con flores pequeñas bordadas a mano',
      precio: 2100,
      stock: 3,
      categoria: 'Quechquémitl',
      tecnica: 'Telar de cintura con bordado posterior',
      origen: 'Villa de Etla, Valles Centrales',
      materiales: 'Algodón blanco, hilos multicolor',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 3,
      nombre: 'Quechquémitl de Algodón con Franjas',
      descripcion: 'Quechquémitl con franjas horizontales en colores tierra naturales',
      precio: 1950,
      stock: 5,
      categoria: 'Quechquémitl',
      tecnica: 'Telar de cintura con urdimbre rayada',
      origen: 'Tlacolula, Valles Centrales',
      materiales: 'Algodón rayado, tintes naturales',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 4,
      nombre: 'Quechquémitl Ceremonial con Hilos Metálicos',
      descripcion: 'Quechquémitl festivo con brillo metálico para ceremonias especiales',
      precio: 2300,
      stock: 2,
      categoria: 'Quechquémitl',
      tecnica: 'Telar de cintura con brocado metálico',
      origen: 'Cuilapam, Valles Centrales',
      materiales: 'Algodón negro, hilos dorados y plateados',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    },
    {
      id: 5,
      nombre: 'Quechquémitl Tradicional con Grecas Zapotecas',
      descripcion: 'Quechquémitl con simbología ancestral y grecas prehispánicas',
      precio: 2150,
      stock: 3,
      categoria: 'Quechquémitl',
      tecnica: 'Telar de cintura con brocado tradicional',
      origen: 'Lambityeco, Valles Centrales',
      materiales: 'Algodón natural, hilos de colores',
      imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop'
    }
  ];

  const filteredProductos = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 mt-2">
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => navigate('categorias')}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a Categorías
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-800">Quechquémitl</h2>
        <p className="text-gray-600">Prenda tradicional ceremonial con bordado zapoteco. Tejida en telar de cintura con técnicas de brocado ancestral</p>
      </div>

      <div className="flex items-center bg-white border border-blue-200 rounded-2xl px-3 py-2 gap-2 shadow-sm">
        <Search className="text-blue-600" size={20} />
        <input
          type="text"
          placeholder="Buscar en esta categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition">
            <div className="relative h-56 overflow-hidden">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
              <button className="absolute top-3 left-3 bg-white/95 hover:bg-blue-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all group">
                <Heart size={20} className="group-hover:fill-current" />
              </button>
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${producto.stock > 0 ? 'bg-emerald-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'AGOTADO'}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{producto.descripcion}</p>

              <div className="space-y-2 pb-4 border-b border-blue-200">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.origen}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors size={16} className="text-blue-600" />
                  <span className="text-gray-600">{producto.tecnica}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">${producto.precio.toLocaleString('es-MX')}</p>
                </div>
                <button onClick={() => { setProductoSeleccionado(producto); setDetalleModalOpen(true); }} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                  <ShoppingCart size={20} /> Agregar
                </button>