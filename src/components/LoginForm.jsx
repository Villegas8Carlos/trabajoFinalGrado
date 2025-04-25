import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [nickname, setNickname] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [message, setMessage] = useState(""); // Para manejar el mensaje de éxito o error
const navigate = useNavigate();
const handleLogin = async (e) => {
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
      const text = await response.text();
      throw new Error(text);
    }

    const text = await response.text();
    console.log(text);
    setMessage("Login exitoso!");
    navigate("/");
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
    <form onSubmit={handleLogin}>
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
      <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "10px" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            flex: 1,
          }}
        >
          INICIAR SESIÓN
        </button>
        <button
          type="button"
          onClick={() => navigate("/register")}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            flex: 1,
          }}
        >
          REGISTRAR
        </button>
      </div>
    </form>
    {error && <p className="error">{error}</p>}
  </div>
);
};

export default LoginForm;