import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar";
import "./Perfil.css";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
  const usuario_id = usuarioLocal?.usuario_id;

  // 🔹 Cargar datos del usuario al montar el componente
  useEffect(() => {
    const fetchUsuario = async () => {
      if (!usuario_id) return;

      try {
        const res = await fetch(
          "https://it5owt6uxj.execute-api.us-east-2.amazonaws.com/prod/perfil",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario_id }),
          }
        );

        const data = await res.json();

        if (res.ok && data.usuario) {
          setUsuario(data.usuario);
        } else {
          console.error("Error al cargar perfil:", data.error);
        }
      } catch (err) {
        console.error("Error de conexión:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuario();
  }, [usuario_id]);

  // 🔹 Manejo de cambios en inputs
  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // 🔹 Guardar cambios
  const handleSave = async () => {
    try {
      const res = await fetch(
        "https://it5owt6uxj.execute-api.us-east-2.amazonaws.com/prod/perfil/update-perfil",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuario),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("✅ Perfil actualizado correctamente");
        setEditMode(false);
      } else {
        alert("⚠️ Error al actualizar perfil: " + (data.error || "Error desconocido"));
      }
    } catch (err) {
      console.error("Error al actualizar perfil:", err);
      alert("No se pudo conectar con el servidor");
    }
  };

  if (loading) return <p className="loading">Cargando datos...</p>;
  if (!usuario) return <p className="error">No se pudo cargar la información del usuario.</p>;

  return (
    <div>
      <Navbar />
      <div className="perfil-container">
        <h2>Mi Perfil</h2>

        <div className="perfil-info">
          {[
            { key: "nombre", label: "Nombre", editable: false },
            { key: "apellido", label: "Apellido", editable: false },
            { key: "email", label: "Correo electrónico", editable: false },
            { key: "telefono", label: "Teléfono", editable: true },
            { key: "calle", label: "Calle", editable: true },
            { key: "colonia", label: "Colonia", editable: true },
            { key: "ciudad", label: "Ciudad", editable: true },
            { key: "estado", label: "Estado", editable: true },
            { key: "pais", label: "País", editable: true },
          ].map(({ key, label, editable }) => (
            <div key={key} className="perfil-field">
              <label>{label}:</label>
              {editMode && editable ? (
                <input
                  type="text"
                  name={key}
                  value={usuario[key] || ""}
                  onChange={handleChange}
                />
              ) : (
                <p>{usuario[key] || "-"}</p>
              )}
            </div>
          ))}

          <div className="perfil-actions">
            {editMode ? (
              <button className="perfil-btn save" onClick={handleSave}>
                Guardar Cambios
              </button>
            ) : (
              <button className="perfil-btn edit" onClick={() => setEditMode(true)}>
                Editar Perfil
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
