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
    const currentIndex = colors.indexOf(color); //la función indexOf busca el índice actual del color en el array colors.
    const nextColor = colors[(currentIndex + 1) % colors.length]; //currentIndex + 1 lo que hace es aumentar el indice actual en 1 para pasar al sigueinte color de la lista. El signo % hace que cuando llegue al final del arreglo (currentIndex + 1 = colors.length), el array vuelva a comenzar. Así se repite ciclicamente.
    setColor(nextColor); 
  };

 
  const togglePurpleLight = () => {
    const purpleExists = lights.some((light) => light.color === "purple");

    if (purpleExists) {
      setLights(lights.filter((light) => light.color !== "purple")); 
    } else {
      const newLight = { id: "purple", color: "purple" }; 
      setLights([...lights, newLight]);
    }
  };


  const handleClick = (selectedColor) => {
    setColor(selectedColor); 
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




