import AlimentacionCard from "../components/AlimentacionCard";
import CaloriasCounter from "../components/CaloriasCounter";

const alimentos = [
  // Puedes personalizar estos datos
  { imagen: "/img/1.jpg", descripcion: "Manzana", aficiones: ["Fruta"], calorias: 95 },
  { imagen: "/img/2.jpg", descripcion: "Plátano", aficiones: ["Energía"], calorias: 105 },
  { imagen: "/img/3.jpg", descripcion: "Pan", aficiones: ["Cereales"], calorias: 150 },
  // ... hasta 18
];

export default function Alimentacion() {
  const totalCalorias = alimentos.reduce((acc, a) => acc + a.calorias, 0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Alimentación</h1>
        <div className="grid-container">
        {alimentos.map((a, index) => (
            <AlimentacionCard key={index} {...a} />
        ))}
        </div>
        <div className="calorias-total">
            <CaloriasCounter total={totalCalorias} />
        </div>
    </div>
  );
}
