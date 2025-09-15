import './App.css';

function App() {
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
        <h1 className="title">ShopLocal</h1>
        <p className="subtitle">Conecta con el talento artesanal</p>
        <form className="login-form">
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Iniciar sesión</button>
        </form>
        <p className="footer-text">
          ¿No tienes cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </div>
  );
}

export default App;
