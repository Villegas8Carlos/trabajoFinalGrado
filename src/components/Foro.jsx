import { useEffect, useState } from "react";
import ForoAccordion from "./ForoAccordion";
import CardWithModal from "./CardWithModal";
import "../styles/Foro.css";

export default function Foro() {
  const [acordeones, setAcordeones] = useState([]);
  const [preguntasExistentes, setPreguntasExistentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); // 👈 Nuevo estado

  const cargarPreguntas = () => {
    fetch("http://localhost:8080/api/foro")
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener los temas");
        return response.json();
      })
      .then((data) => {
        setPreguntasExistentes(data);
        const filtrados = data.filter(item => item.respuesta && item.respuesta.trim() !== "");
        setAcordeones(filtrados);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    cargarPreguntas();
  }, []);

  return (
    <div className="foro-container">
      <h1 className="foro-titulo">Foro de discusión</h1>

      <div className="foro-layout">
        <div className="foro-card-box">
          <CardWithModal
            title="Información"
            description="En esta página puedes consultar dudas o preguntas frecuentes de todos los usuarios sobre la aplicación..."
            image="/images/foro.jpg"
            preguntasExistentes={preguntasExistentes}
            onPreguntaEnviada={cargarPreguntas}
          />
        </div>

        <div className="foro-acordeones">
          {loading && <p>Cargando temas...</p>}
          {error && <p>Error: {error}</p>}
          {acordeones.map((item, i) => (
            <ForoAccordion
              key={i}
              titulo={item.pregunta}
              contenido={item.respuesta}
              isOpen={activeIndex === i} // 👈 Abierto solo si es el activo
              onToggle={() =>
                setActiveIndex(activeIndex === i ? null : i)
              } // 👈 Cambia el activo
            />
          ))}
        </div>

        <div className="foro-card-box">
          <CardWithModal
            title="Información"
            description="En esta página puedes consultar dudas o preguntas frecuentes de todos los usuarios sobre la aplicación..."
            image="/images/foro.jpg"
            preguntasExistentes={preguntasExistentes}
            onPreguntaEnviada={cargarPreguntas}
          />
        </div>
      </div>
    </div>
  );
}
