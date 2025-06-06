import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/Rutinas.css";

const Rutinas = () => {
  const [tipo, setTipo] = useState(null);
  const [ejercicios, setEjercicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function obtenerDiaSemana() {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[new Date().getDay()];
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setError("Usuario no encontrado");
      setLoading(false);
      return;
    }

    const fetchDatos = async () => {
      try {
        const cuestionarioRes = await fetch(`http://localhost:8080/api/cuestionario/${user.id}`);
        if (!cuestionarioRes.ok) throw new Error("No se pudo cargar el cuestionario");
        const cuestionarioData = await cuestionarioRes.json();
        const objetivo = cuestionarioData.pregunta2;
        setTipo(objetivo);

        const ejerciciosRes = await fetch("http://localhost:8080/api/rutinas");
        if (!ejerciciosRes.ok) throw new Error("No se pudo cargar los ejercicios");
        const ejerciciosData = await ejerciciosRes.json();

        const ejerciciosFiltrados = ejerciciosData.filter((e) => e.tipo === objetivo);
        setEjercicios(ejerciciosFiltrados);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatos();
  }, []);

  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tipo || ejercicios.length === 0) return <p>No se encontraron ejercicios para tu objetivo.</p>;

  const diaActual = obtenerDiaSemana();
  
    const rutinaHoy = ejercicios.filter(
  (d) =>
    Array.isArray(d.dias) &&
    d.dias.some((dia) => dia === diaActual) &&
    d.tipo === tipo
);

  if (!rutinaHoy) return <p>No hay rutina asignada para hoy.</p>;


  return (
    <div className="ejercicio-swiper-container">
      <h2>Ejercicios de {diaActual} para {tipo}</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="swiper-ejercicios"
      >
        {rutinaHoy.map((ej, idx) => (
            <SwiperSlide key={idx}>
                <div className="slide-card">
                <h3>{ej.nombre}</h3>
                <video
                    src={ej.imagen}
                    controls
                    autoPlay
                    loop
                    muted
                    className="video-ejercicio"
                />
                </div>
            </SwiperSlide>
            ))}

      </Swiper>
    </div>
  );
};

export default Rutinas;
