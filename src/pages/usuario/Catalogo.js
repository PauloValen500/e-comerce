import React, { useState } from "react";
import "./Catalogo.css";

const productosMock = [
  {
    id: 1,
    nombre: "Huipil Oaxaca",
    descripcion: "Hecho a mano, algodón, bordado tradicional",
    precio: 1200,
    imagen: "https://via.placeholder.com/300x250",
    talla: ["S","M","L"],
    color: ["Rojo","Blanco"]
  },
  {
    id: 2,
    nombre: "Rebozo de Telar",
    descripcion: "Tejido tradicional, colores vivos",
    precio: 950,
    imagen: "https://via.placeholder.com/300x250",
    talla: ["Única"],
    color: ["Azul","Verde"]
  },
  {
    id: 3,
    nombre: "Guayabera de Lino",
    descripcion: "Lino fresco, ideal para clima cálido",
    precio: 1500,
    imagen: "https://via.placeholder.com/300x250",
    talla: ["M","L"],
    color: ["Blanco","Beige"]
  }
];

const Catalogo = () => {
  const [filtroColor, setFiltroColor] = useState("");
  const [filtroTalla, setFiltroTalla] = useState("");

  const filtrarProductos = (producto) => {
    return (
      (filtroColor === "" || producto.color.includes(filtroColor)) &&
      (filtroTalla === "" || producto.talla.includes(filtroTalla))
    );
  };

  return (
    <div className="catalogo-container">
      <h1 className="catalogo-titulo">Catálogo Raíz Oaxaca</h1>

      <div className="filtros">
        <select value={filtroColor} onChange={(e) => setFiltroColor(e.target.value)}>
          <option value="">Todos los colores</option>
          <option value="Rojo">Rojo</option>
          <option value="Blanco">Blanco</option>
          <option value="Azul">Azul</option>
          <option value="Verde">Verde</option>
          <option value="Beige">Beige</option>
        </select>

        <select value={filtroTalla} onChange={(e) => setFiltroTalla(e.target.value)}>
          <option value="">Todas las tallas</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="Única">Única</option>
        </select>
      </div>

      <div className="productos-grid">
        {productosMock.filter(filtrarProductos).map(producto => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen"/>
            <div className="producto-info">
              <h2 className="producto-nombre">{producto.nombre}</h2>
              <p className="producto-descripcion">{producto.descripcion}</p>
              <p className="producto-precio">${producto.precio}</p>
              <button className="producto-boton">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
