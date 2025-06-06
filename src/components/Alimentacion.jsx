import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Alimentacion.css";

export default function Dietas() {
  const [dietas, setDietas] = useState([]);
  const [cuestionario, setCuestionario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function obtenerDiaSemana() {
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    return dias[new Date().getDay()];
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const fetchDatos = async () => {
      try {
        const cuestionarioRes = await fetch(`http://localhost:8080/api/cuestionario/${user.id}`);
        if (!cuestionarioRes.ok) throw new Error("No se pudo cargar el cuestionario");
        const cuestionarioData = await cuestionarioRes.json();
        setCuestionario(cuestionarioData);

        const dietasRes = await fetch("http://localhost:8080/api/dietas");
        if (!dietasRes.ok) throw new Error("No se pudo cargar las dietas");
        const dietasData = await dietasRes.json();
        setDietas(dietasData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatos();
  }, []);

  if (loading) return <img src="/images/loading.gif" alt="Cargando" />;
  if (error) return <p>Error: {error}</p>;
  if (!cuestionario) return <p>No se encontró cuestionario del usuario.</p>;

  const diaActual = obtenerDiaSemana();
  const dietaHoy = dietas.find(
    (d) =>
      d.dia.toLowerCase() === diaActual &&
      d.tipo === cuestionario.pregunta2
  );

  if (!dietaHoy) return <p>No hay dieta para hoy.</p>;

  const comidas = [
    { nombre: "Desayuno", valor: dietaHoy.desayuno },
    { nombre: "Media Mañana", valor: dietaHoy.media_mañana },
    { nombre: "Comida", valor: dietaHoy.comida },
    { nombre: "Merienda", valor: dietaHoy.merienda },
    { nombre: "Cena", valor: dietaHoy.cena },
  ];

  return (
    <div className="dieta-container">
      <h1 className="titulo-dieta">
        Dieta de {diaActual.charAt(0).toUpperCase() + diaActual.slice(1)} para {cuestionario.pregunta2}
      </h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="swiper-dieta"
      >
        {comidas.map((comida, idx) => (
          <SwiperSlide key={idx}>
            <div className="card-comida-slider">
              <h2>{comida.nombre}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{comida.valor.replace(/_/g, "\n")}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
