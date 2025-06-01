import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <img src="/images/logo-footer.png" alt="Logo" />
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