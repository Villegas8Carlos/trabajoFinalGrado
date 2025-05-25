import React from "react";
import Calendario from "../components/Calendario";
import "../styles/CalendarioPage.css";

const CalendarioPage = () => {
  return (
    <div className="grid-calendario">
      <Calendario year={2025} />
    </div>
  );
};

export default CalendarioPage;
