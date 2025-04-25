import FormularioUsuario from "../components/RegisterForm";

const FormPage = () => {
  return (
    <div>
      <header className="menu">
        <nav>
          <ul>
            <img src="/images/" alt="logoNombre" />
          </ul>
        </nav>
      </header>
      <FormularioUsuario />
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

export default FormPage;