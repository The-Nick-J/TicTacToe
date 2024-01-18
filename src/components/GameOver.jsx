import React from "react";
import GameState from "./GameState";

// declaramos una funcion para el estado del juego
function  GameOver({ gameState }) {
  // switch para el estado del juego
  switch(gameState) {
    // si el estado es en progreso, entonces no hay ganador
    case GameState.inProgress:
      return <></>;
      // si el estado es de o, entonces gana o
    case GameState.playerOWins:
      return <div className="game-over">Player O wins!</div>;
      // si el estado es de x, entonces gana x
    case GameState.playerXWins:
      return <div className="game-over">Player X wins!</div>;
      // si el estado es de empate, entonces hay un empate
    case GameState.draw:
      return <div className="game-over">Draw!</div>;
    default: <></>;
  }
}


export default GameOver;