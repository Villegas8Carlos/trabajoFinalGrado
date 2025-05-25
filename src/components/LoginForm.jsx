import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/main");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container">
      <img src="/images/" alt="logo" />
      <h2>¡Bienvenido!</h2>
      <p>Nombre Gimnasio</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre de usuario"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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