<<<<<<< HEAD
=======
import { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const productosMock = [
  { id: 1, nombre: "Huipil Oaxaca", descripcion: "Hecho a mano, algodón, bordado tradicional", precio: 1200, imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Oaxacan_huipil.jpg" },
  { id: 2, nombre: "Rebozo Mexicano", descripcion: "Tejido artesanal, diseño colorido", precio: 950, imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rebozo_mexicano.jpg" },
  { id: 3, nombre: "Sombrero de Palma", descripcion: "Hecho a mano, resistente al sol", precio: 600, imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sombrero_de_palma.jpg" },
];

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const productosFiltrados = productosMock.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="space-y-6 mt-2">
      {/* Header del catálogo */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold text-dark">Catálogo de Productos</h2>
        <div className="flex items-center bg-white border border-accentLight rounded-2xl px-3 py-2 gap-2 shadow-sm w-full md:w-96">
          <FaSearch className="text-accent" />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="flex-1 outline-none bg-transparent text-dark placeholder:text-text/60"
          />
        </div>
      </div>

      {/* Grid limitado por contenedor (se ve igual en grandes) */}
      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {productosFiltrados.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition">
            <img src={p.imagen} alt={p.nombre} className="w-full h-56 object-cover" />
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-dark">{p.nombre}</h3>
              <p className="text-sm text-text">{p.descripcion}</p>
              <div className="flex items-center justify-between">
                <span className="text-accent font-bold text-lg">${p.precio}</span>
                <button className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-xl hover:bg-accentLight transition">
                  <FaShoppingCart /> Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
>>>>>>> 2d6e2dca2f9c4b6ad5202b759db8491220424082
