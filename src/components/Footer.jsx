import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const irAMain = () => {
    navigate("/");
  };

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/x.png" alt="Twitter" />
        </a>
          <img
            src="/images/eatfit.jpg"
            alt="Logo"
            style={{ cursor: "pointer" }}  // para que se vea clickeable
            onClick={irAMain}
          />
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <p>Iniciativa de EatFit</p>
      <p>© Copyright 2025 Empresa</p>
    </footer>
  );
};

export default Footer;