import "../styles/AlimentacionCard.css";

export default function AlimentacionCard({ imagen, descripcion, aficiones, calorias }) {
  return (
    <div className="card">
      <img src={imagen} alt={descripcion} />
      <p className="descripcion">{descripcion}</p>
      <p className="aficiones">{aficiones.join(", ")}</p>
      <p className="calorias">{calorias} kcal</p>
    </div>
  );
}
