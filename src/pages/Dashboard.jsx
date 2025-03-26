import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Bienvenido, {user?.username}</h2>
      {user?.isAdmin && <p>Eres administrador.</p>}
      <button onClick={() => { logout(); navigate("/"); }}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
