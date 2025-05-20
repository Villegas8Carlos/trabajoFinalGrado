import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import FormPage from "./pages/FormPage";
import MainPage from "./pages/MainPage";
import DatosPersonales from "./pages/DatosPersonales";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/datos-personales" element={<DatosPersonales />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
