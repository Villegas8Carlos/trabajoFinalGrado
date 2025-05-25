import React from "react";
import "../styles/CalendarioPage.css";

const meses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const diasSemana = ["L", "M", "X", "J", "V", "S", "D"];

const Calendario = ({ year }) => {
  const generarDias = (mesIndex) => {
    const dias = [];
    const primerDia = new Date(year, mesIndex, 1).getDay();
    const totalDias = new Date(year, mesIndex + 1, 0).getDate();

    // Ajustar el índice del primer día (0=Domingo → queremos 0=Lunes)
    const offset = primerDia === 0 ? 6 : primerDia - 1;

    for (let i = 0; i < offset; i++) {
      dias.push(""); // Espacios vacíos para alinear el primer día
    }

    for (let d = 1; d <= totalDias; d++) {
      dias.push(d);
    }

    return dias;
  };

  return (
    <>
      {meses.map((mes, index) => (
        <div key={mes} className="mes">
          <h3>{mes} {year}</h3>
          <div className="dias semana">
            {diasSemana.map((dia) => (
              <div key={dia} className="dia nombre-dia">
                {dia}
              </div>
            ))}
          </div>
          <div className="dias">
            {generarDias(index).map((dia, i) => (
              <div key={i} className="dia">
                {dia}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Calendario;
