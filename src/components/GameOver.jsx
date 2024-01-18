import React from "react";
import GameState from "./GameState";

function  GameOver({ gameState }) {
  switch(gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">Player O wins!</div>;
    case GameState.playerXWins:
      return <div className="game-over">Player X wins!</div>;
    case GameState.draw:
      return <div className="game-over">Draw!</div>;
    default: <></>;
  }
}


export default GameOver;