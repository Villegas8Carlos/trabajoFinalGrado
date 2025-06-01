import Navbar from "./NavBar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import CardNB from "./CardWithoutButton";
import CardYB from "./CardWithButton";
import "../styles/MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />

      <div className="three-column-layout">
        <CardNB
          title="Nutrición"
          description="Planes personalizados para tu dieta."
          image="/images/nutricion.jpg"
        />

        <Carousel />

        <CardNB
          title="Entrenamiento"
          description="Rutinas adaptadas a tu nivel."
          image="/images/entrenamiento.jpg"
        />
      </div>

      <section className="content">{children}</section>

      {/* Cuatro cards con botón abajo */}
      <div className="four-card-row">
        <CardYB
          title="Premium 1"
          description="Descripción de premium 1."
          image="/images/plan1.jpg"
          buttonText="Ver más"
          onButtonClick={() => alert("Card 1 clic")}
        />
        <CardYB
          title="Premium 2"
          description="Descripción de premium 2."
          image="/images/plan2.jpg"
          buttonText="Ver más"
          onButtonClick={() => alert("Card 2 clic")}
        />
        <CardYB
          title="Premium 3"
          description="Descripción de premium 3."
          image="/images/plan3.jpg"
          buttonText="Ver más"
          onButtonClick={() => alert("Card 3 clic")}
        />
        <CardYB
          title="Premium 4"
          description="Descripción de premium 4."
          image="/images/plan4.jpg"
          buttonText="Ver más"
          onButtonClick={() => alert("Card 4 clic")}
        />
      </div>

      <Footer />
    </main>
  );
};

export default MainLayout;
