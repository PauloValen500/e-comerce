import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Sección Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Raíz Oaxaca</h1>
          <p>Conectando nuestras raíces con el corazón de Oaxaca</p>
          <div className="hero-buttons">
            <button className="btn-signup" onClick={() => window.location.href="/signup"}>
              Crear cuenta
            </button>
            <button className="btn-login" onClick={() => window.location.href="/login"}>
              Iniciar sesión
            </button>
          </div>
        </div>
        <div className="hero-image">
          {<img src="/imgs/artesano1.jpg" alt="Raíz Oaxaca"/>}
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
