import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const DatosPersonales = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="datos-personales">
        <h2>Mis Datos Personales</h2>
        <p>No has iniciado sesión. Por favor, <Link to="/">inicia sesión</Link> para ver tus datos personales completos.</p>
      </div>
    );
  }

  return (
    <div className="datos-personales">
      <h2>Mis Datos Personales</h2>
      <ul>
        <li><strong>Nombre:</strong> {user.username}</li>
        <li><strong>Email:</strong> {user.email || "No disponible"}</li>
        <li><strong>DNI:</strong> {user.dni || "No disponible"}</li>
        <li><strong>Fecha de nacimiento:</strong> {user.fechaNacimiento || "No disponible"}</li>
        <li><strong>Teléfono:</strong> {user.telefono || "No disponible"}</li>
        <li><strong>Peso (kg):</strong> {user.peso || "No disponible"}</li>
        <li><strong>Altura (cm):</strong> {user.altura || "No disponible"}</li>
      </ul>
    </div>
  );
};

export default DatosPersonales;
