import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LoginForm = () => {
  const [nickname, setNickname] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [message, setMessage] = useState(""); // Para manejar el mensaje de éxito o error
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8080/api/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message); // Usamos el mensaje JSON en caso de error
    }

    const data = await response.json();
    console.log(data.message); // Ejemplo: 'Usuario logueado'
    setMessage("Login exitoso!"); // Establecemos el mensaje de éxito
    navigate("/dashboard"); // Redirige al dashboard
  } catch (error) {
    console.error("Error en la solicitud:", error);
    setError(error.message);
  }
};
  

  return (
    <div className="container">
      <img src="/images/" alt="logo" />
      <h2>¡Bienvenido!</h2>
      <p>HPE CDS Tech Challenge</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">INICIAR SESIÓN</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginForm;