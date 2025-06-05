import Foro from "./Foro";
import { useAuth } from '../context/AuthContext';
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';


const ForoPage = () => {
    const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
        <Navbar />
        <Foro />
        <Footer />
    </div>
  );
}

export default ForoPage;
