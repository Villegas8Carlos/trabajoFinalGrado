import ForoAccordion from "../components/ForoAccordion";
import "../styles/Foro.css";

const acordeones = [
  { titulo: "Tema 1", contenido: "Contenido del tema 1" },
  { titulo: "Tema 2", contenido: "Contenido del tema 2" },
  { titulo: "Tema 3", contenido: "Contenido del tema 3" },
];

export default function Foro() {
  return (
    <div className="foro-container">
        <h1 className="foro-titulo">Foro de discusión</h1>
        {acordeones.map((acordeon, i) => (
        <ForoAccordion key={i} {...acordeon} />
    ))}
    </div>
  );
}
