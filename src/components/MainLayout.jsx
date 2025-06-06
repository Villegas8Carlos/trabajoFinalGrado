import Carousel from "./Carousel";
import CardNB from "./CardWithoutButton";
import CardYB from "./CardWithButton";
import "../styles/MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <main>
      
      <div className="three-column-layout">
        <CardNB
          title="Nutrición"
          description="En EatFit creemos que el equilibrio entre una buena nutrición y 
          el entrenamiento constante es la clave para transformar tu cuerpo y tu estilo de vida."
          image="/images/nutricion.jpg"
        />

        <Carousel />

        <CardNB
          title="Entrenamiento"
          description="El ejercicio constante no solo fortalece tu cuerpo, 
          también construye disciplina, energía y bienestar desde adentro hacia afuera."
          image="/images/entrenamiento.jpg"
        />
      </div>

      <section className="content">{children}</section>

      {/* Cuatro cards con botón abajo */}
      <div className="four-card-row">
        <CardYB
          title="Premium 1"
          description="Este premium es el plan gratis, es decir, si quieres contratar este premium 
          solo podrás acceder a las pestañas Rutinas y Alimentación."
          image="/images/plan1.jpg"
          buttonText="Ver más"
          onButtonClick={() => alert("Card 1 clic")}
        />
        <CardYB
          title="Premium 2"
          description="Este premium ya es un plan intermedio donde puedes ver el contenido de la pestaña 
          Calendario, esta pestaña te da un seguimiento sobre que días has completado tus objetivos."
          image="/images/plan2.jpg"
          buttonText="Ver más"
          onButtonClick={() => alert("Card 2 clic")}
        />
        <CardYB
          title="Premium 3"
          description="Este premium ya es un plan avanzado y el mejor plan al que se puede acceder. 
          Con este plan, puedes acceder a todas las funcionalidades de la aplicación. Tendrás acceso a la pestaña Foro, 
          la cual te ofrece un foro de preguntas realizadas por los usuarios y respondidas por el personal de la aplicación."
          image="/images/plan3.jpg"
          buttonText="Ver más"
          onButtonClick={() => alert("Card 3 clic")}
        />
      </div>

    </main>
  );
};

export default MainLayout;
