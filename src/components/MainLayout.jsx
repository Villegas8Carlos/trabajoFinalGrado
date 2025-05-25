import Navbar from "./NavBar.jsx";
import Carousel from "./Carousel.jsx";
import Footer from "./Footer.jsx";
import "../styles/MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />  {/* Aquí sólo pones la etiqueta y el navbar funciona con su propio estado */}
      <Carousel />
      <section className="content">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;