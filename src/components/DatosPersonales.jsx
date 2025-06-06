import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar"; // Ajusta la ruta según dónde tengas Navbar
import "../styles/DatosPersonales.css";

const DatosPersonales = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="datos-personales-container">
          <h2>Mis Datos Personales</h2>
          <p>No has iniciado sesión. Por favor, <Link to="/login">inicia sesión</Link> para ver tus datos personales completos.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="datos-personales-container">
        <h2>Mis Datos Personales</h2>
        <ul>
          <li><strong>Nombre:</strong> {user.nombre}</li>
          <li><strong>Apellidos:</strong> {user.apellidos}</li>
          <li><strong>Nickname:</strong> {user.nickname}</li>
          <li><strong>Email:</strong> {user.email || "No disponible"}</li>
          <li><strong>DNI:</strong> {user.dni || "No disponible"}</li>
          <li><strong>Fecha de nacimiento:</strong> {user.fecha_nacimiento || "No disponible"}</li>
          <li><strong>Teléfono:</strong> {user.tlf || "No disponible"}</li>
          <li><strong>Peso (kg):</strong> {user.peso || "No disponible"}</li>
          <li><strong>Altura (cm):</strong> {user.altura || "No disponible"}</li>
          <li><strong>Dirección:</strong> {user.direccion || "No disponible"}</li>
          <li><strong>Premium:</strong> {"Premium de nivel "+user.premium}</li>
        </ul>
      </div>
    </>
  );
};

export default DatosPersonales;