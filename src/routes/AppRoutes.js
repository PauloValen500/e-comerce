// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "react-oidc-context";

import Home from "../pages/Home";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Catalogo from "../pages/usuario/Catalogo";
import Categoria from "../pages/admin/AdminCategorias";
import Departamento from "../pages/admin/AdminDepartamentos";
import Perfil from "../pages/usuario/Perfil";

export default function AppRoutes() {
  const auth = useAuth();

  // Mientras Cognito verifica el estado de la sesión
  if (auth.isLoading) {
    return (
      <div className="loading-screen">
        <p>Verificando sesión...</p>
      </div>
    );
  }

  // Si ocurre un error con la autenticación
  if (auth.error) {
    return (
      <div className="error-screen">
        <h3>Ocurrió un error</h3>
        <p>{auth.error.message}</p>
      </div>
    );
  }

  // Si el usuario NO está autenticado, muestra un botón de login
  if (!auth.isAuthenticated) {
    return (
      <div className="login-container" style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2>Bienvenido a Raíz Oaxaca</h2>
        <p>Por favor, inicia sesión para continuar</p>
        <button
          onClick={() => auth.signinRedirect()}
          style={{
            background: "#3B82F6",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Iniciar sesión
        </button>
      </div>
    );
  }

  // Si el usuario ya está autenticado, muestra las rutas de la aplicación
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/departamento" element={<Departamento />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      {/* Botón de logout visible en toda la app */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          onClick={() => auth.signoutRedirect()}
          style={{
            background: "#DC2626",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1.25rem",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </Router>
  );
}
