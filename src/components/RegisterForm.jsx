import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    nickname: "",
    fecha_nacimiento: "",
    altura: "",
    apellidos: "",
    password: "",
    tlf: "",
    direccion: "",
    email: "",
    dni: "",
    peso: "",
    premium: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
      
        if (errorData && typeof errorData === "object") {
          const errorListHtml = Object.entries(errorData)
            .map(([field, message]) => `<li>${message}</li>`)
            .join("");
      
          Swal.fire({
            icon: "warning",
            title: "Errores de validación",
            html: `<ul style="text-align: left;">${errorListHtml}</ul>`,
          });
        } else {
          throw new Error("Error desconocido al registrar.");
        }
      
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Usuario registrado correctamente",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
      
    } catch (error) {
      console.error("Error en el registro:", error);
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: "El nickname ya existe, prueba con otro.",
      });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="contenedor">
          <div className="columna izquierda">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required onChange={handleChange} />

            <label htmlFor="nickname">Nickname:</label>
            <input type="text" id="nickname" name="nickname" required onChange={handleChange} />

            <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required onChange={handleChange} />

            <label htmlFor="altura">Altura (cm):</label>
            <input type="number" id="altura" name="altura" required onChange={handleChange} />
          </div>

          <div className="columna centro">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" required onChange={handleChange} />

            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required onChange={handleChange} />

            <label htmlFor="tlf">Teléfono:</label>
            <input type="tel" id="tlf" name="tlf" required onChange={handleChange} />

            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" required onChange={handleChange} />
          </div>

          <div className="columna derecha">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />

            <label htmlFor="dni">DNI:</label>
            <input type="text" id="dni" name="dni" required onChange={handleChange} />

            <label htmlFor="peso">Peso (kg):</label>
            <input type="number" id="peso" name="peso" step="0.1" required onChange={handleChange} />

            <button type="submit" className="button button-register">
              REGISTRAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
