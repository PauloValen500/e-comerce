import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    telefono: "",
    fecha_nacimiento: "",
    calle: "",
    num_ext: "",
    num_int: "",
    colonia: "",
    ciudad: "",
    estado: "",
    cp: "",
    pais: ""
  });

  // Actualiza los valores cuando cambian los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Envío del formulario al backend (API Gateway)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://fvkhj4zj23.execute-api.us-east-2.amazonaws.com/prod/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Usuario registrado correctamente");
        // Opcional: limpiar formulario
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          contrasena: "",
          telefono: "",
          fecha_nacimiento: "",
          calle: "",
          num_ext: "",
          num_int: "",
          colonia: "",
          ciudad: "",
          estado: "",
          cp: "",
          pais: ""
        });
      } else {
        alert(`❌ Error: ${data.error || "Ocurrió un error al registrar el usuario"}`);
      }
    } catch (err) {
      alert("⚠️ Error de conexión con el servidor: " + err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Crear Cuenta</h1>
        <p>Únete a Raíz Oaxaca y apoya la cultura artesanal</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Datos personales */}
          <h3 className="section-title">Datos Personales</h3>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            required
            value={formData.apellido}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            required
            value={formData.contrasena}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
            value={formData.telefono}
            onChange={handleChange}
          />
          <input
            type="date"
            name="fecha_nacimiento"
            placeholder="Fecha de nacimiento"
            required
            value={formData.fecha_nacimiento}
            onChange={handleChange}
          />

          {/* Dirección */}
          <h3 className="section-title">Dirección</h3>

          <input
            type="text"
            name="calle"
            placeholder="Calle"
            required
            value={formData.calle}
            onChange={handleChange}
          />
          <div className="row">
            <input
              type="text"
              name="num_ext"
              placeholder="Número exterior"
              required
              value={formData.num_ext}
              onChange={handleChange}
            />
            <input
              type="text"
              name="num_int"
              placeholder="Número interior (opcional)"
              value={formData.num_int}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="colonia"
            placeholder="Colonia"
            required
            value={formData.colonia}
            onChange={handleChange}
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            required
            value={formData.ciudad}
            onChange={handleChange}
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            required
            value={formData.estado}
            onChange={handleChange}
          />
          <div className="row">
            <input
              type="text"
              name="cp"
              placeholder="Código postal"
              required
              value={formData.cp}
              onChange={handleChange}
            />
            <input
              type="text"
              name="pais"
              placeholder="País"
              required
              value={formData.pais}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-signup-form">
            Registrarse
          </button>
        </form>

        <p className="signin-link">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
