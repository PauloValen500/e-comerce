import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Crear Cuenta</h1>
        <p>Únete a Raíz Oaxaca y apoya la cultura artesanal</p>

        <form className="signup-form">
          {/* Datos personales */}
          <h3 className="section-title">Datos Personales</h3>
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <input type="tel" placeholder="Teléfono" required />
          <input type="date" placeholder="Fecha de nacimiento" required />

          {/* Dirección */}
          <h3 className="section-title">Dirección</h3>
          <input type="text" placeholder="Calle" required />
          <div className="row">
            <input type="text" placeholder="Número exterior" required />
            <input type="text" placeholder="Número interior (opcional)" />
          </div>
          <input type="text" placeholder="Colonia" required />
          <input type="text" placeholder="Ciudad" required />
          <input type="text" placeholder="Estado" required />
          <div className="row">
            <input type="text" placeholder="Código postal" required />
            <input type="text" placeholder="País" required />
          </div>

          <button type="submit" className="btn-signup-form">Registrarse</button>
        </form>

        <p className="signin-link">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
