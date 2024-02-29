import React from "react";

function Card({ informacion }) {
  
  if (!informacion) {
    return null; 
  }

  return (
    <div>
      <h4>Hola, {informacion.name}!</h4>
      <h4>Tu color favorito es: {informacion.color}.</h4>
    </div>
  );
}

export default Card;