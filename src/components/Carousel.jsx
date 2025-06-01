import { useState, useEffect } from "react";
import "../styles/Carousel.css";

const Carousel = () => {
  const slides = [
    {
      img: "/images/foto_carrusel_1.jpg",
      caption: "Transforma tu cuerpo, transforma tu vida.",
    },
    {
      img: "/images/foto_carrusel_2.jpg",
      caption: "Entrena con propósito en EatFit.",
    },
    {
      img: "/images/foto_carrusel_3.jpg",
      caption: "Fuerza, energía y bienestar cada día.",
    },
    {
      img: "/images/foto_carrusel_4.jpg",
      caption: "Tu mejor versión empieza en EatFit.",
    },
    {
      img: "/images/foto_carrusel_5.jpg",
      caption: "EatFit: Donde la comida sana y el fitness se unen.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const prev = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.img}
            alt={`Foto ${i + 1}`}
            className={`carousel-image ${i === index ? "active" : ""}`}
          />
        ))}
        <button onClick={prev} aria-label="Anterior">‹</button>
        <button onClick={next} aria-label="Siguiente">›</button>
      </div>

      {/* Texto fuera del carrusel */}
      <p className="carousel-caption">{slides[index].caption}</p>
    </div>
  );
};

export default Carousel;
