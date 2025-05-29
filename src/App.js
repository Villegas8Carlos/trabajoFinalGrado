import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import DatosPersonales from "./pages/DatosPersonales";
import Calendario from "./pages/CalendarioPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/datos-personales" element={<DatosPersonales />} />
          <Route path="/calendario" element={<Calendario />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
