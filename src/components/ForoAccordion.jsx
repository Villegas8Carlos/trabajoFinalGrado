import { useState } from "react";
import "../styles/ForoAccordion.css";

export default function ForoAccordion({ titulo, contenido }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setAbierto(!abierto)} className="accordion-button">
        {titulo}
      </button>
      {abierto && <div className="accordion-content">{contenido}</div>}
    </div>
  );
}
