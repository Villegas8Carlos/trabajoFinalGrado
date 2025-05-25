import { useState } from "react";
import "../styles/Carousel.css";
const Carousel = () => {
  const images = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg",
    "/images/foto5.jpg",
  ];
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
<div className="carousel">
  <button onClick={prev} aria-label="Anterior">‹</button>
  <img src={images[index]} alt={`Foto ${index + 1}`} />
  <button onClick={next} aria-label="Siguiente">›</button>
</div>
  );
};
export default Carousel;