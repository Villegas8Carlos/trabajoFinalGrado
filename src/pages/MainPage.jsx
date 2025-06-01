import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";

const MainPage = () => {
  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const user = JSON.parse(storedUser);
    const id = user.nickname;
    
    fetch(`http://localhost:8080/api/calendario/addOrUpdateFechaActual/${id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fecha actual añadida o actualizada:", data);
      })
      .catch((err) => console.error("Error añadiendo fecha actual:", err));
  }
}, []);

  return (
    <MainLayout />
  );
};

export default MainPage;