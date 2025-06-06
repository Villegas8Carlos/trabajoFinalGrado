import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

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
    <>
      <Navbar />
      <MainLayout />
      <Footer />
    </>
  );
};

export default MainPage;