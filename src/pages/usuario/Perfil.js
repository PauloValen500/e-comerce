// src/views/Perfil.js
import React, { useEffect, useState } from "react";
import { useUsuario } from "../../hooks/useUsuario";
import {obtenerPerfilCliente} from "../../services/apiCliente";
import "./Perfil.css";

export default function Perfil() {
  const usuario = useUsuario();
  const [perfil, setPerfil] = useState(null);
  const [editando, setEditando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // 🔍 Verifica el token
    if (!usuario?.tokens?.access_token) {
      console.warn("⚠️ Usuario no autenticado o sin token válido");
      return;
    }

    console.log("🔑 TOKEN:", usuario.tokens.access_token);

    obtenerPerfilCliente(usuario.tokens.access_token)
      .then((data) => {
        console.log("✅ Perfil cargado:", data);
        setPerfil(data);
      })
      .catch((err) => {
        console.error("❌ Error al cargar perfil:", err);
        setError("No se pudo obtener la información del perfil.");
      });
  }, [usuario]);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };


  // 🔄 Estados de carga o error
  if (!usuario) return <p>Inicia sesión para ver tu perfil.</p>;
  if (error) return <p className="error">{error}</p>;
  if (!perfil) return <p>Cargando perfil...</p>;

  return (
    <div className="perfil-container">
      <h2>Mi Perfil</h2>

      {mensaje && <div className="mensaje éxito">{mensaje}</div>}
      {error && <div className="mensaje error">{error}</div>}

      <div className="perfil-form">
        {[
          { label: "Nombre", name: "nombre" },
          { label: "Apellido", name: "apellido" },
          { label: "Teléfono", name: "telefono" },
          { label: "Ciudad", name: "ciudad" },
          { label: "Estado", name: "estado" },
          { label: "País", name: "pais" },
          { label: "Fecha de nacimiento", name: "fecha_nacimiento", type: "date" },
        ].map((campo) => (
          <label key={campo.name}>
            {campo.label}:
            <input
              type={campo.type || "text"}
              name={campo.name}
              value={perfil[campo.name] || ""}
              onChange={handleChange}
              disabled={!editando}
            />
          </label>
        ))}
      </div>

      <div className="perfil-buttons">
        {!editando ? (
          <button className="btn-editar" onClick={() => setEditando(true)}>
            Editar
          </button>
        ) : (
          <>
            <button className="btn-guardar" onClick={""}>
              Guardar
            </button>
            <button className="btn-cancelar" onClick={() => setEditando(false)}>
              Cancelar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
