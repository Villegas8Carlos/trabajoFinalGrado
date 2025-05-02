import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import CuestionarioPage from "./pages/CuestionarioPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cuestionario" element={<CuestionarioPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
