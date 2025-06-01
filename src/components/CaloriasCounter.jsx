import "../styles/CaloriasCounter.css";

export default function CaloriasCounter({ total }) {
  return (
    <div className="calorias-counter">
        Has consumido {total} calorías.
    </div>
  );
}
