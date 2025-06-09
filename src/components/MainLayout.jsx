import Carousel from "./Carousel";
import CardNB from "./CardWithoutButton";
import CardYB from "./CardWithButton";
import "../styles/MainLayout.css";
import Swal from "sweetalert2";

const MainLayout = ({ children }) => {
  return (
    <main>
      <div className="three-column-layout">
        <CardNB
          title="Nutrición y Entrenamiento"
          description="En EatFit combinamos una alimentación saludable con entrenamientos 
          efectivos para ayudarte a lograr tu mejor versión. Energía, fuerza y bienestar 
          en un solo lugar."
          image="/images/nutricion.jpg"
        />

        <Carousel />

      </div>

      <section className="content">{children}</section>

      {/* Texto explicativo encima de las tarjetas de premium */}
      <section className="premium-info">
        <p>Mejora tu plan y accede a más funcionalidades de la aplicación</p>
      </section>

      {/* Cuatro cards con botón abajo */}
      <div className="four-card-row">
        <CardYB
          title="Premium 0"
          description="Este premium es el plan gratis, es decir, si quieres contratar este premium 
          solo podrás acceder a las pestañas Rutinas y Alimentación."
          image="/images/plan1.jpg"
          buttonText="Aplicar premium 0"
          onButtonClick={async () => {
            try {
              if(localStorage.getItem("user")==null){
                Swal.fire({
                    title: "ERROR",
                    text: "No estas logueado. Inicia sesión para poder acceder a los planes premium de nuestra aplicación.",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                  });
                  return;
              }
                
              const userId = JSON.parse(localStorage.getItem("user")).id;
              

              const response = await fetch(`http://localhost:8080/api/usuarios/${userId}/actualizar-premium`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ premium: "0" }),
              });

              if (!response.ok) throw new Error("Error al actualizar el usuario");

              Swal.fire({
                title: "Simulación de pago",
                text: `Estás seleccionando el plan premium nivel 0. ¿Deseas continuar con el pago?`,
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Pagar",
                cancelButtonText: "Cancelar",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "¡Pago exitoso!",
                    text: "Tu plan premium de nivel 0 ha sido activado.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                  }).then(() => window.location.reload());
                }
              });
            } catch (error) {
              alert("Hubo un error al aplicar el plan: " + error.message);
              console.error(error);
            }
          }}
        />
        <CardYB
          title="Premium 1"
          description="Este premium ya es un plan intermedio donde puedes ver el contenido de la pestaña 
          Calendario, esta pestaña te da un seguimiento sobre qué días has completado tus objetivos."
          image="/images/plan2.jpg"
          buttonText="Aplicar premium 1"
          onButtonClick={async () => {
            try {
              if(localStorage.getItem("user")==null){
                Swal.fire({
                    title: "ERROR",
                    text: "No estas logueado. Inicia sesión para poder acceder a los planes premium de nuestra aplicación.",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                  });
                  return;
              }
              const userId = JSON.parse(localStorage.getItem("user")).id;

              const response = await fetch(`http://localhost:8080/api/usuarios/${userId}/actualizar-premium`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ premium: "1" }),
              });

              if (!response.ok) throw new Error("Error al actualizar el usuario");
              
              Swal.fire({
                title: "Simulación de pago",
                text: `Estás seleccionando el plan premium nivel 1. ¿Deseas continuar con el pago?`,
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Pagar",
                cancelButtonText: "Cancelar",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "¡Pago exitoso!",
                    text: "Tu plan premium de nivel 1 ha sido activado.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                  }).then(() => window.location.reload());
                }
              });
            } catch (error) {
              alert("Hubo un error al aplicar el plan: " + error.message);
              console.error(error);
            }
          }}
        />
        <CardYB
          title="Premium 2"
          description={`Este premium ya es un plan avanzado y el mejor plan al que se puede acceder. 
          Con este plan, puedes acceder a todas las funcionalidades de la aplicación. Tendrás acceso a la pestaña Foro, 
          la cual te ofrece un foro de preguntas realizadas por los usuarios y respondidas por el personal de la aplicación.`}
          image="/images/plan3.jpg"
          buttonText="Aplicar premium 2"
          onButtonClick={async () => {
            try {
              if(localStorage.getItem("user")==null){
                Swal.fire({
                    title: "ERROR",
                    text: "No estas logueado. Inicia sesión para poder acceder a los planes premium de nuestra aplicación.",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                  });
                  return;
              }
              const userId = JSON.parse(localStorage.getItem("user")).id;

              const response = await fetch(`http://localhost:8080/api/usuarios/${userId}/actualizar-premium`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ premium: "2" }),
              });

              if (!response.ok) throw new Error("Error al actualizar el usuario");

            
              Swal.fire({
                title: "Simulación de pago",
                text: `Estás seleccionando el plan premium nivel 2. ¿Deseas continuar con el pago?`,
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Pagar",
                cancelButtonText: "Cancelar",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "¡Pago exitoso!",
                    text: "Tu plan premium de nivel 2 ha sido activado.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                  }).then(() => window.location.reload());
                }
              });
            } catch (error) {
              alert("Hubo un error al aplicar el plan: " + error.message);
              console.error(error);
            }
          }}
        />
      </div>
    </main>
  );
};

export default MainLayout;
