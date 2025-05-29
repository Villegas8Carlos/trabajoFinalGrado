import React, { useEffect, useState } from "react";
import "../styles/CalendarioPage.css";

const meses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const diasSemana = ["L", "M", "X", "J", "V", "S", "D"];

const Calendario = ({ year }) => {
  const [fechasMarcadas, setFechasMarcadas] = useState(new Set());

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      const id = user.nickname;

      fetch(`http://localhost:8080/api/calendario/${id}`)
        .then(res => res.json())
        .then(data => {
          // data es un array de objetos Calendario { id, fechas: [..] }
          // Queremos extraer todos los strings de fechas en un solo set para lookup rápido

          const todasFechas = new Set();

          data.forEach(calendario => {
            if (Array.isArray(calendario.fechas)) {
              calendario.fechas.forEach(fecha => {
                todasFechas.add(fecha);
              });
            }
          });

          setFechasMarcadas(todasFechas);
        })
        .catch(err => console.error("Error al cargar fechas:", err));
    }
  }, []);

  const generarDias = (mesIndex) => {
    const dias = [];
    const primerDia = new Date(year, mesIndex, 1).getDay();
    const totalDias = new Date(year, mesIndex + 1, 0).getDate();
    const offset = primerDia === 0 ? 6 : primerDia - 1;

    for (let i = 0; i < offset; i++) {
      dias.push(null);
    }

    for (let d = 1; d <= totalDias; d++) {
      dias.push(d);
    }

    return dias;
  };

  return (
    <>
      {meses.map((mes, mesIndex) => (
        <div key={mes} className="mes">
          <h3>{mes} {year}</h3>
          <div className="dias semana">
            {diasSemana.map((dia) => (
              <div key={dia} className="dia nombre-dia">{dia}</div>
            ))}
          </div>
          <div className="dias">
            {generarDias(mesIndex).map((dia, i) => {
              if (dia === null) return <div key={i} className="dia"></div>;

              const fecha = `${year}-${String(mesIndex + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
              const marcado = fechasMarcadas.has(fecha);

              return (
                <div
                  key={i}
                  className="dia"
                  style={marcado ? { backgroundColor: "green", color: "white" } : {}}
                >
                  {dia}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default Calendario;
