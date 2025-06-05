import { useState } from "react";
import Swal from "sweetalert2";
import "../styles/CardWithModal.css";

export default function CardWithModal({ title, description, image, preguntasExistentes = [], onPreguntaEnviada }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const openModal = () => {
    setInputValue("");
    setError(null);
    setSuccessMsg(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) {
      setError("Por favor ingrese su pregunta y la responderá el personal de la aplicación.");
      return;
    }

    // Validar si ya existe la pregunta
    const preguntaNormalizada = inputValue.trim().toLowerCase();
    const yaExiste = preguntasExistentes.some(
      item => item.pregunta.trim().toLowerCase() === preguntaNormalizada
    );

    if (yaExiste) {
      Swal.fire({
        icon: "warning",
        title: "Pregunta repetida",
        text: "Esta pregunta ya ha sido realizada anteriormente. Por favor revisa el foro antes de preguntar.",
      });
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const response = await fetch("http://localhost:8080/api/foro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pregunta: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el texto");
      }

      Swal.fire({
        icon: "success",
        title: "Pregunta Enviada",
        showConfirmButton: false,
        timer: 2000,
      });

      setInputValue("");
      closeModal();

      // Actualizar preguntas desde el padre (Foro.jsx)
      if (typeof onPreguntaEnviada === "function") {
        onPreguntaEnviada();
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="card-with-modal">
        {image && <img src={image} alt={title} className="card-image" />}
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={openModal} className="card-button">
          Enviar pregunta
        </button>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Haga la pregunta y la responderá el personal, si vemos que la pregunta está ya hecha, se eliminará la suya.</h2>
            <textarea
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              rows={4}
              placeholder="Escribe aquí..."
            />
            {error && <p className="error-msg">{error}</p>}
            {successMsg && <p className="success-msg">{successMsg}</p>}
            <button onClick={handleSend} disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
            <button onClick={closeModal} className="btn-close">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
