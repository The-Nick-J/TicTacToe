import React from "react";
// declaramos una funcion para las casillas que destructura la clase, el valor y el turno del jugador
function Tile({ className, value, onClick, playerTurn}) {
  // declaramos una variable para la clase de hover
  let hoverClass = null;
  // si el valor es nulo y el turno del jugador no es nulo, entonces la clase de hover es igual al turno del jugador en minusculas
  if(value === null && playerTurn !== null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  // retornamos las casillas con sus respectivos valores y clases
  return <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>{value}</div>;
}

export default Tile;
