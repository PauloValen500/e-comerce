import React, { useState } from "react";
import "./Catalogo.css";
import Navbar from "../../Components/navbar";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const productosMock = [
  {
    id: 1,
    nombre: "Huipil Oaxaca",
    descripcion: "Hecho a mano, algodón, bordado tradicional",
    precio: 1200,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Oaxacan_huipil.jpg",
  },
  {
    id: 2,
    nombre: "Rebozo Mexicano",
    descripcion: "Tejido artesanal, diseño colorido",
    precio: 950,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rebozo_mexicano.jpg",
  },
  {
    id: 3,
    nombre: "Sombrero de Palma",
    descripcion: "Hecho a mano, resistente al sol",
    precio: 600,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sombrero_de_palma.jpg",
  },
];

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productosMock.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="catalogo-container">
      <Navbar />

      <div className="catalogo-header">
        <h1>Catálogo de Productos</h1>
        <div className="catalogo-busqueda">
          <FaSearch className="icono-buscar" />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <div className="catalogo-grid">
        {productosFiltrados.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-imagen"
            />
            <div className="producto-info">
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <div className="producto-footer">
                <span className="producto-precio">${producto.precio}</span>
                <button className="btn-comprar">
                  <FaShoppingCart className="icono-carrito" /> Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
