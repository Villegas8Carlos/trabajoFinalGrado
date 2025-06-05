import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Cuestionario from "./pages/CuestionarioPage";
import MainPage from "./pages/MainPage";
import DatosPersonales from "./pages/DatosPersonales";
import Foro from "./pages/ForoPage"
import Alimentacion from "./pages/AlimentacionPage"
import Calendario from "./pages/CalendarioPage"

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cuestionario" element={<Cuestionario />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/datos-personales" element={<DatosPersonales />} />
          <Route path="/foro" element={<Foro />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/alimentacion" element={<Alimentacion />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
