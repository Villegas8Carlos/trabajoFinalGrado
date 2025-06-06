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
          title="Premium 0"
          description="Este premium es el plan gratis, es decir, si quieres contratar este premium 
          solo podrás acceder a las pestañas Rutinas y Alimentación."
          image="/images/plan1.jpg"
          buttonText="Aplicar premium 0"
          onButtonClick={async () => {
          try {
            // Aquí asumimos que tienes el userId disponible (por ejemplo, del contexto o localStorage)
            const userId = JSON.parse(localStorage.getItem("user")).id;

            const response = await fetch(`http://localhost:8080/api/usuarios/${userId}/actualizar-premium`, {
              method: "PUT",  // o "POST" según tu API
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ premium: "0" }),
            });

            if (!response.ok) {
              throw new Error("Error al actualizar el usuario");
            }

            const data = await response.json();
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
                  showConfirmButton: false, // Oculta botón
                  timer: 2000,              // Se cierra en 2 segundos
                  timerProgressBar: true,   // Opcional: barra de progreso
                }).then(() => {
                  window.location.reload();
                });
              } else return;
            });

          } catch (error) {
            console.log(error.message)
            alert("Hubo un error al aplicar el plan: " + error.message);
            console.error(error);
          }
        }}
        />
        <CardYB
          title="Premium 1"
          description="Este premium ya es un plan intermedio donde puedes ver el contenido de la pestaña 
          Calendario, esta pestaña te da un seguimiento sobre que días has completado tus objetivos."
          image="/images/plan2.jpg"
          buttonText="Aplicar premium 1"
          onButtonClick={async () => {
          try {
            // Aquí asumimos que tienes el userId disponible (por ejemplo, del contexto o localStorage)
            const userId = JSON.parse(localStorage.getItem("user")).id;

            const response = await fetch(`http://localhost:8080/api/usuarios/${userId}/actualizar-premium`, {
              method: "PUT",  // o "POST" según tu API
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ premium:"1" }),
            });

            if (!response.ok) {
              throw new Error("Error al actualizar el usuario");
            }

            const data = await response.json();
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
                  showConfirmButton: false, // Oculta botón
                  timer: 5000,              // Se cierra en 2 segundos
                  timerProgressBar: true,   // Opcional: barra de progreso
                }).then(() => {
                  window.location.reload();
                });
              } else return;
            });

            console.log("Respuesta del servidor:", data);
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
            // Aquí asumimos que tienes el userId disponible (por ejemplo, del contexto o localStorage)
            const userId = JSON.parse(localStorage.getItem("user")).id;

            const response = await fetch(`http://localhost:8080/api/usuarios/${userId}/actualizar-premium`, {
              method: "PUT",  // o "POST" según tu API
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ premium: "2" }),
            });

            if (!response.ok) {
              throw new Error("Error al actualizar el usuario");
            }

            const data = await response.json();
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
                  showConfirmButton: false, // Oculta botón
                  timer: 2000,              // Se cierra en 2 segundos
                  timerProgressBar: true,   // Opcional: barra de progreso
                }).then(() => {
                  window.location.reload();
                });
              } else return;
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
