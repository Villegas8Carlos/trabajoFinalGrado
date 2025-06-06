import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CuestionarioPage from "./pages/CuestionarioPage";
import MainPage from "./pages/MainPage";
import DatosPersonalesPage from "./pages/DatosPersonalesPage";
import ForoPage from "./pages/ForoPage"
import AlimentacionPage from "./pages/AlimentacionPage"
import CalendarioPage from "./pages/CalendarioPage"
import RutinasPage from "./pages/RutinasPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cuestionario" element={<CuestionarioPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/datos-personales" element={<DatosPersonalesPage />} />
          <Route path="/rutinas" element={<RutinasPage />} />
          <Route path="/foro" element={<ForoPage />} />
          <Route path="/calendario" element={<CalendarioPage />} />
          <Route path="/alimentacion" element={<AlimentacionPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
