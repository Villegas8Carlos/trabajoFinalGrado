import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MainLayout.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <ul className="nav-options">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/datos-personales">Mis Datos</Link></li> {/* Enlace agregado */}
      <li><Link to="/form">Formulario</Link></li>
      </ul>
      <div className="auth-status">
        {user ? (
          <>
            <span>Hola, {user.username}</span>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <span>No estás logueado</span>
        )}
      </div>
    </nav>
  );
};

const Carousel = () => {
  const images = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg",
    "/images/foto5.jpg",
  ];
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="carousel">
      <button onClick={prev} aria-label="Anterior">‹</button>
      <img src={images[index]} alt={`Foto ${index + 1}`} />
      <button onClick={next} aria-label="Siguiente">›</button>
    </div>
  );
};

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Carousel />
      <section className="content">
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
