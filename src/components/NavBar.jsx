import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import perfil from "../assets/perfil.jpg";
import eatfit from "../assets/eatfit.jpg";
import Swal from "sweetalert2";
import "../styles/NavBar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    Swal.fire({
      icon: "success",
      title: "Cierre de sesión completado",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/main");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cierra el menú si haces click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".dropdown-menu");
      const profileImg = document.querySelector(".not-logged-img");
      if (menuOpen && menu && !menu.contains(event.target) && !profileImg.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <ul className="nav-options">
        <li>
          <Link to="/main">
            <img src={eatfit} alt="Inicio" className="navbar-logo" />
          </Link>
        </li>
        <li>
          <Link to="/datos-personales">Rutinas</Link>
        </li>
      </ul>

      <div className="auth-status">
        <img
          src={perfil}
          alt="Usuario"
          className="not-logged-img"
          onClick={toggleMenu}
          title="Perfil"
        />
        <div className="nickname-display">
          {user ? user.nickname || user.nombre : "Invitado"}
        </div>

        {menuOpen && (
          <div className="dropdown-menu">
            {user ? (
              <>
                <div onClick={() => { navigate("/datos-personales"); setMenuOpen(false); }}>Mis Datos</div>
                <div onClick={handleLogout}>Cerrar sesión</div>
              </>
            ) : (
              <div
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
              >
                Iniciar sesión
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;