import React from "react";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Calendario from "../components/Calendario";
import "../styles/CalendarioPage.css";

const CalendarioPage = () => {
  return (
    <>
    <Navbar />
    <div className="grid-calendario">
      <Calendario year={2025} />
    </div>
    <Footer />
    </>
  );
};

export default CalendarioPage;
