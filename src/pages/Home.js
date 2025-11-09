import React from "react";
import "./Home.css";
import { useAuth } from "react-oidc-context";

function Home() {
  const auth = useAuth();

  const handleLogin = () => {
    const redirectUrl = "https://main.d23x4f38qcy3mi.amplifyapp.com/catalogo"; // 👈 igual que en Cognito
    //const redirectUrl = "http://localhost:3000/catalogo"; // 👈 igual que en Cognito
    auth.signinRedirect({ redirect_uri: redirectUrl });
  };


  const handleSignup = () => {
    const redirectUrl = "https://main.d23x4f38qcy3mi.amplifyapp.com"; // 👈 igual que en Cognito
    //const redirectUrl = "http://localhost:3000";
    auth.signinRedirect({ redirect_uri: redirectUrl });
  };


  return (
    <div className="home-container">
      {/* Sección Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Raíz Oaxaca</h1>
          <p>Conectando nuestras raíces con el corazón de Oaxaca</p>
          <div className="hero-buttons">
            <button className="btn-signup" onClick={handleSignup}>
              Crear cuenta
            </button>
            <button className="btn-login" onClick={handleLogin}>
              Iniciar sesión
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/imgs/artesano1.jpg" alt="Raíz Oaxaca" />
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Productos Locales</h3>
          <p>Apoya a los productores oaxaqueños y descubre productos únicos.</p>
        </div>
        <div className="feature-card">
          <h3>Cultura Viva</h3>
          <p>Explora la riqueza cultural y artesanal de Oaxaca.</p>
        </div>
        <div className="feature-card">
          <h3>Calidad</h3>
          <p>Adquiere productos con la mejor calidad del mercado.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        © {new Date().getFullYear()} Raíz Oaxaca — Todos los derechos reservados
      </footer>
    </div>
  );
}

export default Home;
