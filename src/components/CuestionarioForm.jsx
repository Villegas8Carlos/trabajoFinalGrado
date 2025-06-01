import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/CuestionarioForm.css";

const CuestionarioForm = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nickname = location.state?.nickname || "Invitado";

  const questions = [
    {
      id: "pregunta1",
      text: "¿Con qué frecuencia haces ejercicio?",
      options: ["Nunca", "1-2 veces por semana", "3-5 veces por semana", "Diario"],
    },
    {
      id: "pregunta2",
      text: "¿Cuál es tu objetivo principal?",
      options: ["Volumen", "Definicion"],
    },
    {
      id: "pregunta3",
      text: "¿Sigues alguna dieta específica?",
      options: ["Sí", "No", "A veces"],
    },
    {
      id: "pregunta4",
      text: "¿Cuántas horas duermes en promedio?",
      options: ["Menos de 5", "5-7", "7-9", "Más de 9"],
    },
    {
      id: "pregunta5",
      text: "¿Tienes alguna lesión o condición médica relevante?",
      options: ["Sí", "No"],
    },
    {
      id: "pregunta6",
      text: "¿Cuál es tu nivel actual de actividad física?",
      options: ["Sedentario", "Moderado", "Activo", "Muy activo"],
    },
  ];

  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el payload que se enviará al backend
    const payload = {
      id: nickname,  // Usamos el nickname como id único o identificador
      pregunta1: answers.pregunta1,
      pregunta2: answers.pregunta2,
      pregunta3: answers.pregunta3,
      pregunta4: answers.pregunta4,
      pregunta5: answers.pregunta5,
      pregunta6: answers.pregunta6,
    };

    try {
      const response = await fetch("http://localhost:8080/api/cuestionario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar el cuestionario");
      }

      setSubmitted(true);
      Swal.fire({
        icon: "success",
        title: "Cuestionario enviado",
        text: "Gracias por tus respuestas",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/"), 2000);

    } catch (error) {
      console.error("Error al enviar cuestionario:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "No se pudo enviar el cuestionario",
      });
    }
  };

  return (
    <div className="container">
      <h2>Cuestionario de salud para {nickname}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="column">
            {questions.slice(0, 3).map((q) => (
              <div key={q.id}>
                <label>{q.text}</label>
                <select
                  value={answers[q.id] || ""}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  required
                >
                  <option value="" disabled>Selecciona una opción</option>
                  {q.options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="column">
            {questions.slice(3).map((q) => (
              <div key={q.id}>
                <label>{q.text}</label>
                <select
                  value={answers[q.id] || ""}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  required
                >
                  <option value="" disabled>Selecciona una opción</option>
                  {q.options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">ENVIAR</button>
      </form>
      {submitted && <p>¡Gracias por completar el cuestionario!</p>}
    </div>
  );
};

export default CuestionarioForm;
