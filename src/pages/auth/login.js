import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔹 Endpoint de tu API Gateway (Lambda de login)
      const response = await fetch("https://eip44jckpd.execute-api.us-east-2.amazonaws.com/prod/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, contrasena: password }),
      });

      const data = await response.json();
      console.log("🔍 Respuesta del servidor:", data); // 👀 Para depuración

      if (response.ok && data.usuario) {
        const usuario = {
          usuario_id: data.usuario.usuario_id,
          nombre: data.usuario.nombre,
          apellido: data.usuario.apellido,
          email: data.usuario.email,
          tipo_usuario: data.usuario.tipo_usuario,
        };

        // 🔹 Guardar datos del usuario en localStorage
        localStorage.setItem("usuario", JSON.stringify(usuario));

        // 🔹 Redirigir según tipo de usuario
        if (usuario.tipo_usuario === "admin") {
          navigate("/admin");
        } else {
          navigate("/catalogo");
        }
      } else {
        setError("Correo o contraseña incorrectos.");
      }
    } catch (err) {
      console.error("❌ Error de conexión:", err);
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="main-container">
      <div className="background-slideshow">
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
        <div className="slide slide4"></div>
        <div className="slide slide5"></div>
      </div>

      <div className="login-box">
        <h1 className="title">Raíz Oaxaca</h1>
        <p className="subtitle">Conecta con el talento artesanal</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Iniciar sesión</button>

          {error && <p className="error-message">{error}</p>}
        </form>

        <p className="footer-text">
          ¿No tienes cuenta? <a href="/signup">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
