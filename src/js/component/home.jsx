import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");
  const [lights, setLights] = useState([
    { id: "red", color: "red" },
    { id: "yellow", color: "yellow" },
    { id: "green", color: "green" },
  ]); 

  
  const changeColor = () => {
    const colors = ["red", "yellow", "green"];
    const currentIndex = colors.indexOf(color); //la función indexOf busca el ígit push al en el array colors
    const nextColor = colors[(currentIndex + 1) % colors.length]; //currentIndex + 1: Aumenta el índice actual en 1 para pasar al siguiente color. // % = asegura que si llegas al final del array, vuelvas al principio.
    setColor(nextColor); 
  };

  // Función para agregar o quitar una luz morada, alternadamente
  const togglePurpleLight = () => {
    // Verifica si ya existe la luz morada
    const purpleExists = lights.some((light) => light.color === "purple");

    if (purpleExists) {
      setLights(lights.filter((light) => light.color !== "purple")); //Si existe la luz morada la elimina
    } else {
      const newLight = { id: "purple", color: "purple" }; // Si no existe, agrega una nueva luz morada
      setLights([...lights, newLight]); //se utiliza para actualizar el estado lights
    }
  };


  const handleClick = (selectedColor) => {
    setColor(selectedColor); // Actualiza el color que debe brillar
  };

  return (
    <>
      <div className="stick"></div>
      <div className="trafficLight">
        {lights.map((light) => (
          <div
            key={light.id}
            className={`light ${light.color} ${color === light.color ? "shine" : ""}`}
            onClick={() => handleClick(light.color)}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button className="btn btn-dark" onClick={togglePurpleLight}>
          Add/Remove Purple
        </button>
        <button className="btn btn-dark" onClick={changeColor}>
          Change Color
        </button>
      </div>
    </>
  );
};

export default Home;




