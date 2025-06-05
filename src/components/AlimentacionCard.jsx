import "../styles/AlimentacionCard.css";

export default function AlimentacionCard({ imagen, nombre, calorias, onSumar }) {
  return (
    <div className="cardAlimentacion">
      <img src={imagen} alt={nombre} />
      <p className="descripcion">{nombre}</p>
      <p className="calorias">{calorias} kcal</p>
      <button onClick={() => onSumar(calorias)}>+ Añadir calorías</button>
    </div>
  );
}
