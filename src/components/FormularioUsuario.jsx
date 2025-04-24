import "./FormularioUsuario.css";

const FormularioUsuario = () => {
  return (
    <div className="form">
      <form>
        <div className="contenedor">
          <div className="columna izquierda">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />
          </div>

          <div className="columna centro">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="dni">DNI:</label>
            <input type="text" id="dni" name="dni" required />

            <label htmlFor="fecha">Fecha de nacimiento:</label>
            <input type="date" id="fecha" name="fecha" required />

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required />
          </div>

          <div className="columna derecha">
            <label htmlFor="peso">Peso (kg):</label>
            <input type="number" id="peso" name="peso" step="0.1" required />

            <label htmlFor="altura">Altura (cm):</label>
            <input type="number" id="altura" name="altura" required />
          </div>
        </div>

        <div className="button">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioUsuario;
