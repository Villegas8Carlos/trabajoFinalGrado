// src/pages/MainPage.jsx
import MainLayout from "../components/MainLayout";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Bienvenido, {user?.username}</h2>
      {user?.isAdmin && <p>Eres administrador.</p>}
      <button onClick={() => { logout(); navigate("/login"); }}>Cerrar sesión</button>
    </div>
  );
}

export default MainPage;
