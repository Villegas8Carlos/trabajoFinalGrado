// ForoAccordion.jsx
import "../styles/ForoAccordion.css";

export default function ForoAccordion({ titulo, contenido, isOpen, onToggle }) {
  return (
    <div className="accordion">
      <button className="accordion-button" onClick={onToggle}>
        {titulo}
      </button>
      {isOpen && <div className="accordion-content">{contenido}</div>}
    </div>
  );
}
