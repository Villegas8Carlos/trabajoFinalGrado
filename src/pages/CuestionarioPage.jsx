import CuestionarioForm from "../components/CuestionarioForm";

const CuestionarioPage = () => {
  return (
    <div>
      <header className="menu">
        <nav>
          <ul>
            <img src="/images/" alt="logoNombre" />
          </ul>
        </nav>
      </header>
      <CuestionarioForm />
      <footer>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/images/" alt="twitter" />
        </a>
        <img src="/images/" alt="Logo" />
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/images/" alt="linkedin" />
        </a>
        <p>Iniciativa de </p>
        <p>© Copyright 2025 Empresa</p>
      </footer>
    </div>
  );
};

export default CuestionarioPage;
