import React, {useState,useEffect} from 'react';
import Board from './Board';
import GameOver from './GameOver';
import GameState from './GameState';

//declaramos variables para ambos jugadores
const PLAYER_X = "X";
const PLAYER_O = "O";

//declaramos los posibles combos ganadores
const winningCombos = [
  //Rows
  {combo:[0,1,2], },
  {combo:[3,4,5], },
  {combo:[6,7,8], },
  //Column
  {combo:[0, 3, 6] },
  {combo:[1, 4, 7] },
  {combo:[2, 5, 8] },
  //Diagonales
  {combo:[0,4,8]},
  {combo:[6,4,2]},
];

// declaramos una funcion para verificar si hay un ganador
function checkWinner(tiles, setGameState) {
  for(const combo of winningCombos){
    const tileValue1 = tiles[combo.combo[0]]
    const tileValue2 = tiles[combo.combo[1]]
    const tileValue3 = tiles[combo.combo[2]]
// si los valores de las casillas son iguales y no son nulos, entonces hay un ganador
    if(
      tileValue1 !== null &&
      // si los valores de las casillas son iguales, entonces hay un ganador
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
      ) {
        // si el valor de la casilla es igual a X, entonces gana X
      if(tileValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
        // si el valor de la casilla es igual a O, entonces gana O
      } else if (tileValue1 === PLAYER_O){
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }
  // si todas las casillas estan llenas y no hay ganador, entonces hay un empate
  const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
  if(areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
}
// declaramos una funcion para el juego
function TicTacToe() {
  //llenamos las casillas con un array de 9 casillas vacias
  const [tiles, setTiles] = useState(Array(9).fill(null));
  // declaramos el turno del jugador
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  // declaramos el estado del juego
  const [gameState, setGameState] = useState(GameState.inProgress);

// declaramos una funcion para el click de las casillas
const handleTileClick = (index) => {
  if(gameState !== GameState.inProgress) return;
  if(tiles[index] !== null) return;

  // declaramos una variable para las casillas copiando el array original
  const newTiles = [...tiles];
  newTiles[index] = playerTurn;
  setTiles(newTiles);
  // si el turno es de X, entonces el siguiente turno es de O
  if(playerTurn === PLAYER_X) {
    setPlayerTurn(PLAYER_O);
    // si el turno es de O, entonces el siguiente turno es de X
  } else if (playerTurn === PLAYER_O) {
    setPlayerTurn(PLAYER_X);
  }
};

// declaramos un efecto para verificar si hay un ganador
useEffect(() => {
  checkWinner(tiles, setGameState);
}, [tiles, setGameState]);



  return (
    // retornamos el tablero, el estado del juego y el ganador
    <div>
      <h1>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
      <GameOver gameState={gameState} />
    </div>
  )
}

export default TicTacToe;