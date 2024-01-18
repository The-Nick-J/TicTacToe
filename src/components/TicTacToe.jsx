import React, {useState,useEffect} from 'react';
import Board from './Board';
import GameOver from './GameOver';
import GameState from './GameState';

const PLAYER_X = "X";
const PLAYER_O = "O";


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


function checkWinner(tiles, setGameState) {
  for(const combo of winningCombos){
    const tileValue1 = tiles[combo[0]]
    const tileValue2 = tiles[combo[1]]
    const tileValue3 = tiles[combo[2]]

    if(tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
      if(tileValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
    }
  }
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [gameState, setGameState] = useState(GameState.inProgress)


const handleTileClick = (index) => {
  if(tiles[index] !== null) return;

  const newTiles = [...tiles];
  newTiles[index] = playerTurn;
  setTiles(newTiles);
  if(playerTurn === PLAYER_X) {
    setPlayerTurn(PLAYER_O);
  } else if (playerTurn === PLAYER_O) {
    setPlayerTurn(PLAYER_X);
  }
};

useEffect(() => {
  checkWinner(tiles);
}, [tiles, setGameState]);



  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
      <GameOver gameState={gameState}/>
    </div>
  )
}

export default TicTacToe;